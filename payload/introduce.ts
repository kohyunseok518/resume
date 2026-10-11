import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '가입자 445명이 쓴 대학 축제 소개팅 서비스를 직접 설계·배포·운영한 백엔드 개발자, 고현석입니다.',
    '부하·동시성·배포 안정성 문제를 실제 트래픽에서 측정하고 재현해서 해결했고, RAG 기반 AI 서버에서는 검색·근거 품질을 지표로 재며 개선했습니다.',
  ],
  sign: '고현석',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
