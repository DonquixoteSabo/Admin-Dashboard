import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
      black: string;
      gray1: string;
      gray2: string;
      gray3: string;
      gray4: string;
      blue: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
      xxl: string;
    };
  }
}
