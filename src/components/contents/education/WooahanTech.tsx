import React from 'react';

import { Explain } from '../../common';
import * as Styled from '../styled';

const Wooteco = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="우아한테크코스-6기">우아한테크코스 6기 프리코스</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>2023.10.19 - 2023.11.16 진행 중</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default Wooteco;
