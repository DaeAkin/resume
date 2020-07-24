import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content: '자바의 JVM 구조와 GC (2020.03.31)',
      href:
        'https://donghyeon.dev//articles/2020-03/%EC%9E%90%EB%B0%94%EC%9D%98-JVM-%EA%B5%AC%EC%A1%B0%EC%99%80-Garbage-Collection',
    },
    {
      content: '자바의 Heap과 Stack (2020.03.29)',
      href:
        'https://donghyeon.dev//articles/2020-03/%EC%9E%90%EB%B0%94%EC%9D%98-Heap%EA%B3%BC-Stack',
    },
    {
      content: 'Spring Validation (2019.11.09)',
      href: 'https://donghyeon.dev//articles/2019-11/Spring-Validation-index',
    },
  ],
};

export default article;
