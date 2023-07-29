import React from 'react';
import Head from 'next/head';
import Main from '../components/main';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Oh Sohyun</title>
        <meta name="description" content="Oh Sohyun's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Main />
      </main>
    </div>
  );
}