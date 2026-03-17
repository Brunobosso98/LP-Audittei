create table if not exists public.demo_requests (
  id bigserial primary key,
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  company text,
  phone text not null,
  employees text,
  message text,
  source text not null default 'landing-page'
);

create index if not exists demo_requests_created_at_idx
on public.demo_requests (created_at desc);
