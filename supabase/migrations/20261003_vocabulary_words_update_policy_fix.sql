-- Ensure UPDATE policy exists for user_vocabulary (recreate if needed)
drop policy if exists "user_vocabulary_update_own" on public.user_vocabulary;

create policy "user_vocabulary_update_own"
on public.user_vocabulary
for update
to authenticated
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
