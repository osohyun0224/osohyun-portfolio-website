import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../styled';
import  ImageSlider  from '../../common/modules/ImageSlider';

const IMAGES = [
  '/image/likelion/likelion1.jpg',
  '/image/likelion/likelion1.jpg',
];

const Likelion = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교내 활동</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="학술-멋사">
        멋쟁이사자처럼 한림대학교 11기 프론트엔드 개발자 및 Builder 팀 리더
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.01 ~ 현재</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>전국 61개 대학, 600여 명의 운영진과 약 2,000명의 부원으로 이루어진 전국 최대 IT 연합동아리</Explain>
        <Explain>웹/ 앱 개발, 기획/디자인 파트 총 4개의 파트로 나누어져 있고 프로젝트 중심으로 진행하는 Builder팀을 직접 만들고 이끌어오고 있습니다.</Explain>
        <Explain>웹 프론트엔드 파트 Builder 개발자로도 활동하고 있습니다.</Explain>
        <Explain>빌더 부원들과 다양한 프로젝트 및 해커톤에 참가하며 개발자의 역량을 쌓아오고 있습니다.</Explain>
        <Explain>
        <InlineLinkText href="https://hallymfestival.com/">2023 한림대학교 대동제 웹사이트 개발 진행</InlineLinkText>
        </Explain>
        <Explain>2023 운영진 해커톤, 벚꽃톤 참가🌸</Explain>
        <Explain>2023 중앙 아이디어톤 참가🏆 (한림대 2위)</Explain>
        <Explain>2023 중앙 해커톤 참가🏆 </Explain>
      </Styled.ExperienceCardExplainContainer>
      <ImageSlider images={IMAGES} />
    </Styled.ExperienceCard>
  );
};

export default Likelion;
