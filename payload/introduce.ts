import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹/앱 서비스 백엔드 전반에서 다양한 경험을 쌓아 왔습니다.',
    '기술 외적인 문제 해결과 협업에도 가치를 두어, 비즈니스 팀과의 긴밀한 소통을 통해 요구사항을 명확히 파악하고 효율적인 솔루션을 제시하는 데 집중합니다.',
    '개발과 비즈니스의 시너지가 서비스 성공을 이끈다고 믿기에, 단순한 기술적 접근을 넘어 종합적인 관점으로 성장해 나가고 있는 백엔드 개발자입니다.',
  ],
  sign: 'Donghyeon Min',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
