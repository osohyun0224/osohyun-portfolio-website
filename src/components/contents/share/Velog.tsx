import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import * as Styled from '../styled';

const LINKS = [
  {
    text: '[대표]2023 8월 2주차 주간 5위 달성: 5시간 동안 개발한 생일 이벤트 웹사이트 프로젝트 회고',
    href: 'https://velog.io/@osohyun0224/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EC%83%9D%EC%9D%BC-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%8A%A4%EC%BC%80%EC%9D%BC-%EB%AF%B8%EC%B3%A4%EB%8B%A4',
  },
  {
    text: '[대표]2023 SW중심대학 공동해커톤 개발자 참가 및 프로젝트 개발 후기 (우수상 수상)',
    href: 'https://velog.io/@osohyun0224/2023-SW%EC%A4%91%EC%8B%AC%EB%8C%80%ED%95%99-%EA%B3%B5%EB%8F%99%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%B0%B8%EA%B0%80-%EA%B0%9C%EB%B0%9C%EC%9E%90-%ED%9B%84%EA%B8%B0Feat.-%EC%9A%B0%EC%88%98%EC%83%81',
  },
  {
    text: '[대표]React와 Vue.js에 Progressive Web Application 구현하기 시리즈',
    href: 'https://velog.io/@osohyun0224?tag=pwa',
  },
  {
    text: '[대표] 우아한테크코스 6기 선발 여정의 기록 시리즈',
    href: 'hhttps://velog.io/@osohyun0224/series/%EC%9A%B0%ED%85%8C%EC%BD%94-6%EA%B8%B0-%EB%8F%84%EC%A0%84%ED%95%98%EA%B8%B0',
  },
];

const Velog = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>기술 블로그</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="벨로그">
        <InlineLinkText href="https://velog.io/@osohyun0224">벨로그</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>진행했던 프로젝트, 해커톤 후기를 기록합니다.</Explain>
        <Explain>공부하면서 알게 된 개발 지식을 정리하면서 기록하고, 공유합니다.</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default Velog;