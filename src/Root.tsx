//styled-components setup
import { ThemeProvider } from 'styled-components';
import { myTheme } from 'assets/styles/my-theme';

export const Root = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <h1>It works pretty good</h1>
    </ThemeProvider>
  );
};
