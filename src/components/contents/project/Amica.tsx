import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import  ImageSlider  from '../../common/modules/ImageSlider';
import * as Styled from '../styled';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/osohyun0224/Amica-Frontend',
  },
  {
    text: '기록하는 내 친구를 위한 현명한 소비, Amica 확인하기',
    href: 'https://async-without-sync.vercel.app/',
  },
];

const IMAGES = [
  '/image/amica/amica1.png',
  '/image/amica/amica2.png',
  '/image/amica/amica3.png',
  '/image/amica/amica4.png',
];

const Amica = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-멋사-중앙해커톤-Amica">기록하는 내 친구를 위한 현명한 소비, Amica!</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>2023 멋쟁이사자처럼 대학 11주년 중앙해커톤 출품작</Explain>
        <Explain>반려동물을 기르는 사람들을 대상으로 제공하는 이커머스 웹앱 서비스</Explain>
        <Explain>회원가입 및 로그인, 자신의 펫들의 대한 세부 정보를 등록하는 마이펫 페이지 개발</Explain>
        <Explain>상품의 각각의 세부 정보를 조회하는 상품 세부 페이지 개발</Explain>
        <Explain>원하는 상품을 검색하는 검색 페이지 개발</Explain>
        <Explain>React, Redux를 주로 사용하여 프론트엔드 개발</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <ImageSlider images={IMAGES} />
    </Styled.ExperienceCard>
  );
};

export default  Amica;