import favicon from '../asset/favicon.ico';
import previewImage from '../asset/profile.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '고현석 | 백엔드 개발자 이력서';
const description =
  '가입자 445명이 쓴 대학 축제 소개팅 서비스를 직접 설계·배포·운영한 백엔드 개발자 고현석의 이력서';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 324,
          height: 416,
          alt: '고현석 프로필 사진',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '현석',
        lastName: '고',
        username: 'kohyunseok518',
      },
    },
  },
};
