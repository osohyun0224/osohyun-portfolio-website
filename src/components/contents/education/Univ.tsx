import React from 'react';

import { Explain } from '../../common';
import * as Styled from '../styled';

const ReactContribute = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>대학교</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="한림대학교">한림대학교</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>빅데이터학과 전공</Explain>
        <Explain>2020.03 - 2024.08 졸업예정</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default ReactContribute;
