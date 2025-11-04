-- Create functions to increment/decrement likes count
create or replace function increment_likes(prompt_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  update public.community_prompts
  set likes_count = likes_count + 1
  where id = prompt_id;
end;
$$;

create or replace function decrement_likes(prompt_id uuid)
returns void
language plpgsql
security definer
as $$
begin
  update public.community_prompts
  set likes_count = greatest(0, likes_count - 1)
  where id = prompt_id;
end;
$$;
