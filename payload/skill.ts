import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'AWS',
      level: 1,
    },
    {
      title: 'Java',
      level: 3,
    },

    {
      title: 'Spring',
      level: 1,
    },
    {
      title: 'JPA',
      level: 1,
    },
    {
      title: 'Kotlin',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'Oracle',
      level: 2,
    },
    {
      title: 'Redis',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'Vue.js',
      level: 1,
    },
    {
      title: 'javascript',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 2,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Ubuntu',
    },
    {
      title: 'IntelliJ',
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
    {
      title: 'Notion',
    },
    {
      title: 'Slack',
    },
    {
      title: 'Git / Github',
    },
    {
      title: 'Bitbucket',
    },
    {
      title: 'CI/CD',
    },
    {
      title: 'Docker',
    },
    {
      title: 'Kafka',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
