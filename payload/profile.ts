import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/new.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '민동현',
    // small: '(Donghyeon Min)',
  },
  contact: [
    {
      title: 'mindh890@gmail.com',
      link: 'mailto:mindh890@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '010-8822-8813',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/DaeAkin',
      link: 'https://github.com/DaeAkin',
      icon: faGithub,
    },
    {
      title: 'https://donghyeon.dev',
      link: 'https://donghyeon.dev',
      icon: faBlogger,
    },
    // {
    //   link: 'https://www.facebook.com/iu.loen',
    //   icon: faFacebook,
    // },
    // {
    //   title: 'YouTube',
    //   link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
    //   // icon: faRss,
    //   icon: faYoutube,
    // },
  ],
  notice: {
    title: '대규모 데이터 처리와 운영 안정성을 개선하는 백엔드 개발자',
    icon: faBell,
  },
};

export default profile;
