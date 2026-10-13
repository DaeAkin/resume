import favicon from '../asset/favicon.ico';
import previewImage from '../asset/new.png';
import { IGlobal } from '../component/common/IGlobal';

const title = '민동현 | 백엔드 개발자 이력서';
const description =
  'Kotlin·Java 기반 백엔드 개발자 민동현. 대규모 데이터 처리, 장애 복구, 운영 안정성과 비용 개선 경험을 소개합니다.';

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
          width: 800,
          height: 600,
          alt: '민동현 프로필',
        },
      ],
      type: 'profile',
      profile: {
        firstName: 'Donghyeon',
        lastName: 'Min',
        username: 'DaeAkin',
      },
    },
  },
};
