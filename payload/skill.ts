import { ISkill } from '../component/skill/ISkill';

const skill: ISkill.Payload = {
  disable: true,
  skills: [
    {
      category: 'Back-end',
      items: [
        { title: 'Kotlin' },
        { title: 'Java' },
        { title: 'Spring Boot' },
        { title: 'Spring Data JPA' },
        { title: 'Spring Batch' },
      ],
    },
    {
      category: 'Data & Streaming',
      items: [
        { title: 'Apache Kafka / Amazon MSK' },
        { title: 'Apache Flink' },
        { title: 'Scala' },
        { title: 'DynamoDB' },
        { title: 'MySQL' },
        { title: 'Redis' },
      ],
    },
    {
      category: 'Infrastructure',
      items: [
        { title: 'AWS' },
        { title: 'Kubernetes / EKS' },
        { title: 'Docker' },
        { title: 'Argo CD / Jenkins' },
        { title: 'Datadog / Grafana' },
        { title: 'OpenMetrics' },
      ],
    },
    {
      category: 'Other',
      items: [
        { title: 'Vue.js' },
        { title: 'JavaScript' },
        { title: 'HTML / CSS' },
        { title: 'Oracle' },
        { title: 'Git / GitHub' },
      ],
    },
  ],
};

export default skill;
