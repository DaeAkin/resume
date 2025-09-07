import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '문제를 마주하면 해결 방법을 찾고 싶어집니다.',
    '웹/앱 서비스 백엔드에서 쌓은 경험을 바탕으로, 비즈니스 팀과의 긴밀한 소통을 통해 기술적 이슈와 비즈니스 요구사항을 함께 고려한 효율적인 솔루션을 제시합니다.',
    '문제 해결과 협업을 통해 개발과 비즈니스의 시너지를 만들어내는 백엔드 개발자입니다.',
  ],
  sign: 'Donghyeon Min',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
