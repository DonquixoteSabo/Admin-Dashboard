import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: string;
      dark: string;
      gray: string;
      blue: string;
    };
    fontSize: {
      xs: string;
      s: string;
      m: string;
      l: string;
      xl: string;
    };
  }
}
