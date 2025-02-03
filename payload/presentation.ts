import { IPresentation } from '../component/presentation/IPresentation';

const presentation: IPresentation.Payload = {
  disable: false,

  list: [
    {
      title: '인덕대학교 컴퓨터소프트웨어학과 특강 - 2023',
      subTitle: '인덕대학교 컴퓨터소프트웨어학과 재학생들 대상 취업 특강',
      at: '2023-11',
      descriptions: [
        {
          content: '개발자 커리어 및 직무 특강, QnA (1시간)',
        },
      ],
    },
    {
      title: '인덕대학교 컴퓨터소프트웨어학과 특강 - 2022',
      subTitle: '인덕대학교 컴퓨터소프트웨어학과 재학생들 대상 취업 특강',
      at: '2022-11',
      descriptions: [
        {
          content: '개발자 커리어 및 직무 특강, QnA (1시간)',
        },
      ],
    },
  ],
};

export default presentation;
