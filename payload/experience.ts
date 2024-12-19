import { IExperience } from '../component/experience/IExperience';
import tmapLogo from '../asset/tmap_logo.png';
import nhnLogo from '../asset/nhn_logo.jpg';
import wembLogo from '../asset/wemb_logo.png';
import wellbuyLogo from '../asset/wellbuy_logo.jpg';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '티맵 모빌리티(Tmap Mobility)',
      position: 'Back-End 개발자',
      startedAt: '2022-10',
      descriptions: [
        '티맵 신규 서비스인 화물서비스 런칭 및 개발',
        '운전점수 개발',
        'TMap Open API 개발',
      ],
      skillKeywords: [
        'Kotlin',
        'SpringBoot',
        'AWS',
        'EKS',
        'MYSQL',
        'DataDog',
        'DynamoDB',
        'Kafka',
      ],
      logo: tmapLogo,
    },
    {
      title: 'NHN SOFT',
      position: 'Dooray 개발팀 Back-End 개발자',
      startedAt: '2021-02',
      endedAt: '2022-09',
      descriptions: [
        'NHN Dooray! 서비스 20개 중 홈/게시판 서비스 신규 개발 및 유지보수',

        '한국은행 두레이 전환을 위한 인사시스템 연동과 관리자화면 구축',
      ],
      skillKeywords: ['JAVA', 'SpringBoot', 'Spring-Cloud', 'Spring-Data-Jpa'],
      logo: nhnLogo,
    },
    {
      title: '위엠비(WeMB)',
      position: 'R&D VX(Visual eXperience)팀 자바 개발자',
      startedAt: '2020-05',
      endedAt: '2021-02',
      descriptions: [
        '통합관제솔루션 ICT 기업(100~150명 개발팀 100명 R&D 20명) ',
        '시각화 솔루션 레노빗(RENOBIT) Spring Legacy 개선',
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
        'Swagger2',
        'Spring-Data-JPA',
        'JAVA Stream API',
        'Docker',
      ],
      logo: wembLogo,
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
        'Swagger2',
        'Spring-Data-JPA',
      ],
      logo: wellbuyLogo,
    },
  ],
};

export default experience;
