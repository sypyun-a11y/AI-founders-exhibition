// 전시회 공용 데이터 (목록 index.html / 상세 detail.html 공용)
(function(){
  const C={fin:"#3b6fd4",prod:"#2aa3c2",mkt:"#e53e3e",edu:"#8b5cf6",health:"#1faf78",life:"#e0883c",care:"#e0667a",book:"#5f7bb0"};
  // [이름, 서비스명, URL, 설명(상세), 카테고리, 색, 이모지, 한줄카피(상세 소제목)]
  const RAW=[
   ["김도은","와트팜","https://wattfarm.vercel.app/","에너지를 게임처럼 즐기며 소소한 부수입까지 얻는 특별한 농장으로 초대합니다. 모바일에서 나만의 태양광 발전소를 직접 심고 키우는 재미를 넘어, 전국에 흩어진 소규모 태양광을 활용해 현실의 수익으로 연결해주는 에너지 비즈니스 플랫폼이에요.","금융",C.fin,"☀️","태양광을 게임처럼 키우고 수익까지"],
   ["박세현","SoloFin","https://solofin.vercel.app/login","대기업 가계부나 복잡한 ERP 대신, 1인 창업가의 눈높이에 맞춘 가장 직관적인 수익·지출 대시보드. 마이데이터 연동 없이도 내 사업의 현금 흐름과 노후 자산 달성도까지 한눈에 트래킹해요.","금융",C.fin,"💰","1인 창업가를 위한 수익·지출 관리 앱"],
   ["윤상호","S2 트레이딩 따라하기","https://s2-trading-web.vercel.app/dashboard","감정에 휘둘려 타이밍을 놓치던 주식 투자는 이제 그만. 나만의 매도 룰북으로 시장을 실시간 자동 감시하고 최적의 매수 종목군까지 칼같이 검출해, 원칙 있는 투자를 완성해주는 트레이딩 시스템이에요.","금융",C.fin,"📈","내 매도 룰 자동 감시 + 매수 후보 검출"],
   ["김민건","그로스 가든","https://growthgarden-ten.vercel.app/","매일의 사소한 감사함이 모여 나만의 아름다운 정원이 됩니다. 손글씨와 파스텔 톤의 다정한 공간에서 오늘 하루 감사했던 일을 한 줄씩 적으면, 물을 주듯 씨앗이 새싹으로, 다시 활짝 핀 꽃으로 자라나요. 링크 한 번으로 시작하는 일상 속 마음 치유 솔루션이에요.","건강·자기계발",C.health,"🌱","한 줄 감사로 키우는 나만의 마음 정원"],
   ["곽희진","오늘의 한끼","https://freeium-app.vercel.app/","“오늘 저녁은 또 뭐 해 먹지?” 냉장고 속 남은 재료만 쓱 입력해보세요. 낭비되는 식재료 없이 지금 당장 만들 수 있는 최적의 레시피를 똑똑하게 제안해주는 다정한 주방 비서예요.","라이프",C.life,"🍳","냉장고 속 재료로 만드는 오늘의 메뉴"],
   ["이규동","핏픽(FitPick)","https://fitpick-nine.vercel.app/download","강사 정보 수집부터 클라이언트 큐레이션까지, 매번 1~2시간씩 걸리던 잡일과 매출 누수를 싹 잡아드려요. 정보 수집 폼과 제안 페이지를 원스톱으로 묶어 단 30분 만에 매칭을 끝내는 에이전시 운영자용 효율화 도구.","생산성",C.prod,"🎯","강사 정보 수집·관리 + 제안서 큐레이션"],
   ["장세희","사이(Between)","https://my-project-one-gray.vercel.app/intro","“또 아이에게 소리를 질렀네…” 밤마다 자책하며 후회하는 부모를 위해, 단 30초의 기록으로 AI가 당신의 숨은 감정 트리거 패턴을 분석하고 다음 폭발 직전 ‘6초의 틈’을 만들어주는 실시간 육아 멘토예요.\n\n🔑 체험 접속코드: sai2026","반려·가족",C.care,"🧘","부모를 위한 AI 감정 코치, 그 6초"],
   ["박준홍","ChefNote","https://chefnote.kr/","정신없는 조리 실습실에서 필기하느라 손을 바삐 움직이지 마세요. 녹음만 해두면 AI가 핵심 재료, 정밀한 조리 순서, 교수님의 히든 팁까지 알아서 착착 정리해주는 조리학과 학생 필수 학업 치트키.","교육·커리어",C.edu,"🎙️","녹음만 하면 수업 노트가 알아서 완성"],
   ["박혜준","아빠나야","https://dad-companion.vercel.app/family","눈과 귀가 어두운 90세 어르신의 끝없는 반복 질문을 AI가 대신 대답해 주고, 자녀의 안부 메시지와 일정을 목소리로 먼저 전하며, 돌봄 가족에게는 휴식을 어르신에게는 인지 자극을 선물하는 가장 따뜻한 기술을 만나보세요.","반려·가족",C.care,"🧓","시각장애·고령 어르신 돌봄 가족을 위한 AI 안심 비서"],
   ["백일선","성분탐정","https://pet-food-app-3862.vercel.app/","말 못 하는 우리 아이가 매일 먹는 사료, 정말 안심하고 먹여도 될까요? 복잡한 화학 성분과 원재료를 투명하게 분석해 내 아이의 건강 상태에 딱 맞는 최적의 사료를 골라주는, 반려인을 위한 필수 가이드.","반려·가족",C.care,"🐾","우리 아이 사료, 성분이 괜찮을까?"],
   ["박주연","페이지메이트","https://pagemate.vercel.app/login","나랑 딱 맞는 독서 메이트를 찾는 가장 확실한 방법. 단순한 책 읽기를 넘어 깊이 있는 취향과 가치관을 공유할 수 있는 사람들을 연결하고, 지속 가능한 독서 라이프를 위한 완벽한 모임 환경을 제공해요.","독서",C.book,"📖","책 한 권으로 연결되는 독서모임"],
   ["조성훈","Network Topology Tool","https://network-topology-tool.vercel.app/","복잡하고 얽혀 있는 네트워크 구조를 한눈에 알아볼 수 있도록 직관적으로 시각화해주는 서비스. 에러나 병목 현상의 원인을 빠르게 포착하고 전체 시스템의 흐름을 영리하게 관리하는 엔지니어 필수 툴.","생산성",C.prod,"🌐","네트워크 구조를 눈에 보이게"],
   ["조현재","블로그 AI 작성기","https://blog-ai-writer-production.up.railway.app/","상위 노출을 위해 매일 키워드와 씨름하던 시간은 이제 끝. 클릭 몇 번으로 검색 엔진이 가장 좋아하는 SEO 최적화 블로그 글을 자동으로 만들어내는, 마케터와 크리에이터를 위한 강력한 업무 부스터.","마케팅",C.mkt,"✍️","SEO 최적화 블로그 글 자동 생성"],
   ["홍주연","다이어트 어디가?","https://my-todo-app-three-woad.vercel.app/","운동, 식단, 관리실, 병원 중 나에게 맞는 방법을 찾아드립니다. 돈과 시간을 쓰기 전에 먼저 내 상황에 맞는 다이어트 유형과 업체를 확인하세요.","건강·자기계발",C.health,"🔍","나에게 맞는 다이어트 방법·업체 찾기"],
   ["임원호","NCS 채용 매칭","https://ncsjobmatching.com/","직무 능력을 중심으로 나에게 꼭 맞는 공공기관·기업의 채용 기회를 연결해주는 스마트한 매칭 플랫폼. 막연한 스펙 쌓기에서 벗어나, 당신이 가진 진짜 실력을 빛내줄 최적의 커리어 루트를 네비게이션처럼 찾아드려요.","교육·커리어",C.edu,"💼","NCS 기반 맞춤 채용 매칭"],
   ["김재민","MoaTime","https://moatime.vercel.app/","“다들 언제 시간 되세요?” 회의·점심·회식 때마다 반복되는 답변 취합과 시간 조율 스트레스를 링크 한 장으로 싹 끝내드려요. 가입·로그인 허들조차 없이 참석자들의 가능 시간을 한눈에 모아, 일정 조율을 1시간에서 단 5분으로 줄여주는 직장인 필수 효율화 툴입니다.","생산성",C.prod,"🗓️","링크 한 장으로 끝내는 일정 조율"],
   ["홍영택","부스트업","https://boost-up-ten.vercel.app/","매일 아침, 맞춤형 한 줄 명언을 배달해요. 단순한 텍스트 푸시를 넘어 명언을 트리거로 삼아 더 깊은 동기부여와 자기계발로 이끄는 정서 케어 가이드.","건강·자기계발",C.health,"🚀","매일 한 줄 명언으로 시작하는 하루"],
   ["박찬성","Chession","https://chess-puzzle-v2.vercel.app/","체스 학원생과 독학자를 위해 틀린 문제를 자동으로 복습하고 성장을 데이터로 기록해주는 스마트한 퍼즐 트레이너. 실무 강사들이 감탄한 핵심 피드백 기능으로 체스 실력을 한 단계 점프업해보세요.","교육·커리어",C.edu,"♟️","테마별 체스 퍼즐로 실력 키우기"],
   ["김진승","ShortFactory AI","https://short-factory-ai.vercel.app/","키워드 딱 하나만 던져주면 아이디어 기획부터 시나리오 구성까지 한 번에 자동 완성해주는 AI 콘텐츠 팩토리. 고가의 영상 제작 비용과 리스크를 줄이고, 유저들이 열광하는 핵심 포맷에 집중해 숏폼 시장을 빠르게 선점해보세요.","마케팅",C.mkt,"🎬","키워드 하나로 쇼츠 기획 자동 완성"],
   ["이정화","약플로(Yakflo)","https://ehwaa.com/","복잡한 기관 등록 없이 바코드 스캔 한 번으로 의약품의 유효기한과 재고를 한 번에 관리하는 솔루션. 일반 직원도 저렴한 비용으로 수동 관리의 실수를 제로로 만드는 병·약국 맞춤형 스마트 치트키.","생산성",C.prod,"💊","바코드로 유효기한·재고를 한 번에"],
   ["박지우","WimB","https://about.wimb.ai/","아이디어 스케치부터 최종 영상 피드백까지, 언어와 툴의 장벽 없이 하나의 흐름으로 연결하는 글로벌 크리에이터들의 놀이터. 프레임 위에서 직관적으로 소통하는 시각적 워크플로우로 전 세계 팀원과 실시간으로 완벽한 시너지를 내보세요.","생산성",C.prod,"🎨","Visualize Your Vision — 시각적 AI 협업"],
   ["홍지혜","다온","https://daon-chi.vercel.app/dashboard","목표 달성에 실패하고 재도전을 망설이는 마음의 장벽을 확실하게 깨부숴주는 퍼스널 코칭 서비스. 카카오톡 밀착 케어라는 영리한 방식으로 포기하지 않고 끝까지 지속할 수 있는 완벽한 루틴 시스템을 선물해요.","건강·자기계발",C.health,"🌱","다시 돌아오게 하는 AI 목표 코치"],
   ["박근형","로카이","https://review-marketing-ten.vercel.app/demo","리뷰 분석을 통한 자동 댓글부터 사진 몇 장으로 쇼츠 제작·자동 업로드까지 알아서 척척 해내는 사장님 전용 AI 직원. 비싼 인건비와 홍보 부담은 걷어내고, 유입부터 재방문 유도까지 마케팅의 모든 과정을 자동화해보세요.","마케팅",C.mkt,"🏪","최저시급보다 저렴한 우리가게 AI 직원"],
   ["남현주","이자세이버","https://hyunju9056-interest-saver.vercel.app/","“내가 내는 대출 이자, 더 줄일 수는 없을까?” 금리 변동 시기마다 내 신용 점수와 대출 현황을 시뮬레이션해, 가장 많이 아낄 수 있는 타이밍을 콕 짚어 알려주는 스마트한 이자 세이버.","금융",C.fin,"🏦","이자 아껴주는 대출 갈아타기 알리미"],
   ["정준희","상담 카톡 안내문 생성기","https://rapythe-cmyk.github.io/kakao-counseling-message-helper/","고객과 마주하는 최전선인 카톡 상담, 매번 복사·붙여넣기 하느라 실수가 잦았다면 주목. 상담 목적에 딱 맞는 완벽한 안내문을 자동으로 생성·검수해, 브랜드 신뢰도는 높이고 상담원의 리소스는 획기적으로 아껴주는 시스템.","생산성",C.prod,"💬","상담 카톡 안내문 자동 생성·검수"],
   ["김유진","책린이 독서 트래커","https://my-project-book-pi.vercel.app/","내가 읽은 책들의 발자취를 남겨두는 나만의 모바일 서재. 완독을 향한 당신의 파트너가 바로 여기 있어요.","독서",C.book,"📖","내 손안의 작은 도서관, 독서 기록"],
   ["김세림","키잇 (Key-it)","https://key-it-tau.vercel.app/","예약 전쟁이 펼쳐지는 서울·경기 지역의 수많은 방탈출 테마를 한곳에 모았어요. 여러 사이트를 돌아다닐 필요 없이 원하는 날짜·장소·난이도의 테마를 한눈에 비교하고 빛의 속도로 예약하는, 방탈출 매니아들의 성지.","라이프",C.life,"🔑","방탈출, 한 화면에서 비교하고 예약"],
   ["김수민","BOXCARD","https://my-boxcard-app.vercel.app/","오늘 내가 뻗은 펀치의 땀방울을 헛되이 보내지 마세요. 복싱에 특화된 직관적인 기록 툴과, 함께 링 위에서 땀 흘리는 크루들과 소통할 수 있는, 복서들만을 위한 열정 가득한 운동 커뮤니티.","라이프",C.life,"🥊","복서를 위한 운동 기록 커뮤니티"],
   ["임선주","점메추","https://jeommechu-chi.vercel.app/","“오늘 뭐 먹지?” 단톡방에서 끝없이 이어지던 카톡 핑퐁을 단 30초 만에 끝내주는 직장인 맞춤형 그룹 투표 앱. 매일 찾아오는 점심 메뉴 결정장애부터 퇴근 후 야식·회식 장소 고르기까지, 일상 속 모든 “뭐 먹지?”를 한 방에 해결해주는 스마트한 푸드 네비게이션이에요.","라이프",C.life,"🍚","점심부터 회식까지, 메뉴 그룹 투표"],
   ["이다은","KBO 직관 메이트","https://kbo-ticket.vercel.app/","매주 “어디서 예매하지?” 걱정은 노! 야구장 티켓팅 전쟁에서 복잡한 이동 경로를 줄여, 원하는 경기 예매처로 가장 빠르게 데려다주는 야구 팬들의 필수 서비스.","라이프",C.life,"⚾","10구단 일정 한눈에, 예매처 바로가기"],
   ["강보연","멍냥별점","https://mungnyang-stars.vercel.app/","“우리 댕댕이는 오늘 어떤 기분일까, 나와는 천생연분일까?” 재미를 넘어 반려견·반려묘와 더 깊은 정서적 유대감을 맺도록 돕는, 국내 최초 반려동물 전용 감성 운세·궁합 매칭 서비스.","반려·가족",C.care,"🔮","우리 아이의 오늘 별점은?"],
   ["정효균","내보증","https://naebojeung.vercel.app/","복잡하고 딱딱한 계약서 문구 속에서 내 소중한 보증금과 권리를 안전하게 지켜내기 위한 안심 솔루션. 법률 지식이 없어도 꼭 체크해야 할 핵심 조항이나 누락된 보증 조건을 직관적으로 짚어줘, 계약의 불안함을 확신으로 바꿔줘요.","금융",C.fin,"🛡️","계약·보증금을 안전하게 지키는 안심 솔루션"],
   ["김지혜","TeamCalendar","https://calendar-app-eight-teal.vercel.app/","당장 오늘 할 일부터 중요한 시험 일정, 약속, 1년간의 신년 계획까지 — 파편화된 모든 일상을 한눈에 집약하는 올인원 스케줄러. 복잡하게 얽힌 일정을 한 번에 정리하고, 개인의 삶과 팀의 목표를 가장 스마트하게 제어하는 라이프 매니지먼트를 경험해보세요.","생산성",C.prod,"📅","개인부터 팀까지, 올인원 스케줄러"],
   ["손수정","명호","https://myeongho.vercel.app/","평생 쓸 아이 이름과 브랜드 상호명, 이제 감에 의존하거나 근거 없는 작명으로 찜찜해하지 마세요. 사주 오행 분석 결과를 투명한 데이터 리포트와 전문가 검토로 입증해, 세상에서 가장 확실한 근거를 가진 최고의 이름 5개를 제안하는 프리미엄 작명 솔루션입니다.","라이프",C.life,"✒️","사주 오행 분석 기반 프리미엄 작명"]
  ];
  const GRAD_FALLBACK=new Set();
  // 로고 참고 이미지 기반 커버 설정 (원본 살리되 우리 스타일로 통일).
  const COVER={
    0:{bg:"linear-gradient(135deg,#ffe1d4,#fff7f3)",fg:"#c8402f",mark:"🌱",sub:"태양광을 게임처럼 키우고 수익까지"},
    1:{bg:"linear-gradient(135deg,#edeff2,#ffffff)",fg:"#15151a",icon:"S",iconBg:"#15151a",sub:"1인 창업가를 위한 수익·지출 관리"},
    2:{bg:"linear-gradient(135deg,#eef4f6,#ffffff)",fg:"#2f7d8f",mark:"📈",sub:"내 매도 룰 자동 감시 + 매수 검출"},
    3:{bg:"linear-gradient(135deg,#e7f4e9,#fffdf7)",fg:"#3f6b4d",mark:"🌱",name:"그로스 가든",sub:"매일 한 줄 감사로 키우는 마음 정원"},
    4:{bg:"linear-gradient(135deg,#41597a,#33485f)",fg:"#ffffff",mark:"🍳",dark:true,sub:"냉장고 속 재료로 만드는 오늘의 메뉴"},
    5:{bg:"linear-gradient(135deg,#e9f0fb,#ffffff)",fg:"#1f2d4a",icon:"FP",iconBg:"linear-gradient(135deg,#5b9bf0,#3b6fd4)",ver:"v0.3.0",sub:"강사 정보 수집·관리 + 제안서"},
    6:{bg:"linear-gradient(135deg,#3b3450,#2b2740)",fg:"#ffffff",mark:"🧘",dark:true,name:"사이",sub:"부모를 위한 AI 감정 코치, 그 6초"},
    7:{bg:"linear-gradient(135deg,#f7f1e3,#fffdf7)",fg:"#2a2620",mark:"👨‍🍳",sub:"녹음만 하면 수업 노트가 완성"},
    8:{bg:"#0b0b0d",rainbow:true,dark:true,name:"아빠, 나야",sub:"어르신 돌봄 가족을 위한 AI 안심 비서"},
    9:{bg:"linear-gradient(135deg,#eef1f4,#ffffff)",fg:"#2a3340",mark:"🐾",sub:"우리 아이 사료, 성분이 괜찮을까?"},
    10:{bg:"linear-gradient(135deg,#eef1f6,#ffffff)",fg:"#1f3a5f",mark:"📖",sub:"책 한 권으로 연결되는 독서모임"},
    11:{bg:"linear-gradient(135deg,#eef4f6,#ffffff)",fg:"#1f2d44",mark:"🌐",name:"Network Topology",sub:"네트워크 구조를 한눈에 시각화"},
    12:{bg:"linear-gradient(135deg,#eef0f6,#ffffff)",fg:"#2a2a33",mark:"✍️",sub:"SEO 최적화 블로그 글 자동 생성"},
    13:{bg:"linear-gradient(135deg,#22375c,#1b2c4a)",fg:"#ffffff",mark:"🔍",dark:true,sub:"나에게 맞는 다이어트 방법·업체 찾기"},
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
    31:{bg:"linear-gradient(135deg,#eaf0ff,#ffffff)",fg:"#1f4ea0",mark:"🛡️",name:"내보증",sub:"계약·보증금을 지키는 안심 솔루션"},
    32:{bg:"linear-gradient(135deg,#16182e,#0e1020)",dark:true,mark:"📅",name:'<span style="color:#ffffff">Team</span><span style="color:#8b8bff">Calendar</span>',sub:"개인·팀 일정을 한 곳에서"},
    33:{bg:"linear-gradient(135deg,#efeaf3,#ffffff)",fg:"#5a4a7a",mark:"✒️",name:"명호",sub:"사주 오행 기반 프리미엄 작명"},
  };
  // 조(팀) 배치 순서 — Notion '본 미션 과제 제출 공간' 팀 기준 (슬랙 채널로 교차검증)
  const TEAM={"곽희진":1,"김민건":1,"이다은":1,"정준희":1,"김유진":2,"이규동":2,
    "박준홍":4,"박혜준":4,"윤상호":4,"강보연":5,"김도은":5,"김세림":6,"박주연":6,"백일선":6,"조성훈":6,
    "김수민":7,"손수정":7,"임원호":7,"조현재":7,"홍주연":7,"장세희":8,"김재민":9,"정효균":9,"박세현":10,
    "박찬성":11,"임선주":11,"홍영택":11,"김진승":12,"박지우":12,"이정화":12,
    "김지혜":13,"남현주":13,"박근형":13,"홍지혜":13};
  // 1페이지(상위 9개) 노출 순서 — 운영자 지정. 나머지는 조 순서로 이어붙임.
  const ORDER=["박준홍","이규동","장세희","강보연","임원호","박찬성","박지우","남현주","이다은","이정화"];
  const oi=n=>{const k=ORDER.indexOf(n);return k<0?ORDER.length:k;};
  // 만든 사람 '다짐 한 줄' (운영시트) — 상세 페이지 스토리텔링용. 신청서에 없는 분은 생략.
  const NOTE={
    "김민건":"4주 뒤엔 제가 만든 서비스를 앱 마켓에 출시하고 피드백을 들을 거예요.",
    "곽희진":"완벽하진 않아도 클로드 코드 능력의 80% 이상을 습득한 모습이 될 거예요!",
    "이규동":"무엇이든 클로드 코드로 서비스를 만들고 수익화하는 사람이 되어 있을 거예요.",
    "장세희":"클로드 코드로 원하는 서비스를 하나 이상 만들어 아주 효과적으로 쓰고 있을 거예요.",
    "박준홍":"4주 뒤 나는 100원이라도 꼭 수익화한다!",
    "백일선":"아이디어를 구체화해서 돈으로 바꿀 수 있을 거예요.",
    "박주연":"멋진 아이디어를 찾아 저만의 결과물을 직접 만들어보고 싶어요!",
    "조성훈":"아이디어를 AI로 실현할 수 있는 역량을 갖출 거예요.",
    "조현재":"다양한 아이디어를 모두 수행하고 수익화할 거예요.",
    "홍주연":"4주 뒤엔 서비스를 출시하고, 소소한 수익을 가족과 함께 기뻐할 거예요.",
    "임원호":"제가 만든 서비스를 공유하고 싶어요.",
    "김재민":"4주 뒤 나는 클로드 코드로 어떤 서비스든 만들 수 있는 사람이 될 거예요.",
    "홍영택":"4주 뒤엔 소비자가 돈을 지불해 쓰는 서비스를 만들었을 거예요.",
    "박찬성":"많은 아이디어 중 하나 정도는 실현해내지 않았을까요.",
    "김진승":"클로드 코드를 완전히 이해하고 실전에 쓸 수 있게 될 거예요.",
    "박지우":"아이디어만 가진 사람이 아니라, 사용자 반응까지 검증해본 창업가가 되어 있을 거예요.",
    "홍지혜":"생각만 하던 서비스들을 만들고 배포하며 목표에 한 걸음 다가가 있을 거예요.",
    "박근형":"서비스를 사업화하기 위한 구체적인 방안을 그리고 있을 거예요.",
    "남현주":"내 아이디어를 바로 실현시켜볼 수 있는 사람이 되고 싶어요.",
    "정준희":"주변 한의원에 자동화를 전파할 거예요!",
    "김유진":"데일리로 쓸 수 있는 아이디어를 많은 사람에게 공유할 거예요!",
    "김세림":"AI로 만들 아이디어가 더 풍부해지고, 직접 써보며 만족했으면 좋겠어요.",
    "강보연":"아이디어를 구현해 배포하고, 서비스 운영·고도화에 집중하고 있을 거예요.",
    "정효균":"막연한 것을 구체화하는 힘을, 작동하는 프로덕트로 증명하고 싶어요.",
    "김지혜":"클로드 코드로 서비스를 개발하고 배포할 수 있을 거예요.",
    "손수정":"4주 뒤엔 마케팅을 통해 수익을 내고 있을 거예요.",
    "이다은":"똑똑하게 일하는 사람이 되어 있을 거예요.",
    "김도은":"클로드 코드 기반 알고리즘을 개발하고, 자동화 시스템으로 수익화를 시도할 거예요.",
    "박세현":"클로드 코드로 업무를 자동화하고 서비스를 만들어 배포할 수 있어요."
  };
  const EXCLUDE=new Set(["임선주","홍영택"]);   // 전시 제외 서비스
  window.EXHIBIT_DATA=RAW.map(([name,title,url,desc,cat,color,emoji,tag],i)=>({
    key:name,name,title,url,desc,cat,color,emoji,tag,slug:i,note:NOTE[name]||'',team:TEAM[name]||99,grad:GRAD_FALLBACK.has(i),cover:COVER[i]||null,img:`shots/${i}.png`,
    host:(()=>{try{return new URL(url).host.replace(/^www\./,'')}catch(e){return url}})()}))
    .filter(d=>!EXCLUDE.has(d.name))
    .sort((a,b)=>oi(a.name)-oi(b.name)||a.team-b.team||a.name.localeCompare(b.name,'ko'));

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
  // 이벤트(투표 마감·결과 발표)와 투표 완료 후 공개되는 시크릿 쿠폰.
  // 쿠폰 코드 확정되면 coupon.code 만 채우면 됨(비우면 코드칸 숨김).
  window.EVENT={
    voteCloseISO:"2026-06-13T10:00:00+09:00",   // 투표 마감 6/13 오전 10시
    scheduleText:"6/13 수료식 현장에서 결과 발표",
    dupNote:"한 작품당 1표 · 중복 투표 불가 · 여러 작품 투표 가능",
    coupon:{
      teaser:"투표하면 AI 파운더스 2기 시크릿 혜택이 열려요",
      teaserSub:"선착순 · 투표 완료 후 공개",
      benefit:"AI 파운더스 2기 얼리버드 혜택",   // 코드 확정되면 문구/아래 code 교체
      code:"",                                   // 예: 'AIF2-EARLY' (비우면 코드칸 숨김)
      ctaLabel:"AI 파운더스 2기 혜택 받으러 가기"
    }
  };
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
