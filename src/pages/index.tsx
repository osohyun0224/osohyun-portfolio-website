import React from 'react';
import Head from 'next/head';
import IntroContainer from '../components/IntroContainer';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
`;


export default function Home() {
  return (
    <div>
      <Head>
        <title>Oh Sohyun</title>
        <meta name="description" content="Oh Sohyun's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Section>
      <IntroContainer />
      </Section>
      </main>
    </div>
  );
}