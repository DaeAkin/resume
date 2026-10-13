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
        '오너톡 커뮤니티의 데이터 모델·API 설계 및 사내 서비스 연동',
        '티맵 핵심 서비스인 운전습관의 재처리 정합성, VOC 대응 및 운영 관측 체계 개선',
        '운전점수 서비스 내재화·AWS 이전, 계산 로직 공통화 및 데이터 보관 정책 개선',
        'TMAP OPEN API 모니터링 개선 및 티맵 화물 서비스 신규 개발',
      ],
      skillKeywords: [
        'Kotlin',
        'Spring Boot',
        'Kafka',
        'Apache Flink',
        'DynamoDB',
        'Kubernetes / EKS',
        'Datadog',
      ],
      logo: tmapLogo,
    },
    {
      title: 'NHN SOFT',
      position: 'Dooray 개발팀 Back-End 개발자',
      startedAt: '2021-02',
      endedAt: '2022-09',
      descriptions: [
        'NHN Dooray! 홈/게시판 서비스 신규 개발 및 유지보수',

        '한국은행 두레이 전환을 위한 인사시스템 연동과 관리자화면 구축',
      ],
      skillKeywords: [
        'Java',
        'Spring Boot',
        'Spring Cloud',
        'Spring Data JPA',
        'MapStruct',
        'Scouter',
      ],
      logo: nhnLogo,
    },
    {
      title: '위엠비(WeMB)',
      position: 'R&D VX(Visual eXperience)팀 자바 개발자',
      startedAt: '2020-05',
      endedAt: '2021-02',
      descriptions: [
        'RENOBIT 시각화 솔루션의 리플렉션 기반 호출 구조를 기능별 API로 점진적 전환',
        '신규 기능 테스트 코드 도입 및 Jenkins·Docker 기반 빌드·배포 자동화',
      ],
      skillKeywords: ['Java', 'Spring Boot', 'MySQL', 'Oracle', 'Docker', 'Jenkins'],
      logo: wembLogo,
    },
    {
      title: '웰바이(Well-Buy)',
      position: '개발팀 자바 개발자',
      startedAt: '2019-07',
      endedAt: '2020-03',
      descriptions: [
        '외주 개발된 음식 포장 서비스를 인수해 단독으로 후속 개발 담당',
        '앱 API·운영 도구 개발 및 서비스 수익화 단계까지 참여',
      ],
      skillKeywords: ['Java', 'Spring Boot', 'Spring Data JPA', 'Spring Batch', 'MySQL', 'AWS'],
      logo: wellbuyLogo,
    },
  ],
};

export default experience;
