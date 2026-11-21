-- La consultation post-mobilisation est terminée.
-- Les réponses existantes restent lisibles par les administrateurs autorisés,
-- mais aucun client public ou authentifié ne peut plus en créer de nouvelles.

drop policy if exists "Allow anonymous questionnaire submissions"
  on public.mobilisation_feedback;

revoke insert, update, delete
  on public.mobilisation_feedback
  from anon, authenticated;

comment on table public.mobilisation_feedback is
  'Consultation post-mobilisation du 5 novembre 2026, fermée aux nouvelles réponses depuis le 21 novembre 2026.';
