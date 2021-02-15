import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: 'NHN SOFT',
      position: 'Back-End 개발',
      startedAt: '2021-02',
      descriptions: [
        'Java 기반의 웹 서비스 및 플랫폼 비즈니스 개발',
        'NHN(주) 서비스를 위한 다양한 기술 서비스 개발',
      ],
    },
    {
      title: '위엠비(WeMB)',
      position: 'R&D VX(Visual eXperience)팀 자바 개발자',
      startedAt: '2020-05',
      endedAt: '2021-02',
      descriptions: [
        '통합관제솔루션 ICT 기업(100~150명 개발팀 100명 R&D 20명) ',
        '시각화 솔루션 레노빗(RENOBIT) Spring Legacy를 점진적으로 MSA 아키텍처로 개선',
        'P&ID 도면 프로그램 신규 프로젝트 개발',
        'R&D 내에 최초 테스트코드 도입',
      ],
      skillKeywords: [
        'JAVA',
        '전자정부프레임워크',
        'SpringBoot',
        'TDD',
        'MySQL',
        'Oracle',
        'H2',
        'HanaDB',
        'Tomcat',
        'MongoDB',
        'nginx',
        'Gradle',
        'OAuth2',
        'Swagger2',
        'Spring-Data-JPA',
        'JAVA Stream API',
        'Docker',
      ],
    },
    {
      title: '웰바이(Well-Buy)',
      position: '개발팀 자바 개발자',
      startedAt: '2019-07',
      endedAt: '2020-03',
      descriptions: [
        '음식 포장 O2O 스타트업 서비스 벤처 스타트업 (7명, 개발팀 2명)',
        '백 오피스 개발',
        '앱 서비스를 위한 API 개발',
      ],
      skillKeywords: [
        'JAVA',
        'SpringBoot',
        'AWS',
        'EC2',
        'TDD',
        'MySQL',
        'MongoDB',
        'nginx',
        'Gradle',
        'OAuth2',
        'Swagger2',
        'Spring-Data-JPA',
      ],
    },
  ],
};

export default experience;
