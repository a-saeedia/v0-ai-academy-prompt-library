-- Create profiles table
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.profiles enable row level security;

create policy "profiles_select_own"
  on public.profiles for select
  using (auth.uid() = id);

create policy "profiles_insert_own"
  on public.profiles for insert
  with check (auth.uid() = id);

-- Create custom_prompts table for user-created prompts
create table if not exists public.custom_prompts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  title_en text not null,
  title_fa text not null,
  prompt_en text not null,
  prompt_fa text not null,
  category text not null,
  industry text not null,
  is_favorite boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table public.custom_prompts enable row level security;

create policy "custom_prompts_select_own"
  on public.custom_prompts for select
  using (auth.uid() = user_id);

create policy "custom_prompts_insert_own"
  on public.custom_prompts for insert
  with check (auth.uid() = user_id);

create policy "custom_prompts_update_own"
  on public.custom_prompts for update
  using (auth.uid() = user_id);

create policy "custom_prompts_delete_own"
  on public.custom_prompts for delete
  using (auth.uid() = user_id);

-- Create trigger to auto-create profile
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute function public.handle_new_user();
