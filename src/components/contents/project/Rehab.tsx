import React from 'react';

import { Explain,  Links , Skills, InlineLinkText} from '../../common';
import * as Styled from '../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/osohyun0224/Capstone-Rehab-FrontEnd',
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

const Rehab = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="capstone-rehab">
      <InlineLinkText href="https://rehab-frontend.vercel.app/doctordash">👨‍⚕️​ 비대면 재활 치료 웹서비스, Re:Hab</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.08.20 ~ 개발 진행 중</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023-2 한림대학교 소프트웨어캡스톤디자인 프로젝트 개발 진행 중</Explain>
        <Explain>언제, 어디서든 비대면 재활치료를 진행하는 웹서비스 기능을 제공함</Explain>
        <Explain>환자의 재활 운동 강의 학습 기능 개발</Explain>
        <Explain>전문의의 환자 차트 작성 및 본인 환자 수강 현황 가능하도록 개발 </Explain>
        <Explain>재활 치료사의 재활 운동 강의 등록 및 환자에게 과제 할당 기능 개발</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default Rehab;