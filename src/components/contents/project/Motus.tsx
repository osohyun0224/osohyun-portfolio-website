import React from 'react';

import { Explain, InlineLinkText, Links, Skills } from '../../common';
import * as Styled from '../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/MotuS-Web/MotuS-FrontEnd',
  },
  {
    text: '2023 비대면 운동 학습 플랫폼, MotuS 사용 가이드 영상 ',
    href: 'https://www.youtube.com/watch?v=a8xAxw9wZ10&t=21s',
  },
];

const SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
  },
  {
    skill: 'Redux',
    explain: `모든 상태 업데이트를 액션으로 정의하고, 액션 정보에 기반하여 Reducer에서 상태를 업데이트하기 때문에 상태를 더욱 쉽게 예측 가능하게 하여 유지보수 측면에 긍정적인 효과를 제공해줍니다.`,
  },
  {
    skill: 'React-router-dom',
    explain: EXPLAIN.reactRouterDom,
  },
  {
    skill: 'styled-components',
    explain: EXPLAIN.styledComponents,
  },
  {
    skill: 'ESLint',
    explain: EXPLAIN.eslint,
  },
  {
    skill: 'Prettier',
    explain: EXPLAIN.prettier,
  },
  {
    skill: 'Vercel',
    explain: EXPLAIN.vercel,
  },
];

const Motus = () => {
  return (
  <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-공개SW개발자대회-Motus">
        <InlineLinkText href="https://motus.website/">🏃‍♀️ ​비대면 운동 학습 플랫폼, MotuS</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.07.19 ~ 2023.10.23</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023 공개SW 개발자대회 본선 진행 중인 프로젝트</Explain>
        <Explain>누구나 특정 운동에 대한 가이드 영상을 프로그램으로 등록할 수 있으며, 등록된 운동 프로그램을 학습</Explain>
        <Explain>AI의 유사도 측정을 통해 수행자의 운동 수행 정확도를 확인 가능한 플랫폼 개발</Explain>
        <Explain>운동 영상 조회 , 운동 영상 등록, 운동 강의 수강, AI 수행 유사도 판정 기능 </Explain>
        <Explain>오픈 소스 플랫폼으로 개발하여 배포(오픈 소스 개발 경험)</Explain>
        <Explain>특히 오픈 소스 플랫폼으로 배포하기 위하여 라이센스 공부도 진행하고 이에 맞춰 기능을 개발</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default Motus;