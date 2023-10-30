import React from 'react';

import { Explain, Links, Skills, InlineLinkText } from '../../common';
import * as Styled from '../styled';
import EXPLAIN from './explains';

const LINKS = [
  {
    text: 'Loca Frontend GitHub Repository',
    href: 'https://github.com/osohyun0224/SWUniv-Hackaton-FrontEnd',
  },
  {
    text: '2023 SW중심대학 공동해커톤 개발자 회고글(feat. 우수상)',
    href: 'https://velog.io/@osohyun0224/2023-SW%EC%A4%91%EC%8B%AC%EB%8C%80%ED%95%99-%EA%B3%B5%EB%8F%99%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%B0%B8%EA%B0%80-%EA%B0%9C%EB%B0%9C%EC%9E%90-%ED%9B%84%EA%B8%B0Feat.-%EC%9A%B0%EC%88%98%EC%83%81',
  },
];

const SKILLS = [
  {
    skill: 'React',
    explain: EXPLAIN.react,
  },
  {
    skill: 'React Konva',
    explain: `Konva는 또한 애니메이션, 전환, 노드 중첩, 계층화, 필터링, 캐싱, 데스크톱 및 모바일 애플리케이션에 대한 이벤트 처리 등을 제공해줍니다`,
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
];
const Loca = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-공동해커톤-로카">
        <InlineLinkText href="https://github.com/swuniv-marveling">🌍 ​원클릭 콘텐츠 현지화 서비스, LOCA</InlineLinkText>
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.06.28 ~ 2023.06.30</Styled.ExperienceCardPeriod>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023 SW중심대학 공동해커톤 3위 우수상(SW중심대학협의회장상) 수상작</Explain>
        <Explain>이미지에서 바꿀 부분을 선택하고, 어떻게 바꿀지 작성해 새로운 콘텐츠를 만드는 서비스</Explain>
        <Explain>웹 서비스 메인 기능인 콘텐츠 편집 페이지 프론트엔드 개발을 담당</Explain>
        <Explain>팀 대표 프로젝트 최종 발표도 맡아 심사위원으로부터 질의응답을 진행</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <Skills skills={SKILLS} />
    </Styled.ExperienceCard>
  );
};

export default Loca;