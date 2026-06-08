#!/usr/bin/env bash
# 서비스별 공유 페이지(/s/{slug}.html) + OG 이미지(/og/{slug}.png)를 data.js에서 일괄 재생성.
# data.js가 바뀌면 이 스크립트만 다시 돌리면 됨:  bash gen-share.sh
set -e
cd "$(dirname "$0")"
BASE="https://ai-founders-exhibition.vercel.app"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
PORT=8920

mkdir -p s og

# 1) /s/{slug}.html 생성 + 슬러그 목록 출력
node - "$BASE" > /tmp/slugs.txt <<'NODE'
const fs=require('fs');
const BASE=process.argv[2];
const code=fs.readFileSync('data.js','utf8');
const window={}; new Function('window',code)(window);
const D=window.EXHIBIT_DATA;
const esc=s=>String(s||'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
for(const d of D){
  const enc=encodeURIComponent(d.name);
  const title=`${d.title} — ${d.name}님이 만든 서비스`;
  const html=`<!DOCTYPE html><html lang="ko"><head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${esc(title)} · AI 파운더스 1기</title>
<meta property="og:type" content="website"/>
<meta property="og:site_name" content="AI 파운더스 1기 서비스 전시회"/>
<meta property="og:title" content="${esc(title)}"/>
<meta property="og:description" content="${esc(d.tag)}"/>
<meta property="og:image" content="${BASE}/og/${d.slug}.png"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>
<meta property="og:url" content="${BASE}/s/${d.slug}.html"/>
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="${esc(title)}"/>
<meta name="twitter:description" content="${esc(d.tag)}"/>
<meta name="twitter:image" content="${BASE}/og/${d.slug}.png"/>
<link rel="canonical" href="${BASE}/detail.html?s=${enc}"/>
<meta http-equiv="refresh" content="0;url=/detail.html?s=${enc}"/>
<script>location.replace('/detail.html?s=${enc}');</script>
</head><body style="margin:0;background:#0c0608;color:#fff;font-family:Pretendard,sans-serif;display:grid;place-items:center;height:100vh">
<p>전시회로 이동 중…</p>
</body></html>`;
  fs.writeFileSync(`s/${d.slug}.html`, html);
  console.log(d.slug);
}
console.error(`wrote ${D.length} share pages`);
NODE

# 2) OG 이미지 생성 (headless chrome 스크린샷)
python3 -m http.server $PORT >/dev/null 2>&1 &
SRV=$!
sleep 1
N=0
while read -r slug; do
  [ -z "$slug" ] && continue
  "$CHROME" --headless --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --window-size=1200,630 --virtual-time-budget=2500 \
    --screenshot="og/${slug}.png" "http://localhost:$PORT/og-card.html?s=${slug}" >/dev/null 2>&1
  N=$((N+1))
done < /tmp/slugs.txt
kill $SRV 2>/dev/null || true
echo "generated $N OG images → og/"
