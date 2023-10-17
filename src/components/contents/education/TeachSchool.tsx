import React from 'react';

import { Explain, InlineLinkText } from '../../common';
import * as Styled from '../styled';

const TeachSchoolCourse = () => {
  return (
    <Styled.ExperienceCard>
      <Styled.ExperienceCardTitleType>교육</Styled.ExperienceCardTitleType>
      <Styled.ExperienceCardTitle id="교생실습">정보 교과 교생실습</Styled.ExperienceCardTitle>
      <Styled.ExperienceCardExplainContainer>
        <Explain>2022.05.01 - 2020.05.26</Explain>
        <Explain>춘천 한샘고등학교 소프트웨어학과 1,2,3학년 교생</Explain>
        <Explain>1학년 프로그래밍(알고리즘, C언어) 교과목 전담 수업 진행</Explain>
        <Explain>3학년 웹프로그래밍(Javascript 문법) 교과목 전담 수업 진행</Explain>
        <Explain>
          <InlineLinkText href="https://github.com/osohyun0224/React_Firebase_StudyNote">
            수업에 사용하기 위해 "정보 수업 복습 웹사이트"를 직접 개발 후 실제 수업에서 사용
          </InlineLinkText>
        </Explain>
        <Explain>
          <InlineLinkText href="https://github.com/osohyun0224/2023_Computer_Teaching_Practice">
            교생 실습을 진행하며 필요한 모든 자료와 실습하며 배우고 느낀 점 정리
          </InlineLinkText>
        </Explain>
        <Explain>
          <InlineLinkText href="https://www.youtube.com/watch?v=-eLRp2sv2qk">
            교생 실습 후기 영상 제작
          </InlineLinkText>
        </Explain>
        <Explain>🏆 2023학년도 한림대학교 우수 교생 실습 켈러상 수상</Explain>
      </Styled.ExperienceCardExplainContainer>
    </Styled.ExperienceCard>
  );
};

export default TeachSchoolCourse;
