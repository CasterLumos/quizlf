/* eslint-disable react/react-in-jsx-scope */
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core/styles';
import Head from 'next/head';
import theme from '../theme/theme';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${theme.palette.primary.white};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;1,600;1,900&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyle />
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </StylesProvider>
    </>
  );
}
