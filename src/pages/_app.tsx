import type { AppProps } from 'next/app';
import { darkTheme } from '@themes/index';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '@styles/index';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
