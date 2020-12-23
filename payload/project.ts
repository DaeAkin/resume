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
      title: 'P&ID',
      startedAt: '2020-07',
      // endedAt: '2017-11',
      where: '위엠비(WeMB)',
      descriptions: [],
    },

    {
      title: 'RENOBIT 빅데이터 시각화 솔루션',
      startedAt: '2020-05',
      // endedAt: '2017-11',
      where: '위엠비(WeMB)',
      descriptions: [
        { content: 'Spring MVC 모델에서 M이 없는 VC 기반의 패턴을 MVC구조로 변경함' },
        { content: '테스트 코드 도입' },
        { content: 'Mybatis -> JPA로 전환 중에 있음' },
        { content: '레거시를 MSA로 전환 중에 있음.' },
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
