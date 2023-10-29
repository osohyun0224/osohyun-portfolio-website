import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import * as Styled from '../styled';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/osohyun0224/Capstone-Rehab-FrontEnd',
  },
];

const Rehab = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="capstone-rehab">
        비대면 재활 치료 웹서비스, Re:Hab
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023-2 한림대학교 소프트웨어캡스톤디자인 프로젝트 개발 진행 중</Explain>
        <Explain>언제, 어디서든 비대면 재활치료를 진행하는 웹서비스 기능을 제공함</Explain>
        <Explain>환자의 재활 운동 강의 학습 기능 개발</Explain>
        <Explain>전문의의 환자 차트 작성 및 본인 환자 수강 현황 가능하도록 개발 </Explain>
        <Explain>재활 치료사의 재활 운동 강의 등록 및 환자에게 과제 할당 기능 개발</Explain>
        <Explain>주로 React, Redux를 사용하여 개발 진행 중</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default Rehab;