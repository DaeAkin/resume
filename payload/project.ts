import { IProject } from '../component/project/IProject';

// const WHERE = {
//   YA: '야놀자 (Yanolja)',
//   PL: '플레이팅 (Plating)',
//   EC: '이큐브랩 (Ecube Labs)',
//   KY: '키니 (KYNY)',
// };

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'TMAP OPEN API 개발',
      startedAt: '2024-12',
      // endedAt: '2024-05',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content: '모니터링 개선',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '기존 로그 기반 모니터링은 대용량 로그 수집 및 분석으로 인해 높은 운영 비용과 낮은 효율성을 유발, API 사용량과 장애율 모니터링을 위해 OpenMetrics 도입함. 로그 기반 방식 대비 비용을 크게 절감하며 운영 효율을 높임',
            },
            {
              content:
                '사내 타운홀 기술세션에서 발표를 통해 다른 팀들과 지식 공유 및 사내 모니터링 표준화에 기여함',
            },
          ],
        },
      ],
    },
    {
      title: '티맵 모빌리티 운전점수 개발',
      startedAt: '2024-06',
      // endedAt: '2024-05',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content:
            '하루 생성되는 2,000만개의 주행 이력 데이터를 저장 및 처리를 위한 아키텍처 설계 및 개발',
          weight: 'BOLD',
        },
        {
          content: 'IDC 센터에서 AWS로 마이그레이션 이전 작업 진행',
          weight: 'BOLD',
          descriptions: [
            {
              content: '운영중인 서비스를 무중단으로 AWS로 마이그레이션을 성공적으로 진행함',
            },
            {
              content: '데이터 정합성을 99.99%까지 유지하며 마이그레이션을 완료함',
            },
          ],
        },
        {
          content: 'AWS 서버 비용 절약',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'N년 초과된 운전점수 데이터 삭제를 주기적으로 수행하여 DynamoDB의 스토리지 비용을 약 26% 절감, 월 X00만원 비용 절감 달성',
            },
            {
              content:
                '저장보다 IO가 빈번한 운전점수 데이터 특성을 활용해 DynamoDB 스토리지 옵션을 Standard에서 IO Optimized로 변경하여 월 X00만원 비용 절감',
            },
            {
              content: '분리 운영되던 서버들을 하나로 통합하여 관리 효율성 증대 및 운영비용 절감',
            },
          ],
        },
      ],
    },
    {
      title: '티맵 모빌리티 화물서비스 신규 개발 및 런칭',
      startedAt: '2022-10',
      endedAt: '2024-05',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content: '"티맵 화물" 정식 출시',
          href: 'https://it.chosun.com/news/articleView.html?idxno=2023020900990',
        },
        {
          content:
            '신규 서비스 특성상 빠른 개발을 위해 비즈니스 요구사항을 우선시하고 팀 간 긴밀한 커뮤니케이션으로, 프로젝트 전반의 효율성을 높이고 고객 만족도 및 비즈니스 가치를 극대화하였음',
          weight: 'BOLD',
        },
        {
          content: 'SMS/알림톡 Third Party API 외부 연동',
          descriptions: [
            {
              content: '운송 진행 상태를 실시간으로 고객과 차주에게 안내하도록 구현',
            },
            {
              content: '접수/배차/완료 단계를 자동 알림화하여 고객만족도 및 업무 효율 증가',
            },
          ],
        },
        {
          content: '지급이체 배치 기능 개발(운임비 자동 지급)',
          descriptions: [
            {
              content: '차주에게 운임비를 자동 지급하는 배치 프로세스 구현',
            },
            {
              content: '지급 지연, 오류를 최소화하여 신뢰도 및 업무 효율 상승',
            },
            {
              content: '연 지급액 3,000억을 오송금 없이 정확하게 지급',
            },
          ],
        },
        {
          content: '주선사 권한 기능 개발',
          descriptions: [
            {
              content: '주선사의 권한을 별도 설정·관리하여 불필요한 권한 노출 최소화',
            },
            {
              content: '주선 업무 프로세스 효율화',
            },
          ],
        },
        {
          content: '화물 관제 기능 개발 (POC)',
          descriptions: [
            {
              content:
                '화물 관제 시스템을 개발하여 실시간으로 화물 위치를 모니터링할 수 있는 기능 개발',
            },
          ],
        },
        {
          content: 'CTI(Computer Telephony Integration) 솔루션 내재화',
          descriptions: [
            {
              content:
                '고객 상담 자동화를 위해 CTI 시스템을 티맵 화물에 통합하여 인바운드/아웃바운드 콜과 고객 정보를 실시간으로 연동',
            },
            {
              content: '상담 효율 향상 및 고객 만족도 증대',
            },
          ],
        },
      ],
    },
    // {
    //   title: 'NHN Dooray! 메신저 슬래시 커맨드',
    //   startedAt: '2022-04',
    //   endedAt: '2022-09',
    //   where: 'NHN SOFT',
    //   descriptions: [
    //     {
    //       content: 'NHN 사내용 슬래시 커맨드 개발',
    //       weight: 'BOLD',
    //       descriptions: [
    //         {
    //           content: '사내 정보 시스템 슬래시 커맨드 명령어 개발',
    //         },
    //       ],
    //     },
    //     {
    //       content: '도메인 변경을 최소화 하기 위해 헥사고날 아키텍처 도입',
    //     },
    //     {
    //       content: '사내 시스템 API 연동',
    //     },
    //   ],
    // },
    {
      title: 'NHN Dooray! 홈/게시판',
      startedAt: '2021-02',
      endedAt: '2022-09',
      where: 'NHN SOFT',
      descriptions: [
        {
          content: 'NHN Dooray! 홈 신규서비스 런칭',
          weight: 'BOLD',
          descriptions: [
            { content: '다양한 두레이 서비스 포털 위젯 기능 개발' },
            {
              content:
                '홈 서비스에서 변경사항이 잦은 위젯 개발 시 추상골격클래스 기법을 이용한 확장에는 열려있고 수정에는 닫혀있는 OCP 규칙을 준수하여 개발함. 그로 인해 새로운 위젯 타입을 쉽게 추가할 수 있음.',
            },
            {
              content:
                '홈 서비스에서 운영상황에서 위젯 기능 조회시 N+1이 발생하던 이슈를 fetch join으로 해결',
            },
          ],
        },
        {
          content: 'NHN Dooray! 게시판 신규서비스 런칭',
          weight: 'BOLD',
          descriptions: [
            { content: '조직 단위로 사용하는 게시판 기능 개발' },

            {
              content:
                '반복적이고 실수하기 쉬운 객체간의 형변환을 컴파일 타임 맵핑 코드를 지원하는 MapStruct 라이브러리를 사용하여 형변환 속도 개선 및 보일러플레이트 코드 대폭 감소 ',
            },
            {
              content:
                '단일 스레드로 테스트하기 힘든 게시글 동시편집 방지 비즈니스로직을 멀티 스레드를 활용한 낙관적락 통합 테스트 구현으로 검증',
              href:
                'https://donghyeon.dev/junit/2021/10/17/%EB%82%99%EA%B4%80%EC%A0%81%EB%9D%BD-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EA%B8%B0/',
            },
            {
              content:
                'JPA의 연관관계 맵핑 시  CascadeType.PERSIS를 이용했을 때 자식 엔티티가 삭제 안되는 현상 팀 내 공유',
            },
          ],
        },
      ],
    },
    {
      title: '한국은행 두레이 전환 프로젝트',
      startedAt: '2021-12',
      endedAt: '2022-02',
      where: 'NHN SOFT',
      descriptions: [
        {
          content:
            '한국은행 인사정보를 keycloak 연동과 한국은행 만의 두레이 회원가입 및 관리자화면 개발 프로젝트',
          weight: 'BOLD',
          descriptions: [
            { content: 'Vue.js를 이용한 한국은행의 두레이 회원가입 및 관리자 화면 개발' },
          ],
        },
        {
          content: '다중 데이터베이스 트랜잭션 롤백 이슈 해결',
        },
        {
          content: 'NHN 협업툴 두레이 한국은행도 쓴다',
          href: 'https://zdnet.co.kr/view/?no=20220121160836',
        },
      ],
    },
    {
      title: 'P&ID',
      startedAt: '2020-07',
      endedAt: '2021-02',
      where: '위엠비(WeMB)',
      descriptions: [
        { content: '남제주 발전소 도면편집 프로그램 납품' },
        { content: 'JWT를 이용해서 기존 RENOBIT 솔루션과 로그인 통합' },
        { content: 'Jenkins와 Docker를 이용한 CI/CD 구현 ' },
        { content: '레거시를 Spring Boot로 전환하여, 보일러플레이트 코드 50% 제거 ' },
        { content: 'TDD를 토입하여, 코드 안정성 확대' },
      ],
    },

    {
      title: 'RENOBIT 빅데이터 시각화 솔루션',
      startedAt: '2020-05',
      endedAt: '2021-02',
      where: '위엠비(WeMB)',
      descriptions: [
        { content: 'Spring MVC 모델에서 C이 없는 MV 기반의 패턴을 MVC구조로 변경함' },
        { content: '테스트 코드 도입' },
        { content: 'Mybatis -> JPA로 전환에 기여함.' },
      ],
    },

    {
      title: '웰바이 Admin 페이지 개발 및 API 개발',
      startedAt: '2019-07',
      endedAt: '2020-03',
      where: '웰바이(Well-Buy)',
      descriptions: [
        {
          content: 'API Server',
          weight: 'MEDIUM',
          descriptions: [
            { content: '간편로그인' },
            { content: '리뷰기능' },
            { content: '즐겨찾기' },
            { content: '상점검색' },
          ],
        },
        {
          content: 'Admin 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'C3 Libary를 통한 KPI 지표 그래프 화' },
            { content: 'Spring Batch 서비스 개발' },
            { content: 'App Push 예약 전송' },
          ],
        },
        {
          content: 'MVP 모델 제작부터, 실제 수익까지 내어 최종 EXIT 했음.',
          weight: 'MEDIUM',
        },
        {
          content: '라스트오더(미로), 지역기반 스마트오더 개발사 "웰바이 인수"',
          href:
            'https://www.venturesquare.net/812080?fbclid=IwAR3hnIiociWFku2slbcpYYYyKH2kUUEU2GmuUG7M-8l8Zhn6s_dT00i75GA',
        },
      ],
    },
  ],
};

export default project;
