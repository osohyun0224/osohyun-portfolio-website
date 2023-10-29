import React from 'react';

import { Explain, InlineLinkText, SecondIndentExplain } from '../../common';
import * as Styled from '../styled';

const Wooteco = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="우아한테크코스-6기">우아한테크코스 6기 프리코스</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardPeriod>2023.10.19 - 2023.11.16 진행 중</Styled.ExperienceCardPeriod>
      <Styled.ExperienceCardExplainContainer>
        <Explain>
          <InlineLinkText href="https://www.woowacourse.io/">우아한형제들(배달의민족)</InlineLinkText>에서 주최
        </Explain>

        <Explain>1주차 숫자야구 미션 진행 (2023/10/19 - 2023/10/25)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/woowacourse-precourse/javascript-baseball-6/pull/456">1주차 미션 PR</InlineLinkText>
        </SecondIndentExplain>

        <Explain>2주차 자동차 경주 미션 진행 중 (2023/10/26 - 2023/11/01)</Explain>
        <SecondIndentExplain>
          <InlineLinkText href="https://github.com/osohyun0224/javascript-racingcar-6/tree/osohyun0224">2주차 미션 진행 Repo</InlineLinkText>
        </SecondIndentExplain>

        <SecondIndentExplain>
          <InlineLinkText href="https://velog.io/@osohyun0224/%EC%9A%B0%EC%95%84%ED%95%9C%ED%85%8C%ED%81%AC%EC%BD%94%EC%8A%A4-%ED%94%84%EB%A6%AC%EC%BD%94%EC%8A%A4-6%EA%B8%B0-1%EC%A3%BC%EC%B0%A8-%ED%9A%8C%EA%B3%A0">
            1주차 미션 진행 중 느낀 점, 배운 점을 기록한 회고 글 작성
          </InlineLinkText>
        </SecondIndentExplain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default Wooteco;
