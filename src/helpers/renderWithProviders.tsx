import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
//styled-components setup
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/my-theme';
import { ReactElement } from 'react';

export const renderWithProviders = (
  children: ReactElement | ReactElement[]
) => {
  return render(
    <Router>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Router>
  );
};
