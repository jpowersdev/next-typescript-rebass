import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import theme from 'src/theme';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={Styles} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

const Styles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
      Helvetica, sans-serif;
  }
`;

export default App;
