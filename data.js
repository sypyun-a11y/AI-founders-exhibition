// 전시회 공용 데이터 (목록 index.html / 상세 detail.html 공용)
(function(){
  const C={fin:"#3b6fd4",mkt:"#e53e3e",edu:"#8b5cf6",life:"#e0883c",health:"#1faf78",prod:"#2aa3c2",career:"#d2557e"};
  // [이름, 서비스명, URL, 설명(상세), 카테고리, 색, 이모지, 한줄카피(상세 소제목)]
  const RAW=[
   ["김도은","와트팜","https://wattfarm.vercel.app/","태양광 발전소를 1만 원 단위로 함께 소유하고 매월 배당을 받는 B2C 에너지 투자 서비스.","핀테크",C.fin,"☀️","태양광 발전소를 함께 소유하고 매월 배당받기"],
   ["박세현","SoloFin","https://solofin.vercel.app/login","1인 창업가를 위한 수익·지출 관리 앱. 혼자 사업하는 사람의 돈 흐름을 빈틈없이 정리해줘요.","핀테크",C.fin,"💰","1인 창업가를 위한 수익·지출 관리 앱"],
   ["윤상호","S2 트레이딩 따라하기","https://s2-trading-web.vercel.app/dashboard","내가 정한 매도 룰북대로 종목을 자동 감시하고, 매수 후보 종목군까지 자동으로 검출해주는 주식 매매 보조 서비스.","핀테크",C.fin,"📈","내 매도 룰 자동 감시 + 매수 후보 검출"],
   ["김민건","내 책 취향 찾기","https://book-taste-finder.vercel.app/","책 커버 사진 한 장이면 어떤 책인지 분석해, 구매 전에 이 책이 나와 맞는지 알려주는 서비스.","생활",C.life,"📚","책 커버 한 장으로, 나와 맞는 책인지 확인"],
   ["곽희진","오늘의 한끼","https://freeium-app.vercel.app/","냉장고 속 재료로 만들 수 있는 메뉴를 추천해주는 앱.","생활",C.life,"🍳","냉장고 속 재료로 만드는 오늘의 메뉴"],
   ["이규동","핏픽(FitPick)","https://fitpick-nine.vercel.app/download","강사 정보를 수집·관리하고 제안서 큐레이션까지 돕는 강사 데이터 관리 서비스.","생산성",C.prod,"🎯","강사 정보 수집·관리 + 제안서 큐레이션"],
   ["장세희","사이(Between)","https://my-project-one-gray.vercel.app/intro","감정과 행동 사이의 6초를 잡아주는, 부모를 위한 AI 페어런팅 코치. 욱하는 순간 내 패턴을 알면 달라져요.","헬스케어",C.health,"🧘","부모를 위한 AI 감정 코치, 그 6초"],
   ["박준홍","ChefNote","https://chefnote.kr/","조리학과 학생을 위한 AI 수업 노트. 녹음만 하면 재료·조리 순서·교수님 팁까지 자동으로 정리돼요.","교육",C.edu,"🎙️","녹음만 하면 수업 노트가 알아서 완성"],
   ["박혜준","아빠나야","https://dad-companion.vercel.app/family","아빠의 눈이 되어 드리는 AI 도우미.","생활",C.life,"👶","아빠의 눈이 되어 드릴 AI 도우미"],
   ["백일선","성분탐정","https://pet-food-app-3862.vercel.app/","바코드 스캔이나 제품명 검색으로 반려동물 사료의 원재료와 영양 성분을 분석해주는 서비스.","생활",C.life,"🐾","우리 아이 사료, 성분이 괜찮을까?"],
   ["박주연","페이지메이트","https://pagemate.vercel.app/login","책 한 권으로 연결되는 독서모임 서비스. 같은 책을 읽는 사람들과 만나 생각을 나눠요.","생활",C.life,"📖","책 한 권으로 연결되는 독서모임"],
   ["조성훈","Network Topology Tool","https://network-topology-tool.vercel.app/","네트워크 토폴로지를 시각적으로 그리고 관리하는 도구.","생산성",C.prod,"🌐","네트워크 구조를 눈에 보이게"],
   ["조현재","블로그 AI 작성기","https://blog-ai-writer-production.up.railway.app/","주제만 입력하면 SEO에 최적화된 블로그 포스트를 자동으로 생성해주는 서비스.","마케팅",C.mkt,"✍️","SEO 최적화 블로그 글 자동 생성"],
   ["홍주연","다이어트 탐정","https://my-todo-app-three-woad.vercel.app/","식습관·감정·패턴을 추적해 살이 안 빠지는 진짜 이유를 찾아주는 퍼스널 다이어트 진단 서비스.","헬스케어",C.health,"🥗","살이 안 빠지는 진짜 이유를 진단"],
   ["임원호","NCS 채용 매칭","https://ncs-job-matching-kr.surge.sh/","NCS 기반으로 내게 맞는 채용 공고를 매칭해주는 서비스.","커리어",C.career,"💼","NCS 기반 맞춤 채용 매칭"],
   ["김재민","MoaTime","https://moatime.vercel.app/","로그인 없이 PIN 번호로 모두의 가능한 시간을 모아 간편하게 일정을 잡는 서비스.","생산성",C.prod,"🗓️","로그인 없이 PIN으로, 일정 잡기"],
   ["홍영택","부스트업","https://boost-up-ten.vercel.app/","매일 한 줄 명언으로 하루의 동기를 채워주는 데일리 명언 서비스.","생활",C.life,"🚀","매일 한 줄 명언으로 시작하는 하루"],
   ["박찬성","Chession","https://chess-puzzle-v2.vercel.app/","체스 학원 학생과 독학자를 위한 테마별 퍼즐 트레이너. 틀린 문제를 자동 복습하고 풀이 시간으로 성장을 기록해요.","교육",C.edu,"♟️","테마별 체스 퍼즐로 실력 키우기"],
   ["김진승","ShortFactory AI","https://short-factory-ai.vercel.app/","키워드 하나로 유튜브 쇼츠 기획 전체를 자동 완성해주는 AI 콘텐츠 팩토리.","마케팅",C.mkt,"🎬","키워드 하나로 쇼츠 기획 자동 완성"],
   ["이정화","약플로(Yakflo)","https://ehwaa.com/","바코드 스캔만으로 유효기한과 재고를 한 번에 관리하는 소규모 약국·병원용 약품 관리 프로그램. 약사 자격 없이도 직원이 저렴하게 업무를 최적화해요.","생산성",C.prod,"💊","바코드로 유효기한·재고를 한 번에"],
   ["박지우","WimB","https://about.wimb.ai/","아이디어부터 영상 피드백까지 하나의 흐름으로 연결하는 AI 크리에이티브 워크스페이스. 언어·툴 장벽 없이 시각적으로 협업해요.","생산성",C.prod,"🎨","Visualize Your Vision — 시각적 AI 협업"],
   ["홍지혜","다온","https://daon-chi.vercel.app/dashboard","목표를 잃어도 다시 돌아올 수 있게, 곁에서 기억하고 먼저 찾아오는 퍼스널 AI 목표 코치.","헬스케어",C.health,"🌱","다시 돌아오게 하는 AI 목표 코치"],
   ["박근형","로카이","https://review-marketing-ten.vercel.app/login","리뷰 관리부터 쇼츠 홍보·자동 업로드까지, 자영업자·소상공인의 마케팅을 대신하는 우리가게 AI 직원. 인스타·카카오·네이버플레이스·구글 리뷰를 분석해 자동 응대하고 영업 인사이트까지 제공해요.","마케팅",C.mkt,"🏪","최저시급보다 저렴한 우리가게 AI 직원"],
   ["남현주","이자세이버","https://hyunju9056-interest-saver.vercel.app/","대출 갈아타기 계산으로 이자를 아껴주는 알리미. 더 나은 조건을 찾아 이자를 줄여줘요.","핀테크",C.fin,"🏦","이자 아껴주는 대출 갈아타기 알리미"],
   ["정준희","상담 카톡 안내문 생성기","https://rapythe-cmyk.github.io/kakao-counseling-message-helper/","고객 상담용 카카오톡 안내문을 자동으로 생성하고 검수해주는 사내 업무용 시스템.","생산성",C.prod,"💬","상담 카톡 안내문 자동 생성·검수"],
   ["김유진","책린이 독서 트래커","https://my-project-book-pi.vercel.app/","내 손안의 작은 도서관. 읽은 책을 기록하고 완독까지 도와주는 퍼스널 독서 기록 서비스.","생활",C.life,"📖","내 손안의 작은 도서관, 독서 기록"],
   ["김세림","키잇 (Key-it)","https://key-it-tau.vercel.app/","서울·경기 방탈출 매장의 테마·시간대·잔여석을 한 화면에서 비교하고 바로 예약하는 서비스.","생활",C.life,"🔑","방탈출, 한 화면에서 비교하고 예약"],
   ["김수민","BOXCARD","https://my-boxcard-app.vercel.app/","복서를 위한 운동 기록 커뮤니티. 꾸준함과 성장을 카드로 기록해요.","생활",C.life,"🥊","복서를 위한 운동 기록 커뮤니티"],
   ["임선주","점메추","https://jeommechu-chi.vercel.app/","오늘 점심 뭐 먹지? 직장인의 점심 메뉴 고민을 대신 해결해주는 추천 서비스.","생활",C.life,"🍚","직장인의 점심 메뉴 추천"],
   ["이다은","KBO 직관 메이트","https://kbo-ticket.vercel.app/","10구단 경기 일정을 한눈에 보고, 홈팀 예매처로 바로 연결해주는 야구 직관 메이트.","생활",C.life,"⚾","10구단 일정 한눈에, 예매처 바로가기"],
   ["강보연","멍냥별점","https://mungnyang-stars.vercel.app/","오늘 우리 아이의 별점은? 반려동물을 위한 따뜻한 일일 운세·궁합 서비스.","생활",C.life,"🔮","우리 아이의 오늘 별점은?"],
   ["정효균","내보증","https://naebojeung.vercel.app/","업종·매출·업력·지역·신용등급을 입력하면 AI가 정부 지원정책·보증상품·대출상품을 한 번에 매칭해주는 소상공인 금융 매칭 서비스.","핀테크",C.fin,"🏦","소상공인 정책·보증·대출 한 번에 매칭"],
   ["김지혜","TeamCalendar","https://calendar-app-eight-teal.vercel.app/","학생·직장인·팀 모두를 위한 스마트 캘린더. 개인 일정부터 팀 일정까지 한 곳에서 관리해요.","생산성",C.prod,"📅","개인부터 팀까지, 스마트 일정 관리"]
  ];
  const GRAD_FALLBACK=new Set();
  // 로고 참고 이미지 기반 커버 설정 (원본 살리되 우리 스타일로 통일).
  const COVER={
    0:{bg:"linear-gradient(135deg,#ffe1d4,#fff7f3)",fg:"#c8402f",mark:"⚡",sub:"태양광 발전소를 함께 소유하고 배당"},
    1:{bg:"linear-gradient(135deg,#edeff2,#ffffff)",fg:"#15151a",icon:"S",iconBg:"#15151a",sub:"1인 창업가를 위한 수익·지출 관리"},
    2:{bg:"linear-gradient(135deg,#eef4f6,#ffffff)",fg:"#2f7d8f",mark:"📈",sub:"내 매도 룰 자동 감시 + 매수 검출"},
    3:{bg:"linear-gradient(135deg,#f4f2ec,#ffffff)",fg:"#3b3a33",mark:"📚",name:"이 책, 나랑 맞을까?",sub:"책 커버 한 장으로 나와 맞는 책 확인"},
    4:{bg:"linear-gradient(135deg,#41597a,#33485f)",fg:"#ffffff",mark:"🍳",dark:true,sub:"냉장고 속 재료로 만드는 오늘의 메뉴"},
    5:{bg:"linear-gradient(135deg,#e9f0fb,#ffffff)",fg:"#1f2d4a",icon:"FP",iconBg:"linear-gradient(135deg,#5b9bf0,#3b6fd4)",ver:"v0.3.0",sub:"강사 정보 수집·관리 + 제안서"},
    6:{bg:"linear-gradient(135deg,#3b3450,#2b2740)",fg:"#ffffff",mark:"🧘",dark:true,name:"사이",sub:"부모를 위한 AI 감정 코치, 그 6초"},
    7:{bg:"linear-gradient(135deg,#f7f1e3,#fffdf7)",fg:"#2a2620",mark:"👨‍🍳",sub:"녹음만 하면 수업 노트가 완성"},
    8:{bg:"#0b0b0d",rainbow:true,dark:true,name:"아빠, 나야",sub:"아빠의 눈이 되어 드릴 AI 도우미"},
    9:{bg:"linear-gradient(135deg,#eef1f4,#ffffff)",fg:"#2a3340",mark:"🐾",sub:"우리 아이 사료, 성분이 괜찮을까?"},
    10:{bg:"linear-gradient(135deg,#eef1f6,#ffffff)",fg:"#1f3a5f",mark:"📖",sub:"책 한 권으로 연결되는 독서모임"},
    11:{bg:"linear-gradient(135deg,#eef4f6,#ffffff)",fg:"#1f2d44",mark:"🌐",name:"Network Topology",sub:"네트워크 구조를 한눈에 시각화"},
    12:{bg:"linear-gradient(135deg,#eef0f6,#ffffff)",fg:"#2a2a33",mark:"✍️",sub:"SEO 최적화 블로그 글 자동 생성"},
    13:{bg:"linear-gradient(135deg,#22375c,#1b2c4a)",fg:"#ffffff",mark:"🥗",dark:true,sub:"살이 안 빠지는 진짜 이유를 진단"},
    14:{bg:"linear-gradient(135deg,#eaf0ff,#ffffff)",fg:"#2f5bea",mark:"💼",name:"NCS 채용 매칭",sub:"NCS 기반 맞춤 채용 매칭"},
    15:{bg:"linear-gradient(135deg,#eef1fb,#ffffff)",fg:"#2a3bbf",mark:"🗓️",sub:"로그인 없이 PIN으로 일정 잡기"},
    16:{bg:"linear-gradient(135deg,#f1eee9,#ffffff)",fg:"#1d1a17",mark:"🐻",name:"Boost Up",sub:"매일 한 줄 명언으로 시작하는 하루"},
    17:{bg:"linear-gradient(135deg,#eef0f4,#ffffff)",fg:"#0f1729",mark:"♟️",sub:"테마별 체스 퍼즐 트레이너"},
    18:{bg:"linear-gradient(135deg,#eef0fb,#ffffff)",fg:"#6a5bdf",mark:"🎬",name:"ShortFactory AI",ver:"v0.7",sub:"키워드 하나로 쇼츠 기획 자동 완성"},
    19:{bg:"linear-gradient(135deg,#eaf2ee,#ffffff)",fg:"#2d3b52",icon:"+",iconBg:"linear-gradient(135deg,#6b5b95,#2e8b6f)",name:"약플로 · Yakflo",sub:"바코드로 유효기한·재고 한 번에"},
    20:{bg:"linear-gradient(135deg,#1c1540,#0e0a24)",nameGrad:"linear-gradient(100deg,#ffffff 52%,#ff7fc4)",mark:"✨",name:"WimB",sub:"Visualize Your Vision",dark:true},
    21:{bg:"linear-gradient(135deg,#eaf0ff,#ffffff)",fg:"#4a78ff",name:"다온",sub:"다시 돌아오게 하는 AI 목표 코치"},
    22:{bg:"linear-gradient(135deg,#eeecfb,#ffffff)",fg:"#1a1730",icon:"로",iconBg:"linear-gradient(135deg,#7b6bf0,#5b4bd0)",sub:"최저시급보다 저렴한 우리가게 AI 직원"},
    23:{bg:"linear-gradient(135deg,#eaf0ff,#ffffff)",fg:"#2f5bea",mark:"💰",sub:"이자 아껴주는 대출 갈아타기 알리미"},
    24:{bg:"linear-gradient(135deg,#eef1f6,#ffffff)",fg:"#2a3340",mark:"💬",name:"상담 안내문 생성기",sub:"상담 카톡 안내문 자동 생성·검수"},
    25:{bg:"linear-gradient(135deg,#f3efe8,#ffffff)",fg:"#5a3e2b",mark:"📖",name:"책린이",sub:"내 손안의 작은 도서관, 독서 기록"},
    26:{bg:"linear-gradient(135deg,#eef0f6,#ffffff)",fg:"#3a2e6b",mark:"🔑",name:"키잇 (Key-it)",sub:"방탈출, 한 화면에서 비교·예약"},
    27:{bg:"linear-gradient(135deg,#f4f4f5,#ffffff)",fg:"#15151a",name:'<span style="color:#15151a">BOX</span><span style="color:#e0322f">CARD</span>',sub:"복서를 위한 운동 기록 커뮤니티"},
    28:{bg:"linear-gradient(135deg,#fff1e0,#ffffff)",fg:"#e8852b",mark:"🥢",name:"점메추",sub:"직장인의 점심 메뉴 추천"},
    29:{bg:"linear-gradient(135deg,#eaf0ff,#ffffff)",fg:"#1f4ea0",mark:"⚾",name:"KBO 직관 메이트",sub:"10구단 일정 한눈에, 예매처 바로"},
    30:{bg:"linear-gradient(135deg,#efeaf8,#ffffff)",fg:"#6a4bbf",mark:"🔮",name:"멍냥별점",sub:"반려동물을 위한 따뜻한 일일 운세"},
    31:{bg:"linear-gradient(135deg,#eaf0ff,#ffffff)",fg:"#1f4ea0",mark:"🏦",name:"내보증",sub:"소상공인 금융 종합 매칭"},
    32:{bg:"linear-gradient(135deg,#16182e,#0e1020)",dark:true,mark:"📅",name:'<span style="color:#ffffff">Team</span><span style="color:#8b8bff">Calendar</span>',sub:"개인·팀 일정을 한 곳에서"},
  };
  window.EXHIBIT_DATA=RAW.map(([name,title,url,desc,cat,color,emoji,tag],i)=>({
    key:name,name,title,url,desc,cat,color,emoji,tag,grad:GRAD_FALLBACK.has(i),cover:COVER[i]||null,img:`shots/${i}.png`,
    host:(()=>{try{return new URL(url).host.replace(/^www\./,'')}catch(e){return url}})()}));

  // 공용 커버 렌더러 — 목록(index)·상세(detail)가 동일한 커버를 사용
  window.renderCover=function(d, rankHTML){
    rankHTML=rankHTML||'';
    const chrome=`<div class="top">${rankHTML}<span class="cat" style="background:${d.color}cc;border:1px solid ${d.color}">${d.cat}</span>`+
      `<span class="badge"><span class="live"></span>실제 배포</span></div>`;
    if(d.cover){
      const cv=d.cover, nm=cv.name||d.title;
      const head=cv.icon?`<div class="appicon" style="background:${cv.iconBg}">${cv.icon}</div>`
               :cv.mark?`<div class="lmark">${cv.mark}</div>`:'';
      const ng=cv.nameGrad||(cv.rainbow?'linear-gradient(90deg,#9a86ff,#ff9ab0,#ffd36b)':null);
      const nameStyle=ng?`background:${ng};-webkit-background-clip:text;background-clip:text;color:transparent`:`color:${cv.fg}`;
      const ver=cv.ver?`<span class="lver">${cv.ver}</span>`:'';
      const sub=cv.sub?`<div class="lsub" style="color:${cv.dark?'rgba(255,255,255,.78)':'#7d7269'}">${cv.sub}</div>`:'';
      return `<div class="cover logo ${cv.dark?'dark':''}" style="background:${cv.bg}">${chrome}`+
        `<div class="llock">${head}<div class="lname" style="${nameStyle}">${nm}${ver}</div>${sub}</div></div>`;
    }
    const info=`<div class="info"><div class="cname">${d.title}</div><div class="ctag">${d.tag}</div></div>`;
    if(d.grad) return `<div class="cover grad"><div class="gbg" style="background:radial-gradient(120% 120% at 80% 0%, ${d.color}66, #160a09 62%)"></div><div class="gemoji">${d.emoji}</div>${chrome}${info}</div>`;
    return `<div class="cover"><img class="bg" src="${d.img}" alt="${d.title}" loading="lazy"/><div class="scrim"></div>${chrome}${info}</div>`;
  };
  // 기술 스택 (전 서비스 공통 표기)
  window.TECH_STACK=["Claude Code","GitHub","Vercel"];
  window.FOUNDERS2_URL='https://ai-founders-next-nu.vercel.app/';
  window.SUPA={url:"https://ftdsodfyxocecjbobafe.supabase.co",key:"sb_publishable_g69bjSlp7XBZ_8TPpkssqg_SVPPOMrb"};

  // 접속자 로그 → 구글 시트(Apps Script). 이벤트/유입(ref)/서비스/referrer/방문자/기기 기록.
  window.LOG_URL="https://script.google.com/macros/s/AKfycbymSWYNJcKgQGgVl5KctqVTVOaDDTyAMG60NMIdc5rvhydLkmpX-rjzIZnoFvUXStDlYA/exec";
  window.logEvent=function(event, extra){
    try{
      if(!window.LOG_URL) return;
      let v=localStorage.getItem('exhibitVoter');
      if(!v){v='v'+Math.random().toString(36).slice(2)+Date.now().toString(36);localStorage.setItem('exhibitVoter',v);}
      const p=new URLSearchParams();
      p.set('event',event||'');
      p.set('ref', new URLSearchParams(location.search).get('ref')||'');
      p.set('service',(extra&&extra.service)||'');
      p.set('referrer',document.referrer||'');
      p.set('visitor',v);
      p.set('ua',navigator.userAgent||'');
      const body=p.toString();
      if(navigator.sendBeacon){
        navigator.sendBeacon(window.LOG_URL, new Blob([body],{type:'application/x-www-form-urlencoded;charset=UTF-8'}));
      }else{
        fetch(window.LOG_URL,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},body});
      }
    }catch(e){}
  };
})();
