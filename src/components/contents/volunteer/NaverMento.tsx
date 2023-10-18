import React from 'react';

import { Explain, Links } from '../../common';
import * as Styled from '../styled';

const LINKS = [
  {
    text: '소프트웨어야놀자 X 디지털새싹 1784 스쿨혁명 영상&인터뷰',
    href: 'https://www.instagram.com/reel/CqjdSrzor2n/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
  },
  {
    text: '1784 스쿨혁명 소프트웨어야, 놀자! 프로젝트 우리는 동경한입니다. GitHub Repository',
    href: 'https://github.com/osohyun0224/NaverConnect_SW_Project',
  },
];

const NaverMento = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교외 활동</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="네이버활동">[Naver Connect] 1784 스쿨혁명 대학생 멘토 SW봉사</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>2023.01.11 ~ 03.10 </Explain>
        <Explain>서울 용마초등학교 / 경기 의정부 민락중학교 </Explain>
        <Explain>대학생 멘토(동아리) 선생님이 전국 지역의 초등학생들에게 SW&AI 시대에 필요한 지식과 경험을 나누는 통학형 SW·AI 캠프 프로그램입니다.</Explain>
        <Explain>학생들이 네오씽카를 직접 조립하고, 엔트리를 이용해 네오씽카를 직접 코딩해 조종해보게 됩니다.</Explain>
        <Explain>프로젝트 팀장으로, 출석 웹사이트, 게임을 개발해서 직접 수업 때 사용하였습니다.</Explain>
        <Explain>대표 동아리로 선정되어 직접 활동 후기 인터뷰도 진행하였습니다.</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default NaverMento;