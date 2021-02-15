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
    small: '(Donghyeon Min)',
  },
  contact: [
    {
      title: 'mindh890@gmail.com',
      link: '#',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/DaeAkin',
      link: 'https://github.com/DaeAkin',
      icon: faGithub,
    },
    {
      title: 'https://daeakin.github.io',
      link: 'https://daeakin.github.io',
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
    title: '안녕하세요.',
    icon: faBell,
  },
};

export default profile;
