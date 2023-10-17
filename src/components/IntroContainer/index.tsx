import React from 'react';

import { UNDER_LINE_COLOR } from '../../colors'
import { FadeInBodyText, FadeInContent, FadeInHeaderText, Underline } from '../gsap';
import BluePoint from '../BluePoint';

import * as Styled from './styled';

const IntroContainer = () => {
  return (
    <Styled.Container>
      <FadeInContent delay={1}>
        <Styled.Sidebar>
          <Styled.LinkContainer>
            <Styled.Link href="https://github.com/osohyun0224" target="_blank">
              GitHub<BluePoint>.</BluePoint>
            </Styled.Link>
            <Styled.Link href="https://velog.io/@osohyun0224/" target="_blank">
              Velog<BluePoint>.</BluePoint>
            </Styled.Link>
          </Styled.LinkContainer>

          <Styled.BottomContainer>
            <Styled.Email href="mailto:jung660317@naver.com">osohyun0224@naver.com</Styled.Email>
          </Styled.BottomContainer>
        </Styled.Sidebar>
      </FadeInContent>
      <Styled.Main>
        <FadeInHeaderText delay={1.5}>
          <Styled.SubTitle>타인과의 협업을 좋아하는 개발자</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInHeaderText delay={1.9}>
          <Styled.Title>
            <Underline color={UNDER_LINE_COLOR} delay={2.4}>
              오소현
            </Underline>
          </Styled.Title>
          <Styled.SubTitle>입니다.</Styled.SubTitle>
        </FadeInHeaderText>
        <FadeInBodyText delay={2.6}>
          <Styled.BodyTextContainer>
            <Styled.BodyText>웹 프론트엔드 개발자를 준비하고 있는 대학생입니다.</Styled.BodyText>
            <Styled.BodyText>다양한 프로젝트에 도전하며, 제 개발 능력을 계속해서 키워나가고 있습니다.</Styled.BodyText>
            <Styled.BodyText>학습한 지식에 대해 공유하며 다함께 성장하는 개발 문화를 지향합니다.</Styled.BodyText>
          </Styled.BodyTextContainer>
        </FadeInBodyText>
        <div>
          <Styled.ImageBox>
            <img src="/hyeonsu.jpeg" alt="sohyun-background" draggable={false} />
          </Styled.ImageBox>
        </div>

        <FadeInContent delay={3.5}>
          <Styled.DownAnimatedArrow fontSize="large" />
        </FadeInContent>
      </Styled.Main>
    </Styled.Container>
  );
};

export default IntroContainer;
