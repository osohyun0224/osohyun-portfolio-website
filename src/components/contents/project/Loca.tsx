import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import  ImageSlider  from '../../common/modules/ImageSlider';
import * as Styled from '../styled';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/osohyun0224/SWUniv-Hackaton-FrontEnd',
  },
  {
    text: '2023 SW중심대학 공동해커톤 개발자 회고글(feat. 우수상)',
    href: 'https://velog.io/@osohyun0224/2023-SW%EC%A4%91%EC%8B%AC%EB%8C%80%ED%95%99-%EA%B3%B5%EB%8F%99%ED%95%B4%EC%BB%A4%ED%86%A4-%EC%B0%B8%EA%B0%80-%EA%B0%9C%EB%B0%9C%EC%9E%90-%ED%9B%84%EA%B8%B0Feat.-%EC%9A%B0%EC%88%98%EC%83%81',
  },
];

const IMAGES = [
  '/image/loca/loca1.png',
  '/image/loca/loca2.png',
  '/image/loca/loca3.jpg',
  '/image/loca/loca4.png',
  '/image/loca/loca5.jpg',
  '/image/loca/loca6.jpg',
];

const Loca = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-공동해커톤-로카">원클릭 콘텐츠 현지화 웹서비스, LOCA</Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023 SW중심대학 공동해커톤 3위 우수상(SW중심대학협의회장상) 수상작</Explain>
        <Explain>이미지에서 바꿀 부분을 선택하고, 어떻게 바꿀지 작성해 새로운 콘텐츠를 만드는 서비스</Explain>
        <Explain>웹 서비스 메인 기능인 콘텐츠 편집 페이지 프론트엔드 개발을 담당</Explain>
        <Explain>React, React Konva, Redux를 주로 사용하여 개발</Explain>
        <Explain>팀 대표 프로젝트 최종 발표도 맡아 심사위원으로부터 질의응답을 진행</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <ImageSlider images={IMAGES} />
    </Styled.ExperienceCard>
  );
};

export default Loca;