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
      title: '스터디',
      descriptions: [
        { content: '효과적으로 공부하기 위해 스터디 결성 후 팀장을 맡음. (5인)' },
        { content: 'Effective Java 스터디 (완료)' },
        { content: '가상 면접 사례로 배우는 대규모 시스템 설계 기초' },

        {
          content: '@java-starter',
          href: 'https://github.com/java-starter/ReadingBooks',
        },
      ],
    },
    {
      title: 'JUnit5',
      descriptions: [
        { content: '공식 문서 번역' },
        {
          content: 'Junit5 한글 문서',
          href:
            'https://donghyeon.dev/junit/2021/04/11/JUnit5-%EC%99%84%EB%B2%BD-%EA%B0%80%EC%9D%B4%EB%93%9C/',
        },
      ],
    },
  ],
};

export default openSource;
