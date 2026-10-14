-- Keep each user's original free vocabulary allowance attached to specific
-- words so deleting one never reveals an older Premium-only word.
alter table public.user_vocabulary
  add column if not exists free_slot integer;

with ranked_words as (
  select
    id,
    row_number() over (partition by user_id order by created_at asc, id asc) as slot
  from public.user_vocabulary
)
update public.user_vocabulary as words
set free_slot = ranked_words.slot
from ranked_words
where words.id = ranked_words.id
  and ranked_words.slot <= 20
  and words.free_slot is null;

create unique index if not exists user_vocabulary_user_free_slot_unique
  on public.user_vocabulary (user_id, free_slot)
  where free_slot is not null;
