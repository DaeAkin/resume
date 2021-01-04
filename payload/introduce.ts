import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '어제의 내가 가진 약점을 극복하기 위해 하루키의 법칙과 1일 1커밋을 실천하고 있습니다.',
    '웹/앱 서비스 백엔드 개발과 스타트업 개발자로서의 다양한 경험이 있습니다. 처음 시작한 스타트업은 서비스 기획, 개발 , 운영 까지 하여 최종 M&A 까지 진행했습니다.',
    '오픈소스 프로젝트에 관심이 많고, 많은 방법으로 기여를 하려고 노력하고 있습니다. 이외에도 개인 프로젝트나 개발 커뮤니티 활동 등을 통해 다양한 개발 경험을 즐기고 있습니다. 평소 개발 경험을 공유하거나 기록하는 것을 좋아하여 학부생 시절부터 작성하기 시작한 개발 블로그에는 어느덧 100여 개의 기술 포스트가 쌓였습니다.',
  ],
  sign: 'Donghyeon Min',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
