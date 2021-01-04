import { IOpenSource } from '../component/openSource/IOpenSource';

const openSource: IOpenSource.Payload = {
  disable: false,
  list: [
    {
      title: 'MapStruct',
      descriptions: [
        { content: '사용법에 대한 이슈 제기 ' },
        { content: 'Contributor', href: 'https://github.com/mapstruct/mapstruct/issues/2276' },
      ],
    },
    {
      title: 'Effective Java 스터디',
      descriptions: [
        {
          content: '자바를 더욱 효과적으로 공부하기 위해 스터디 결성 후 팀장을 맡음. (5인)',
        },
        {
          content: '@java-starter',
          href: 'https://github.com/java-starter/ReadingBooks',
        },
      ],
    },
  ],
};

export default openSource;
