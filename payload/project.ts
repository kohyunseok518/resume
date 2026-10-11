import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '콕찔러보기 | 대학 축제 소개팅 서비스',
      startedAt: '2026-09',
      endedAt: '2026-10',
      where: 'BE 2명 / FE 2명 | 팀장, 백엔드·인프라',
      descriptions: [
        { content: '축제 3일 운영, 가입자 445명 · 매칭 463건 · 채팅 6,156건', weight: 'MEDIUM' },
        {
          content:
            '쿼리별 DB 시간을 재서 탐색 목록 10초 캐시·DB 명령 40% 축소, 900명 부하테스트에서 p95 0.98초 → 0.07초, 서버 4대 → 2대',
        },
        {
          content:
            '콕 한도 잠금의 대기를 분석해 검사를 잠금 앞으로 옮기고 인덱스 추가, 처리 한계 초당 40~50건 → 60~90건(부하테스트)',
        },
        {
          content:
            'GitHub Actions + SSM으로 이미지 digest를 고정한 롤링 배포, 행사 중 서비스를 내리지 않고 5번 배포(배포 순간 연결 끊김 381건은 개선 과제)',
        },
        {
          content:
            '첫날 웹 푸시 미발송을 로그로 추적해 약 10시간 만에 수정, 3일간 서버 오류 0.002%(배포 시각 제외)',
        },
        {
          content:
            '기술스택: Java 21, Spring Boot 3, JPA, MySQL, Redis, WebSocket(STOMP), AWS, GitHub Actions',
        },
        { content: 'GitHub:', postHref: 'https://github.com/seoil-power-rangers' },
      ],
    },
    {
      title: 'FirstFolio | 금융교육 서비스의 RAG 기반 AI 서버',
      startedAt: '2026-07',
      endedAt: '2026-08',
      where: 'BE 2명 / FE 2명 / AI 1명 | AI 서버 전담',
      descriptions: [
        { content: '금융 교과서·뉴스 RAG 기반 퀴즈 등 콘텐츠 생성 서버', weight: 'MEDIUM' },
        {
          content:
            '퀴즈 근거가 제목 조각으로 잘리는 원인을 청킹에서 찾아 교과서 구조 기반 병합, 쓸 수 있는 근거 60% → 91%',
        },
        {
          content:
            '개발 세트 지표를 올린 가중치 후보를 별도 질문 26개로 재검증, Hit@5 84.6% → 80.8% 하락을 확인해 채택하지 않음',
        },
        {
          content:
            '검색된 청크의 문장만 고르게 하는 응답 스키마와 4단계 검증(코드 → 의미 중복 → 수치 → LLM)으로 근거 없는 인용 차단',
        },
        {
          content: '기술스택: Python, FastAPI, OpenAI API, LangChain, BM25(Kiwi), FAISS, MySQL, S3',
        },
        { content: 'GitHub:', postHref: 'https://github.com/KB7-25-2/FirstFolio-AI' },
      ],
    },
    {
      title: '소때잡 | 소비 회고 서비스의 AI 챗봇 서버',
      startedAt: '2026-09',
      endedAt: '2026-09',
      where: 'BE 2명 / FE 2명 / AI 1명 | AI 서버 담당',
      descriptions: [
        {
          content: '금융 질문 답변(RAG)과 소비 분석·회고 대화를 처리하는 AI 서버, 해커톤 장려상',
          weight: 'MEDIUM',
        },
        {
          content:
            '질문 29개의 점수 분포를 실측해 유사도 하한 0.48 적용, 근거 없는 질문 11/14 차단',
        },
        {
          content:
            '하한에 막힌 정답 질문은 BM25+벡터 하이브리드(RRF)와 문서 보강으로 8개 모두 해결, 무관한 질문 오탐은 코사인 이중 게이트로 차단',
        },
        {
          content:
            '소비 분석이 틀린 금융 한도로 답하는 것을 발견해 범위 밖 질문 안내와 천·만·억 단위 숫자 검사 추가',
        },
        {
          content: '기술스택: Python, FastAPI, OpenAI API, PostgreSQL(pgvector), BM25(Kiwi)',
        },
        { content: 'GitHub:', postHref: 'https://github.com/jittaejap/sottaejap-ai' },
      ],
    },
  ],
};

export default project;
