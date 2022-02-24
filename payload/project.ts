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
      title: 'NHN Dooray! 홈/게시판',
      startedAt: '2021-02',
      where: 'NHN SOFT',
      descriptions: [
        {
          content: '2021년 NHN Dooray! 홈/게시판 신규서비스 런칭',
          weight: 'BOLD',
          descriptions: [
            { content: 'NHN Dooray! 신규 서비스 홈/게시판 신규 개발' },
            { content: '홈 : 다양한 두레이 서비스 포털 위젯 기능 개발' },
            { content: '게시판 : 기본적인 게시판 기능을 하고 조직에서 사용하는 게시판 기능 개발' },
            {
              content: '게시글 동시편집 방지를 위한 낙관적락 테스트 구현',
              href:
                'https://donghyeon.dev/junit/2021/10/17/%EB%82%99%EA%B4%80%EC%A0%81%EB%9D%BD-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EA%B8%B0/',
            },
          ],
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
