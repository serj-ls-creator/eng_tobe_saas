-- Add missing UPDATE policy for user_vocabulary_sets
create policy "user_vocabulary_sets_update_own"
on public.user_vocabulary_sets
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
