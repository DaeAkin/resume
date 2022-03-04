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
                '단일 스레드로 테스트하기 힘든 게시글 동시편집 방지 비즈니스로직을 멀티 스레드를 활용한 낙관적락 통합 테스트 구현으로 인한 검증을 했음',
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
