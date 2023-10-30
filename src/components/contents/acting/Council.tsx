import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../styled';


const Council = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교내 활동</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="단과대학-학생회">한림대학교 정보과학대학 학생회</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2021.03 ~ 2022.12 (2년 간)</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>😊 2021학년도 정보과학대학 학생회 WUSM 사무부원 (2021.03 - 2021.12)</Explain>
        <Explain>🔵 2022학년도 정보과학대학 학생회 A:BLE 홍보부장 (2022.01 - 2022.12)</Explain>
        <Explain>
          <InlineLinkText href="https://osohyun.notion.site/ed97bbcde3cb44028ef608def50ca4cd">
            2년 간 단과대학 학생회 활동했던 기록을 담은 Notion
          </InlineLinkText>
        </Explain>
        <Explain>👥 학우분들의 행복한 대학생활이라는 목표를 위해 학생회 부원들과 함께 일하는 경험을 할 수 있었습니다.</Explain>
        <Explain>
          🚩 학우분들을 대표하여 이끌어가며, 학교와 학우들을 위해 봉사하는 리더십 역량을 갖추었습니다.
        </Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default Council;
