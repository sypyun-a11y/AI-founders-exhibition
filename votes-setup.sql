-- 데모데이 전시회 투표 (로그인 없음). 브라우저별 voter로 작품당 1표(중복 차단), 여러 작품 투표 허용.
-- Supabase SQL Editor 에서 1회 실행.
-- (이전에 로그인용 user_id 버전을 만들었다면 먼저: drop table if exists votes;)
create table if not exists votes (
  id bigint generated always as identity primary key,
  service_key text not null,
  voter text not null,             -- 브라우저별 익명 식별자(localStorage)
  created_at timestamptz default now(),
  unique (service_key, voter)      -- 같은 브라우저는 작품당 1표
);

alter table votes enable row level security;

-- 로그인 없는 공개 투표: anon 읽기·쓰기·취소 허용
create policy "anon read votes"   on votes for select to anon using (true);
create policy "anon insert votes" on votes for insert to anon with check (true);
create policy "anon delete votes" on votes for delete to anon using (true);
