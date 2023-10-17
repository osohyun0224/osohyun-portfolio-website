import React from 'react';

import { Explain,  Links } from '../../common';
import * as Styled from '../styled';

const LINKS = [
  {
    text: '[2023 SW중심대학 공동해커톤 우수상(SW중심대학협의회장상) 수상작] 원클릭 콘텐츠 현지화 웹서비스, LOCA ',
    href: 'https://github.com/osohyun0224/SWUniv-Hackaton-FrontEnd',
  },
  {
    text: '[2023 Promethus AI 해커톤 입선 수상작] 독거노인 심리상담 챗봇 웹앱 서비스, 나눔',
    href: 'https://github.com/osohyun0224/PromethusAI_Hackaton',
  },
  {
    text: '[2023 한림대학교 우수 교생 실습 캘러상 수상작] "알고리즘의 개념과 응용" 연구 수업',
    href: 'https://drive.google.com/file/d/1JOP_cWfC54F10mj7jiW11vQFLlADieHm/view',
  },
];

const Prize = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitle id="오소현-수상-내역">수상 내역</Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>🏅 2022 한림대학교 포트폴리오 경진대회 우수상 수상(2022.11)</Explain>
        <Explain>🏅 2022 한림대학교 우수 봉사자 대회 장려상 수상(2022.11)</Explain>
        <Explain>🏅 2023 Promethus AI 해커톤 입선 수상(2023.02)</Explain>
        <Explain>🏅 2023 한림대학교 우수 교생실습 캘러상 수상(2023.06)</Explain>
        <Explain>🏅 2023 SW중심대학 공통해커톤 우수상(SW중심대학협의회장상) 수상(2023.06)</Explain>
      </Styled.ExperienceCardExplainContainer>

      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default  Prize;