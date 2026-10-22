import { faEnvelope, faPhone, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { IProfile } from '../component/profile/IProfile';
import image from '../asset/profile.jpg';

const profile: IProfile.Payload = {
  disable: false,

  image,
  name: {
    title: '고현석',
    small: 'Backend Developer · Java / Spring Boot',
  },
  contact: [
    {
      title: '7580750@naver.com',
      link: 'mailto:7580750@naver.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/kohyunseok518',
      icon: faGithub,
    },
    {
      title: '포트폴리오 · kohyunseok518.github.io/portfolio',
      link: 'https://kohyunseok518.github.io/portfolio/',
      icon: faBriefcase,
    },
  ],
  notice: {
    title: '',
  },
};

export default profile;
