import React from 'react';

import { Explain, InlineLinkText, Links , Skills} from '../../common';
import * as Styled from '../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'Project GitHub Repository',
    href: 'https://github.com/osohyun0224/HBD-Deuni-for-Deploy',
  },
  {
    text: '초간단 생일 축하 이벤트 웹사이트',
    href: 'hbd-deuni-for-deploy.vercel.app/',
  },
  {
    text: '개발 후기 회고록 작성 [Velog 2023 8월 2주차 TOP5] ',
    href: 'https://velog.io/@osohyun0224/%EA%B0%9C%EB%B0%9C%EC%9E%90%EC%9D%98-%EC%83%9D%EC%9D%BC-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%8A%A4%EC%BC%80%EC%9D%BC-%EB%AF%B8%EC%B3%A4%EB%8B%A4',
  },
];

const SKILLS = [
  {
    skill: 'NextJS',
    explain: EXPLAIN.nextjs,
  },
  {
    skill: 'Typescript',
    explain: EXPLAIN.typescript,
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

const BirthEvent = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>개인 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="드니-생일축하-웹사이트">
        <InlineLinkText href="https://hbd-deuni-for-deploy.vercel.app/">🎉 ​생일 축하 이벤트 웹사이트</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.08.06 AM 12:00 - 5:00</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>5시간 동안만 챌린지성으로 개발한 생일 이벤트 웹사이트</Explain>
        <Explain>개발 후기 회고 블로그 글, Velog 2023.08 2주차 조회수 5위 달성 🏆</Explain>
        <Explain>첫 Next.js와 Typescript, Firebase를 사용하여 프로젝트 개발을 진행함</Explain>
        <Explain>Apache-2.0 license 등록 후, 오픈 소스로 배포 (star, fork 수 증가)</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default BirthEvent;