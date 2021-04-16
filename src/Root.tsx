//styled-components setup
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'assets/styles/my-theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { MainTemplate } from 'components/templates/MainTemplate/index';

export const Root = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <GlobalStyle />
      <MainTemplate />
    </ThemeProvider>
  );
};
