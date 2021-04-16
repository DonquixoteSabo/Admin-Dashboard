//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/my-theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { MainTemplate } from 'components/templates/MainTemplate/index';
// Routes-setup
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'Routes';

export const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Routes />
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
