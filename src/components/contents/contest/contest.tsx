import React from 'react';

import { Explain,  Links } from '../../common';
import * as Styled from '../styled';

const LINKS = [
  {
    text: '[2023 멋쟁이사자처럼 운영진 벚꽃톤] 타 대학교 학생들과 미팅 주선 웹서비스, 대학미팅',
    href: 'https://github.com/osohyun0224/CherryBlossom_Hackaton',
  },
  {
    text: '[🏅 2023 Promethus AI 해커톤 입선 수상작] 독거노인 심리상담 챗봇 웹앱 서비스, 나눔',
    href: 'https://github.com/osohyun0224/PromethusAI_Hackaton',
  },
  {
    text: '[2023 멋쟁이사자처럼 11기 중앙 아이디어톤 한림대 2위] 성범죄자 실시간 알림 앱, 디딤벨',
    href: 'https://drive.google.com/drive/folders/1Z2vOhYNOtjkftzlyQ1BkHlepOWBFLV9B',
  },
  {
    text: '[🏅 2023 SW중심대학 공동해커톤 우수상(SW중심대학협의회장상) 수상작] 원클릭 콘텐츠 현지화 웹서비스, LOCA ',
    href: 'https://github.com/osohyun0224/SWUniv-Hackaton-FrontEnd',
  },
  {
    text: '[2023 멋쟁이사자처럼 11기 중앙 해커톤] 제대로 기록하는 내 친구를 위한 현명한 소비, Amica ',
    href: 'https://github.com/Likelion-MainHackaton-2team/Amica_Frontend',
  },
  {
    text: '[🏃🏻 2023 공개SW 개발자대회 본선 진출 작 (진행 중)] 비대면 운동 학습 플랫폼 , MotuS ',
    href: 'https://github.com/MotuS-Web/MotuS-FrontEnd',
  },
  {
    text: '[🏃🏻 2023 한림대학교 23-2 소프트웨어캡스톤디자인 경진대회 (진행 중)] 비대면 재활치료 웹서비스, Re:Hab ',
    href: 'https://github.com/sync-without-async/Rehab-FrontEnd',
  },
];

const Contest = () => {
return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>대회 참가 내역</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="오소현-해커톤-참가">해커톤 참가 기록</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>프론트엔드 개발 공부를 하는 과정에서 꾸준히 해커톤에 참여하여 도전을 멈추지 않았습니다. </Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardPeriod>처음만난 다양한 사람들과 협업하는 기회를 가지며, 소프트스킬을 늘리는데 도움이 되었습니다. </Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardPeriod>저는 앞으로도 다양한 해커톤에 참가하며 제 한계를 더 늘려갈 것입니다.</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>1️⃣ 2023 멋쟁이사자처럼 운영진 대상 벚꽃톤 (2023.02)</Explain>
        <Explain>2️⃣ 2023 Promethus AI 해커톤 (2023.02)</Explain>
        <Explain>3️⃣ 2023 멋쟁이사자처럼 11기 중앙 아이디어톤 (2023.06)</Explain>
        <Explain>4️⃣ 2023 SW중심대학 공동해커톤 (2023.06)</Explain>
        <Explain>5️⃣ 2023 멋쟁이사자처럼 11기 중앙 해커톤 (2023.06)</Explain>
        <Explain>6️⃣ 2023 공개SW 개발자대회 (2023.08 - 진행 중) </Explain>
        <Explain>7️⃣ 2023 한림대학교 23-2 소프트웨어캡스톤디자인 경진대회 (2023.09 - 진행 중)</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default Contest;