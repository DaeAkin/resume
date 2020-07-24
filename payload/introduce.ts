import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '❝최소한의 코드에 많은 기능을 넣고싶은 미니멀리스트 이예요 퇴근 후에는 새로운 언어와 기술들을 계속 공부하고 있어요. 키보드만 만지고 있어도 행복한 개발자입니다.',
  ],
  sign: 'Love poem',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
