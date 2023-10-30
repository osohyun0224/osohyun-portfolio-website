import React from 'react';

import { Explain, Links } from '../../common';
import * as Styled from '../styled';

const LINKS = [
  {
    text: '2023 한림대학교 고교 전공 CLASS GITHUB Repositiory',
    href: 'https://github.com/osohyun0224/2023-Hallym-Computer-Class',
  },
];

const MajorClass = () => {
  return (
    <Styled.ExperienceCard>
    <Styled.ExperienceCardTitleType>교내 활동</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="전공클래스">한림대학교 전공CLASS 소프트웨어학부 LEAD </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.10.26 ~ 11.16</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>기린고등학교(인제) / 신철원고등학교(철원) / 양구여자고등학교(양구) </Explain>
        <Explain>2023 한림대학교 입학처에서 주관하는 고등학교 전공 체험 / 입학 홍보 소프트웨어학부 LEAD 멘토</Explain>
        <Explain>한림대학교 소프트웨어학부 소개 및 홍보와 재학생(본인)의 학교 생활을 발표하며 입학 홍보 진행</Explain>
        <Explain>Unity로 룰렛 게임 제작 수업 진행하며 직접 개발해 볼 수 있도록 수업 진행</Explain>
      </Styled.ExperienceCardExplainContainer>
      <Links links={LINKS} />
    </Styled.ExperienceCard>
  );
};

export default MajorClass;