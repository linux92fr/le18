-- Données des rassemblements du 5 novembre 2026.
-- À exécuter dans Supabase > SQL Editor sur le projet dédié.

create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create or replace function public.is_mobilisation_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_mobilisation_admin() from public;
grant execute on function public.is_mobilisation_admin() to authenticated;

create table if not exists public.mobilisation_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  city text not null,
  department_code text not null,
  address text,
  starts_at timestamptz not null,
  ends_at timestamptz,
  description text,
  latitude double precision not null check (latitude between -90 and 90),
  longitude double precision not null check (longitude between -180 and 180),
  status text not null default 'draft' check (status in ('draft', 'published')),
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists mobilisation_events_public_date_idx
  on public.mobilisation_events (starts_at)
  where status = 'published';
create index if not exists mobilisation_events_department_idx
  on public.mobilisation_events (department_code);

create or replace function public.set_mobilisation_event_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists mobilisation_events_updated_at on public.mobilisation_events;
create trigger mobilisation_events_updated_at
before update on public.mobilisation_events
for each row execute function public.set_mobilisation_event_updated_at();

alter table public.admin_users enable row level security;
alter table public.mobilisation_events enable row level security;

-- Aucun accès public à la liste des administrateurs.
drop policy if exists "Admins can read admin list" on public.admin_users;
create policy "Admins can read admin list"
  on public.admin_users for select
  to authenticated
  using (public.is_mobilisation_admin());

-- Les visiteurs ne voient que les rassemblements publiés.
drop policy if exists "Anyone can read published events" on public.mobilisation_events;
create policy "Anyone can read published events"
  on public.mobilisation_events for select
  to anon, authenticated
  using (status = 'published' or public.is_mobilisation_admin());

drop policy if exists "Admins can insert events" on public.mobilisation_events;
create policy "Admins can insert events"
  on public.mobilisation_events for insert
  to authenticated
  with check (public.is_mobilisation_admin());

drop policy if exists "Admins can update events" on public.mobilisation_events;
create policy "Admins can update events"
  on public.mobilisation_events for update
  to authenticated
  using (public.is_mobilisation_admin())
  with check (public.is_mobilisation_admin());

drop policy if exists "Admins can delete events" on public.mobilisation_events;
create policy "Admins can delete events"
  on public.mobilisation_events for delete
  to authenticated
  using (public.is_mobilisation_admin());

grant select on public.mobilisation_events to anon, authenticated;
grant insert, update, delete on public.mobilisation_events to authenticated;
grant select on public.admin_users to authenticated;

-- Après création du compte administrateur dans Authentication > Users,
-- exécuter en remplaçant l'UUID :
-- insert into public.admin_users (user_id) values ('UUID-DU-COMPTE-AUTORISÉ');
