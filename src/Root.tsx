//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/my-theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { MainTemplate } from 'components/templates/MainTemplate/index';
// Routes-setup
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
//views
import { Overview } from 'views/Overview';
export const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainTemplate>
          <Switch>
            <Route path="/">
              <Overview />
            </Route>
          </Switch>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};
