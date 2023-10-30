import { useMediaQuery } from '@material-ui/core';
import React from 'react';

import { FadeInContent } from '#/components/gsap';

import TableOfContents from '../TableOfContents';
import { ExperienceTitle } from './common';
import * as Content from './contents';
import * as Styled from './styled';

const CONTENT_DELAY_TIME = 0.3;

const ExperienceContainer = () => {
  const isOver1100px = useMediaQuery('(min-width:1100px)');

  return (
    <Styled.Container id="experience-container">
      {isOver1100px && (
        <Styled.TableOfContents>
          <TableOfContents />
        </Styled.TableOfContents>
      )}
      <Styled.Contents>
        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Education" />
          </FadeInContent>

          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Univercity />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.NextStepCleanCodeWithJavaScript />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.WooahanTechCource />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Prize" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Hayanmind />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Main Projects" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FindDifferentColor />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.MyTechBlogAsProjects />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Portfolio />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.ReactSeasonComponent />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Rehab />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.BirthEvent />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Share" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Velog />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Activies" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Cou />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FrontEndJobPrepare />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.ModernJavaScriptDeepDive />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.TypeScriptOOP />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.Kubernetes />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Volunteer" />
          </FadeInContent>

          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.MDNWebDocsClass />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.GoogleWebFundamentals />
          </FadeInContent>
        </Styled.ExperienceContainer>

        <Styled.ExperienceContainer>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <ExperienceTitle title="Hackaton" />
          </FadeInContent>
          <FadeInContent delay={CONTENT_DELAY_TIME}>
            <Content.FastCampus />
          </FadeInContent>
        </Styled.ExperienceContainer>
      </Styled.Contents>
    </Styled.Container>
  );
};

export default ExperienceContainer;