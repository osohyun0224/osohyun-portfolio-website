import React from 'react';

import { Explain } from '../../common';
import * as Styled from '../styled';

const EduOutreach = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>봉사 활동</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="교육봉사">한림청소년자립지원관 교육봉사 진행</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>2022.03.24 ~ 2022.12.01</Explain>
        <Explain>약 1년동안 주 1회 고등학교 통합과학 교과학습지도 교육봉사를 진행하였습니다.</Explain>
        <Explain>고등학교 1학년 학생의 통합과학 과목 지도를 해오며 처음 5등급에서 2등급으로 성적 향상을 이루어냈습니다.</Explain>
        <Explain>봉사 기간동안 학생에게 최적화된 공부방법을 찾아주며 제 자신도 학업에 대한 실패의 경험을 극복하게 되었습니다. </Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default EduOutreach;
