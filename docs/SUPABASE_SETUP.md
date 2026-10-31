# Configuration Supabase – carte des rassemblements

Le projet Supabase dédié est distinct du projet utilisé par le site FO COM UES ILIAD.

## 1. Variables d'environnement

Configurer ces variables dans l'environnement de déploiement du site (et localement dans un fichier `.env` non versionné) :

- `VITE_SUPABASE_URL` : URL du projet Supabase dédié.
- `VITE_SUPABASE_ANON_KEY` : clé publique `publishable` ou ancienne clé `anon`.

Ne jamais utiliser ni exposer une clé `service_role` ou une clé secrète dans le navigateur, Git ou les variables préfixées `VITE_`.

## 2. Base de données

Dans le projet Supabase, ouvrir **SQL Editor**, puis exécuter le contenu de `supabase/migrations/202610310001_create_mobilisation_events.sql`.

La migration crée les tables `mobilisation_events` et `admin_users`, les index, le déclencheur de mise à jour et les politiques RLS.

## 3. Créer le compte administrateur

1. Dans **Authentication > Providers**, vérifier que le fournisseur Email est activé.
2. Dans **Authentication > Users**, créer/inviter le compte qui administrera les rassemblements.
3. Copier son UUID.
4. Dans SQL Editor, autoriser explicitement ce compte :

```sql
insert into public.admin_users (user_id)
values ('UUID-DU-COMPTE-AUTORISÉ');
```

Seuls les UUID présents dans `admin_users` disposent des droits d'administration. Les visiteurs anonymes peuvent uniquement lire les rassemblements au statut `published`.

## 4. Données géographiques

Chaque rassemblement doit avoir une latitude et une longitude vérifiées. Ne pas publier une adresse ou des coordonnées approximatives : vérifier le point sur une carte avant publication.

## 5. Vérifications avant mise en ligne

- Renseigner les deux variables d'environnement sur l'hébergeur.
- Exécuter la migration SQL.
- Créer et autoriser au moins un compte administrateur.
- Tester la lecture publique, puis les opérations CRUD avec le compte autorisé.
- Vérifier qu'un compte connecté non autorisé ne peut ni créer, ni modifier, ni supprimer de rassemblement.
