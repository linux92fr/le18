-- Questionnaire post-mobilisation FO COM UES ILIAD.
-- Public can submit responses; public reads and updates are deliberately denied.
create table if not exists public.mobilisation_feedback (
  id uuid primary key default gen_random_uuid(),
  entity text,
  barrier text,
  priorities text[] not null default '{}',
  preferred_action text,
  expected_change text,
  comment text,
  created_at timestamptz not null default now()
);

alter table public.mobilisation_feedback enable row level security;

drop policy if exists "Allow anonymous questionnaire submissions" on public.mobilisation_feedback;
create policy "Allow anonymous questionnaire submissions"
  on public.mobilisation_feedback
  for insert
  to anon, authenticated
  with check (
    (entity is null or length(entity) <= 120)
    and (barrier is null or length(barrier) <= 300)
    and cardinality(priorities) <= 3
    and (preferred_action is null or length(preferred_action) <= 300)
    and (expected_change is null or length(expected_change) <= 1200)
    and (comment is null or length(comment) <= 1500)
  );

revoke all on public.mobilisation_feedback from anon, authenticated;
grant insert on public.mobilisation_feedback to anon, authenticated;
