import { IPresentation } from '../component/presentation/IPresentation';

// 섹션 제목은 component/presentation/index.tsx 에서 LICENSE 로 바꿔 자격증 목록으로 쓴다.
const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '정보처리산업기사',
      subTitle: '한국산업인력공단',
      at: '2026-09',
      descriptions: [],
    },
    {
      title: 'SQL 개발자 (SQLD)',
      subTitle: '한국데이터산업진흥원',
      at: '2026-06',
      descriptions: [],
    },
  ],
};

export default presentation;
