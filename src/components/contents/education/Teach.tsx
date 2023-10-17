import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../styled';

const TeachCourse = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="교직이수">중등 정보컴퓨터 교직이수</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>2022.02 - 2024.08</Explain>
        <Explain>
          <InlineLinkText href="https://www.notion.so/osohyun/621ebf7c83964fc5a71d38a1fae06eae?pvs=4">
            교직을 공부하면서 활동한 내용을 정리
          </InlineLinkText>
        </Explain>
        <Explain>프로그래밍이 처음인 학생들에게 개발 지식을 이해하기 쉽도록 설명하는 방법을 연구</Explain>
        <Explain>나만의 언어로 바꾸어 전달하는 수업 시연을 꾸준히 연습</Explain>
        <Explain>이 과정으로 개발자로서 지식을 설명하고, 발표하는 능력이 향상됨</Explain>
        <Explain>협업 프로젝트에서 팀원들과 원활한 의사소통에 큰 기여함</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default TeachCourse;
