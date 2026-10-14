-- The app uses public.dictionary only for authenticated dictionary lookups.
-- Keep reads available to signed-in users and deny all client-side writes.
begin;

alter table public.dictionary enable row level security;

revoke all privileges on table public.dictionary from public, anon, authenticated;
grant select on table public.dictionary to authenticated;

drop policy if exists "dictionary_read_authenticated" on public.dictionary;
create policy "dictionary_read_authenticated"
on public.dictionary
for select
to authenticated
using (true);

commit;
