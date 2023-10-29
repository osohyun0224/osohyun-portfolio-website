import React from 'react';

import { Explain, InlineLinkText, Links } from '../../common';
import  ImageSlider  from '../../common/modules/ImageSlider';
import * as Styled from '../styled';

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

const IMAGES = [
  '/image/festival/fest1.png',
  '/image/festival/fest2.png',
  '/image/festival/fest3.png',
  '/image/festival/fest4.png',
  '/image/festival/fest5.png',
  '/image/festival/fest6.png',
  '/image/festival/fest7.png',
  '/image/festival/fest8.png',
  '/image/festival/fest9.png',
];

const HallymFestival = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>팀 프로젝트</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="2023-한림대학교-대동제-웹사이트">
        <InlineLinkText href="https://hallymfestival.com/">2023 한림대학교 대동제 웹사이트</InlineLinkText>
      </Styled.ExperienceCardTitle>

      <Styled.ExperienceCardExplainContainer>
        <Explain>2023 한림대학교 대동제 웹사이트 프론트 개발자 및 개발 리더</Explain>
        <Explain>Vue.js로 웹사이트 프론트엔드 개발을 진행함</Explain>
        <Explain>전반적으로 축제의 모든 정보를 제공하였으며, 실시간으로 부스 현황 가능하도록 개발해 실제 서비스함 </Explain>
        <Explain>지난 5월, 배포 후 학우분들의 피드백을 받아 3차례의 기능 업데이트를 진행함 (유지보수) </Explain>
        <Explain>총 7천명 재학생 대상 2.5만회 조회수 달성</Explain>
        <Explain>2023 한림대학교 축제준비위원회 홍보팀장과 협업 진행 리드 / 웹사이트 홍보 진행</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
      <ImageSlider images={IMAGES} />
    </Styled.ExperienceCard>
  );
};

export default HallymFestival;