import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from "../components/Footer";
import IntroContainer from '../components/IntroContainer';
import ExperienceContainer from '#/components/ExperienceContainer';
import ScrollTopButton from '#/components/ScrollTopButton';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;


export default function Home() {
  return (
    <div>
      <Head>
      <title>오소현 포트폴리오</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="최고의 프론트엔드 개발자를 꿈꾸는 오소현의 포트폴리오입니다." />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_KEY} />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1 maximum-scale=1, user-scalable=no" />
      </Head>
      <main>
      <Section>
      <IntroContainer />
      <ExperienceContainer />
          {isOver1100px && <ScrollTopButton />}
      </Section>
      </main>
    </div>
  );
}