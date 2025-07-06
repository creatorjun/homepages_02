// src/data/content.jsx

// 사이트 전반에 사용될 정보
const siteInfo = {
  title: "상도 힐스더원",
  contactNumber: "1666-8682",
  address: "서울특별시 동작구 상도동 154-8",
  company: "태양기획"
};

// 각 섹션별 콘텐츠
export const content = {
  // siteInfo를 content 객체 내에서도 사용할 수 있도록 추가
  siteInfo: siteInfo, 

  // 1. 헤더
  header: {
    logoImage: {
      dark: "./images/logo_01.webp", // 스크롤 내리기 전 로고
      light: "./images/logo_02.webp"  // 스크롤 내린 후 로고
    },
    // 내비게이션 링크 텍스트 수정
    navLinks: [
      { title: "사업개요", href: "#business-intro" },
      { title: "입지안내", href: "#location" },
      { title: "타입안내", href: "#types" },
      { title: "상담신청", href: "#contact" },
    ]
  },

  // 2. 히어로 섹션
  hero: {
    logoImage: "./images/logo_01.webp",
    mainText: {
      line1: ["서울의", "퍼스트"],
      line2: ["동작의", "라스트"],
    },
    backgroundImage: "./images/main.webp",
    altText: "상도 힐스 더원 메인 야경 조감도"
  },

  // 3. 사업개요 섹션
  businessIntro: {
    sectionTitle: siteInfo.title,
    mainImage: "./images/main-perspective.webp",
    imageText: {
      line1: { white: "10년동안", yellow: "내집처럼" },
      line2: { white: "10년후에", yellow: "내집으로" },
    },
    description: `서울의 퍼스트, 동작의 라스트 : 동작구 마지막 6억원대 분양가`,
    benefits: [
        { id: 1, title: "청약제한 無", description: "만 19세 이상 누구나 신청 가능하며, 청약통장이 필요 없습니다.", aos: "fade-right", delay: "0" },
        { id: 2, title: "자격제한 無", description: "주택 소유 여부, 소득 수준, 거주지 제한 등 까다로운 자격 요건이 없습니다.", aos: "fade-up", delay: "100" },
        { id: 3, title: "세금부담 無", description: "10년간 취득세, 재산세, 종합부동산세, 양도세 부담 없이 거주할 수 있습니다.", aos: "fade-left", delay: "200" },
        { id: 4, title: "안정적 거주", description: "최소 10년동안 이사 걱정 없이 안정적인 임대차 계약이 보장됩니다.", aos: "fade-right", delay: "0" },
        { id: 5, title: "안전한 보증금", description: "HUG 주택도시보증공사의 보증보험 의무 가입으로 보증금을 100% 안전하게 보호합니다.", aos: "fade-up", delay: "100" },
        { id: 6, title: "자유로운 전매", description: "임차인의 지위를 제한 없이 자유롭게 양도 및 양수할 수 있습니다.", aos: "fade-left", delay: "200" },
    ],
  },
  
  // 4. 입지안내 섹션
  location: {
    sectionTitle: "입지안내",
    sectionDescription: "서울의 중심에서 누리는 교통, 교육, 생활의 완벽한 입지",
    mapImage: "images/location.webp",
    advantages: [
        { title: "교통의 중심", items: ["7호선 상도역, 장승배기역과 서부선(예정) 더블역세권", "강남, 여의도, 용산 등 서울 주요 도심 20분대 접근"]},
        { title: "교육의 중심", items: ["상도초, 장승중, 성남고 등 다수의 초중고 인접", "중앙대, 숭실대, 서울대 등 명문대 밀집 지역"]},
        { title: "생활의 중심", items: ["롯데백화점, 이마트, 중앙대병원 등 풍부한 편의시설", "상도근린공원, 용마산, 국사봉 등 쾌적한 자연환경"]},
    ],
    advantageGrid: [
        { id: 1, imageSrc: 'images/location_01.webp', title: '입지환경 1', heading: '새로운 주거타운 형성', description: '2025년 6월 예정인 장승배기 종합행정타운과 상도14·15구역과 모아타운 개발로 생활편의성 및 주거환경 개선 기대' },
        { id: 2, imageSrc: 'images/location_02.webp', title: '입지환경 2', heading: '뛰어난 교통 접근성', description: '2030년 개통 예정인 신상도역(예정) 초역세권, 7호선 상도역 도보 500m 거리로 서울-경기권 이동이 편리한 교통 인프라' },
        { id: 3, imageSrc: 'images/location_03.webp', title: '입지환경 3', heading: '우수한 교육 환경', description: '단지 앞 상도초 및 도보 이동가능한 초·중·고 학군, 중앙대, 숭실대 등 명문 사립대학교 인근에 위치, 동작도서관, 국사봉도서관 등 우수한 교육환경' },
        { id: 4, imageSrc: 'images/location_04.webp', title: '입지환경 4', heading: '다양한 생활 인프라', description: '롯데백화점 관악점, 롯데시네마 신림점, 이마트 여의도점 인근에 위치, 서울대보라매병원, 중앙대병원 등 의료시설이 가까이 위치해 높은 생활의 질' },
        { id: 5, imageSrc: 'images/location_05.webp', title: '입지환경 5', heading: '자연친화적 주거환경', description: '한강과 인접한 우수한 경관지역으로 단지 인상도근린공원, 국사봉공원, 보라매공원 등 단지 인근에 위치' },
        { id: 6, imageSrc: 'images/location_06.webp', title: '입지환경 6', heading: '프리미엄 특화 설계', description: '생활의 가치를 높이는 혁신적인 평면과 고품격 마감재, 풀퍼니시드 시스템으로 완성된 주거 공간' },
    ],
  },

  // 5. 타입안내 섹션
  flats: {
    sectionTitle: "타입안내",
    plans: [
        { id: 1, imageSrc: "./images/flats_01.webp", altText: "59㎡ 타입 평면도", title: "59 Type", details: ["전용면적: 59.99㎡", "분양면적: 80.00㎡", "246세대"], aos: "fade-right", delay: "0" },
        { id: 2, imageSrc: "./images/flats_02.webp", altText: "71㎡ 타입 평면도", title: "71 Type", details: ["전용면적: 71.58㎡", "분양면적: 94.58㎡", "37세대"], aos: "fade-up", delay: "200" },
        { id: 3, imageSrc: "./images/flats_03.webp", altText: "84㎡ 타입 평면도", title: "84 Type", details: ["전용면적: 84.99㎡", "분양면적: 111.52㎡", "107세대"], aos: "fade-left", delay: "400" }
    ]
  },

  // 6. 상담신청 섹션
  contact: {
    sectionTitle: "상담신청",
    description: ["상도 힐스 더원에 대해 궁금한 점이 있으신가요?", "전문 상담사가 신속하게 안내해 드립니다."],
    privacyPolicy: {
        title: "개인정보 수집 및 이용 안내",
        clauses: [
            "1. 수집하는 개인정보 항목: 이름, 연락처",
            "2. 수집 및 이용 목적: 분양 상담 및 안내, 마케팅 활용",
            "3. 보유 및 이용 기간: 수집일로부터 1년 (고객 동의 철회 시 즉시 파기)"
        ]
    }
  },

  // 7. 푸터 섹션
  footer: {
    logoImage: "./images/logo_02.webp",
    info: `신탁사 : 무궁화신탁 | 시행사 : (주) 예도산업개발 | 시공사 : 1군 메이저 건설사(예정)`,
    address: `관리자 : ${siteInfo.company} |  ${siteInfo.contactNumber}`,
    disclaimer: "※ 본 사이트의 CG, 이미지 및 내용은 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 다소 차이가 있을 수 있습니다.",
    copyright: `© ${new Date().getFullYear()} ${siteInfo.title}. All Rights Reserved.`
  },

  // 8. 플로팅 위젯
  floating: {
    callNumber: siteInfo.contactNumber,
    callText: "분양문의",
    consultText: "상담 신청",
    popupText: "팝업보기",
    smsWidgetTitle: "문자 상담"
  }
};