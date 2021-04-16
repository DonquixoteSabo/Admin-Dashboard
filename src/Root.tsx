//styled-components setup
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'assets/styles/my-theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';

export const Root = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <h1>It works pretty good</h1>
    </ThemeProvider>
  );
};
