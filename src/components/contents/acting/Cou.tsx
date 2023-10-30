import React from 'react';

import { Explain, InlineLinkText, Links, Skills } from '../../common';
import * as Styled from '../../styled';
import EXPLAIN from '../projects/explains';

const LINKS = [
  {
    text: 'COU GitHub Repository',
    href: 'https://github.com/COUniv/COUDeploy',
  },
  {
    text: 'COU 웹서비스 바로가기',
    href: 'http://bit.ly/cou-iacmp/',
  },
];

const SKILLS = [
  {
    skill: 'Vue.js',
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
];

const Cou = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교내 창업동아리</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-Cou">
        <InlineLinkText href="http://bit.ly/cou-iacmp/">온라인 코딩 플랫폼 COU 창업동아리</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2022.12.28 ~ 현재</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>온라인 코딩 저지 웹서비스를 개발, 한림대학교 SW중심대학사업단 창업동아리</Explain>
        <Explain>해당 동아리에서 웹 프론트엔드 개발자로 활동하며 기능을 개발하고 유지보수를 진행</Explain>
        <Explain>2023-1 "프로그래밍 스튜디오" 수강생 대상 유저리서치 진행 후 유지보수를 위한 기능 개발 기획</Explain>
        <Explain>현 서비스에 대한 피드백을 수용하고, 의견 바탕으로 기능을 구체화하여 코드리뷰 기능 개발 진행</Explain>
        <Explain>오답노트 , 코드리뷰 게시판 (CRUD) 개발 진행 중 </Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default Cou;