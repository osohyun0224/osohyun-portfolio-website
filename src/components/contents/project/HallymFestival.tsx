import React from 'react';

import { Explain, InlineLinkText, Links, Skills } from '../../common';
import * as Styled from '../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/Hallym-LIKELION/HallymFestival2023-Frontend',
  },
  {
    text: '2023 한림대학교 대동제 프로젝트 진행 후기 노션 링크',
    href: 'https://osohyun.notion.site/2023-73d11d6c0c0545ad9a3726f38ef3b3c6?pvs=4',
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
  {
    skill: 'Vercel',
    explain: EXPLAIN.vercel,
  },
];

const HallymFestival = () => {
  return (
    <Styled.ExperienceCard>
    <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
    <Styled.ExperienceCardTitle id="2023-한림대학교-대동제-웹사이트">
      <InlineLinkText href="https://hallymfestival.com/">🎆​ 2023 한림대학교 대동제 웹사이트</InlineLinkText>
    </Styled.ExperienceCardTitle>
    <Styled.ExperienceCardPeriod>2023.02.26 ~ 2023.05.18</Styled.ExperienceCardPeriod>

    <Styled.ExperienceCardExplainContainer>
      <Explain>2023 한림대학교 대동제 웹사이트 프론트 개발자 및 팀의 리더로 참여</Explain>
      <Explain>메인 홈, 공지사항, 방명록, 타임 테이블, 프로그램, About US, 굿즈 페이지 개발</Explain>
      <Explain>전반적으로 축제의 모든 정보를 제공하였으며, 실시간으로 부스 현황 가능하도록 개발해 실제 서비스함 </Explain>
      <Explain>지난 5월, 배포 후 학우분들의 피드백을 받아 3차례의 기능 업데이트를 진행함 (유지보수 경험) </Explain>
      <Explain>총 7천명 재학생 대상 2.5만회 조회수 달성</Explain>
      <Explain>2023 한림대학교 축제준비위원회 홍보팀장과 협업 진행 리드 / 웹사이트 홍보 진행</Explain>
    </Styled.ExperienceCardExplainContainer>

    <Links links={LINKS} />
    <Skills skills={SKILLS} />
  </Styled.ExperienceCard>
  );
};

export default HallymFestival;