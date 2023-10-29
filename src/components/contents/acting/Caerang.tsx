import React from 'react';

import { Explain, InlineLinkText, SecondIndentExplain } from '../../common';
import * as Styled from '../styled';

const Caerang = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교내 활동</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="학술-씨애랑">
        한림대학교 소프트웨어학부 학술동아리 C:애랑
      </Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2021.03.26 ~ 현재</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>
          📱 Android를 주로 공부하는 Latte 팀(2021.03 - 2022.12)
        </Explain>
        <Explain>
          🖥️ Web을 주로 공부하는 #Tag 팀 (2023.03 ~ 현재)
        </Explain>
        <Explain>
          동아리에서 App을 공부했던 프로젝트들 📱 - Kotlin 학습
        </Explain>
        <SecondIndentExplain>
          2021 사용자의 목표 달성을 도와주는 앱 "Goal Game"
        </SecondIndentExplain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/osohyun0224/2022SWDP_LATTE">2022 간단한 터치 게임 앱 "Touch Game"</InlineLinkText>
        </SecondIndentExplain>
        <Explain>
          부원들을 위해 협업을 위한 깃허브 사용법 강의 제작 
        </Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/osohyun0224/Caerang_git_section">깃허브 강의 사용법 깃허브 저장소</InlineLinkText>
        </SecondIndentExplain>
        <SecondIndentExplain>
          <InlineLinkText href="https://www.youtube.com/watch?v=b02lcLQ9qUw&feature=youtu.be">깃허브 강의 사용법 유튜브 링크</InlineLinkText>
        </SecondIndentExplain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default Caerang;
