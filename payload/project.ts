import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '오너톡 커뮤니티 신규 개발',
      startedAt: '2026-07',
      where: '티맵 모빌리티 · 2026년 11월 말 출시 예정',
      descriptions: [
        {
          content:
            'Kotlin·Spring Boot 3·MySQL 기반으로 게시글·댓글·좋아요의 데이터 모델과 API를 처음부터 직접 설계하고 구현',
        },
        {
          content: '티맵 계정·알림·POI 검색 등 내부 서비스 연동',
        },
        {
          content: '타 팀이 개발한 AWS 기반 이미지 모더레이션 기능을 연동해 유해 이미지 사전 차단',
        },
        {
          content: '타 팀의 기존 썸네일 생성 모듈 공통화를 요청하고 재사용해 중복 개발 방지',
        },
      ],
    },
    {
      title: '운전습관 개발',
      startedAt: '2025-03',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content: 'Kafka·Flink 재처리 정합성 개선',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '티맵 핵심 서비스인 운전습관에서 장애 복구를 위한 재처리 시, 하나의 주행 이력이 일부만 생성되거나 여러 건으로 분할되는 문제 발생',
            },
            {
              content:
                '동일한 스트리밍 데이터를 반복 재처리할 수 있는 테스트 환경을 구축하고, RDB에 저장한 정상 처리 결과와 비교해 변경 전후 정합성 검증',
            },
            {
              content:
                '빠른 입력 기준의 Watermark 생성으로 다른 입력의 메시지가 누락되는 원인을 확인하고, Watermark를 독립적으로 생성하도록 변경',
            },
            {
              content: '반복 재처리 테스트에서 기준 데이터 대비 정합성 99.9% 달성',
            },
          ],
        },
        {
          content: 'VOC 대응 프로세스 개선',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'VOC 원인 확인을 위해 개발자가 원시 데이터를 정제하고, CS 담당자가 사전 작성된 SQL로 조회해야 하는 구조로 인해 반복적인 분석 작업과 데이터 가공 비용 발생',
            },
            {
              content:
                '탐지 상세정보를 스퀘어어드민에서 직접 조회할 수 있도록 제공해, 개발자의 데이터 정제와 CS 담당자의 SQL 실행에 의존하던 대응 절차 간소화',
            },
            {
              content:
                '데이터 가공·조회에 소요되던 월 500만원의 인프라 비용 절감, CS 담당자의 건당 조회·확인 시간 2분 → 1분으로 50% 단축',
            },
          ],
        },
        {
          content: 'Flink 로컬 재현·디버깅 환경 구축',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '타 팀으로부터 인수한 Flink 서비스에 로컬 실행·재현 절차가 없어, 원시 GPS 데이터만으로 VOC 원인을 분석하는 데 한계',
            },
            {
              content:
                '실제 사용자 GPS 데이터를 로컬에서 재생하고, IDE 브레이크포인트로 처리 흐름과 중간 상태를 추적할 수 있는 디버깅 환경 구축',
            },
            {
              content:
                '실행 과정에서 오류 원인을 직접 확인할 수 있도록 개선해, 개발자의 VOC 건당 원인 분석 시간 약 40분 → 5분으로 단축',
            },
          ],
        },
        {
          content: 'Flink 처리 결과 모니터링 및 이상 징후 알림 구축',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '주행 생성·미생성 건수와 위반요소 탐지율을 확인할 지표가 없어, 로직 변경에 따른 처리 이상을 파악하기 어려운 상황',
            },
            {
              content:
                '주요 처리 결과를 메트릭으로 수집하는 대시보드를 구축하고, 비정상 수준의 변화에 대한 모니터 알림 설정',
            },
            {
              content:
                '로직 변경 전후의 영향을 확인하고, 주행 생성 및 위반 탐지의 이상 징후를 조기에 인지할 수 있는 운영 체계 마련',
            },
          ],
        },
      ],
    },
    {
      title: 'TMAP OPEN API 개발',
      startedAt: '2024-12',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content: 'OpenMetrics 도입으로 모니터링 비용 절감 및 사내 확산',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'API 사용량을 로그 기반으로 집계하면서, 사용량 증가에 따라 Datadog 로그 수집·분석 비용이 커지는 문제 발생',
            },
            {
              content:
                '사내 최초로 OpenMetrics 기반 메트릭 수집 방식을 도입해, 로그 기반 집계 대비 모니터링 비용 절감',
            },
            {
              content:
                '사내 기술세션에서 도입 사례를 공유하고, 여러 팀의 OpenMetrics 적용으로 확산',
            },
          ],
        },
      ],
    },
    {
      title: '운전점수 개발',
      startedAt: '2024-06',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content: '운전점수 계산 로직 공통화로 중복 구현 해소',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '약 4개 서비스에서 점수 계산 로직을 개별 구현하고 있어, 운전점수 2.0의 계산 방식 변경을 각 서비스에 중복 반영해야 하는 상황',
            },
            {
              content:
                '계산 로직을 공통 Starter 라이브러리로 분리하고, 각 서비스가 의존성 추가와 함수 호출만으로 사용할 수 있도록 제공',
            },
            {
              content:
                '계산 로직의 수정 지점을 라이브러리로 일원화해, 서비스별 중복 구현과 변경 누락 가능성 축소',
            },
          ],
        },
        {
          content: '운전점수 서비스 내재화 및 AWS 마이그레이션',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '외주사가 개발한 SKT IDC 기반 운전점수 서비스를 내부 개발·운영 체계로 전환하는 내재화 프로젝트에 참여',
            },
            {
              content: '서비스를 AWS로 이전하고 Oracle → DynamoDB 전환 수행',
            },
            {
              content:
                'AWS로 옮긴 기존 로직의 응답을 사용자에게 반환하면서 전환 대상 로직의 결과를 함께 비교하고, Datadog 대시보드에서 응답 일치율을 검증하며 점진적으로 전환',
            },
          ],
        },
        {
          content: 'DynamoDB 데이터 보관 정책 수립으로 저장 비용 26% 절감',
          weight: 'BOLD',
          descriptions: [
            {
              content: '삭제 정책 부재로 사용하지 않는 주행 이력이 장기간 누적돼 저장 비용 증가',
            },
            {
              content:
                '데이터 보관·삭제 기준을 수립하고, 대량 삭제 시 DB 처리 용량을 초과하지 않도록 삭제 처리량을 점진적으로 증가시키고 실패 요청에 지수 백오프 재시도 적용',
            },
            {
              content: '불필요한 장기 보관 데이터를 정리해 DynamoDB 저장 비용 약 26% 절감',
            },
          ],
        },
      ],
    },
    {
      title: '티맵 화물서비스 신규 개발 및 출시',
      startedAt: '2022-10',
      endedAt: '2024-05',
      where: '티맵 모빌리티',
      descriptions: [
        {
          content: '"티맵 화물" 정식 출시',
          href: 'https://it.chosun.com/news/articleView.html?idxno=2023020900990',
        },
        {
          content: '운임 자동 지급 배치 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '지급 대기 주문을 대상으로 일 1회 배치를 구현하고, 지급 대상 선정부터 은행 API 호출·결과 확인·주문 상태 갱신까지 개발',
            },
            {
              content:
                '지급 완료 상태 저장과 후속 처리의 트랜잭션을 분리해, 후속 처리 실패로 지급 상태가 롤백되는 문제 방지',
            },
            {
              content:
                '이상 발생 시 배치를 중단하고 송금 결과와 원인을 확인한 뒤 재실행하는 운영 절차 적용',
            },
            {
              content: '약 1년 6개월의 운영 기간 동안 누적 약 3,000억 원의 운임 지급 처리',
            },
          ],
        },
        {
          content: '운송 업무 기능 개발',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '접수·배차·완료 단계별 SMS·알림톡 자동 발송 및 주선사 접근 권한 관리 기능 구현',
            },
          ],
        },
      ],
    },
    {
      title: 'Dooray! 홈·게시판 신규 개발',
      startedAt: '2021-02',
      endedAt: '2022-09',
      where: 'NHN SOFT',
      descriptions: [
        {
          content: '위젯 확장을 고려한 공통 구조 설계',
          weight: 'BOLD',
          descriptions: [
            {
              content: '여러 서비스의 정보를 제공하는 홈 화면 위젯 개발',
            },
            {
              content:
                '추상 골격 클래스를 활용해 위젯별 데이터 조회 구현과 공통 처리 흐름을 분리하고, 새로운 위젯 유형을 추가할 수 있는 구조 설계',
            },
          ],
        },
        {
          content: '위젯 조회 N+1 개선',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'Scouter APM 모니터링으로 위젯 조회 시 발생한 N+1 문제를 발견하고, Fetch Join을 적용해 개선',
            },
          ],
        },
        {
          content: '게시글 동시 수정 검증을 위한 동시성 테스트 구현',
          weight: 'BOLD',
          href:
            'https://donghyeon.dev/junit/2021/10/17/%EB%82%99%EA%B4%80%EC%A0%81%EB%9D%BD-%ED%85%8C%EC%8A%A4%ED%8A%B8%ED%95%98%EA%B8%B0/',
          descriptions: [
            {
              content: '조직 단위 게시판 기능 개발',
            },
            {
              content:
                'JPA 낙관적 락 검증 과정에서 발생한 스레드별 트랜잭션 문제를 해결하고, CyclicBarrier로 동일 버전 데이터의 동시 수정 상황 재현',
            },
            {
              content:
                '최종 버전 값으로 단일 수정 반영 여부를 검증하고, 구현 과정과 시행착오를 기술 블로그에 공유',
            },
          ],
        },
        {
          content: 'MapStruct 도입으로 객체 매핑 코드 간소화',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '반복적으로 작성하던 객체 간 매핑 코드를 MapStruct 기반으로 전환해 보일러플레이트 감소',
            },
            {
              content:
                '컴파일 시점에 매핑 코드를 생성하도록 구성해 수작업 매핑의 누락·실수 가능성 축소',
            },
          ],
        },
      ],
    },
    {
      title: '한국은행 Dooray! 전환 지원',
      startedAt: '2021-12',
      endedAt: '2022-02',
      where: 'NHN SOFT',
      descriptions: [
        {
          content: '한국은행 인사정보와 Keycloak을 연동하는 회원·인증 체계 구축에 참여',
        },
        {
          content: 'Vue.js 기반의 한국은행 전용 회원가입 및 관리자 화면 개발',
        },
        {
          content: 'NHN 협업툴 두레이 한국은행도 쓴다',
          href: 'https://zdnet.co.kr/view/?no=20220121160836',
        },
      ],
    },
    {
      title: 'RENOBIT 시각화 솔루션 개발 및 개선',
      startedAt: '2020-05',
      endedAt: '2021-02',
      where: '위엠비(WeMB)',
      descriptions: [
        {
          content: '리플렉션 기반 호출 구조를 기능별 API로 점진적 전환',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                'FE가 전달한 서비스명·메서드명을 리플렉션으로 실행하던 단일 엔드포인트 구조 개선',
            },
            {
              content:
                'FE 호출 지점을 정리하고, 기능별 URL·Controller에서 서비스 메서드를 직접 호출하도록 점진적으로 전환',
            },
            {
              content: '코드에서 API별 호출 관계를 명시적으로 파악할 수 있도록 개선',
            },
          ],
        },
        {
          content: '신규 기능 개발에 테스트 코드 도입',
          weight: 'BOLD',
          descriptions: [
            {
              content:
                '테스트 코드가 없던 개발 환경에서 테스트 작성을 제안하고, 신규 기능 개발 시 테스트 코드를 함께 작성하는 방식 적용',
            },
          ],
        },
        {
          content: 'Jenkins·Docker 기반 CI/CD 구현',
          weight: 'BOLD',
          descriptions: [
            {
              content: 'Jenkins와 Docker를 활용한 빌드·배포 자동화 구성',
            },
          ],
        },
      ],
    },
    {
      title: '음식 포장 서비스 인수 개발 및 기능 확장',
      startedAt: '2019-07',
      endedAt: '2020-03',
      where: '웰바이(Well-Buy)',
      descriptions: [
        {
          content:
            '외주 개발된 초기 서비스를 인수해, 신입 개발자로서 단독으로 후속 개발을 담당하고 서비스 수익화 단계까지 참여',
        },
        {
          content: '간편로그인·리뷰·즐겨찾기·상점 검색 등 앱 서비스 API 개발',
        },
        {
          content: '운영자용 KPI 대시보드, Spring Batch 기반 배치 및 앱 푸시 예약 발송 기능 구현',
        },
      ],
    },
  ],
};

export default project;
