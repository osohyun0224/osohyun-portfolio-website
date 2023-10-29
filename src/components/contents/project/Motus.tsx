import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import  ImageSlider  from '../../common/modules/ImageSlider';
import * as Styled from '../styled';

const LINKS = [
  {
    text: 'Frontend GitHub Repository',
    href: 'https://github.com/MotuS-Web/MotuS-FrontEnd',
  },
  {
    text: '2023 비대면 운동 학습 플랫폼, MotuS 사용 가이드 영상 ',
    href: 'https://www.youtube.com/watch?v=a8xAxw9wZ10&t=21s',
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

const Motus = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-공개SW개발자대회-Motus">
        <InlineLinkText href="https://motus.website/">비대면 운동 학습 플랫폼, MotuS</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023 공개SW 개발자대회 본선 진행 작 ~ ing</Explain>
        <Explain>누구나 특정 운동에 대한 가이드 영상을 프로그램으로 등록할 수 있으며, 등록된 운동 프로그램을 학습</Explain>
        <Explain>AI의 유사도 측정을 통해 수행자의 운동 수행 정확도를 확인 가능한 플랫폼 개발</Explain>
        <Explain>운동 영상 조회 , 운동 영상 등록, 운동 강의 수강, AI 수행 유사도 판정 기능 </Explain>
        <Explain>React, Redux를 주로 사용하여 프론트엔드 개발</Explain>
        <Explain>오픈 소스 플랫폼으로 개발하여 배포</Explain>
        <Explain>프론트엔드 개발 뿐만 아니라, 오픈소스 플랫폼으로 배포하기 위하여 라이센스 공부도 진행하고 이에 맞춰 기능을 개발</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <ImageSlider images={IMAGES} />
    </Styled.ExperienceCard>
  );
};

export default Motus;