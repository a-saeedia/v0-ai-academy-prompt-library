-- Create community_prompts table for shared prompts
create table if not exists public.community_prompts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  author_email text not null,
  title_en text not null,
  title_fa text not null,
  prompt_en text not null,
  prompt_fa text not null,
  category text not null,
  industry text not null,
  likes_count integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.community_prompts enable row level security;

-- Everyone can read community prompts
create policy "community_prompts_select_all"
  on public.community_prompts for select
  using (true);

-- Users can insert their own community prompts
create policy "community_prompts_insert_own"
  on public.community_prompts for insert
  with check (auth.uid() = user_id);

-- Users can delete their own community prompts
create policy "community_prompts_delete_own"
  on public.community_prompts for delete
  using (auth.uid() = user_id);

-- Create likes table
create table if not exists public.community_prompt_likes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  prompt_id uuid not null references public.community_prompts(id) on delete cascade,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  unique(user_id, prompt_id)
);

alter table public.community_prompt_likes enable row level security;

create policy "likes_select_all"
  on public.community_prompt_likes for select
  using (true);

create policy "likes_insert_own"
  on public.community_prompt_likes for insert
  with check (auth.uid() = user_id);

create policy "likes_delete_own"
  on public.community_prompt_likes for delete
  using (auth.uid() = user_id);
