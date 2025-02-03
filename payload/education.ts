import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '학점은행제',
      subTitle: '컴퓨터공학 학사과정',
      startedAt: '2020-03',
      endedAt: '2022-02',
    },
    {
      title: '인덕대학교',
      subTitle: '컴퓨터소프트웨어 학과(전문 학사)',
      startedAt: '2015-03',
      endedAt: '2020-03',
    },
    {
      title: '동북 고등학교',
      subTitle: '자연계',
      startedAt: '2012-03',
      endedAt: '2015-03',
    },
  ],
};

export default education;
