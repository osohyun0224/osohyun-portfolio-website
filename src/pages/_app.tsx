import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import type { AppProps } from 'next/app';
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../styles/globalStyles';
import { theme } from '../styles/theme';
import { StylesProvider } from '@material-ui/core/styles';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
  smoothscroll.polyfill();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
    </StylesProvider>
  );
}

export default MyApp;
