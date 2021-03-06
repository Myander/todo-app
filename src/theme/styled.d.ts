import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    transition: string;
    toggleBorder: string;
    gradient: string;
    navSize: string;
    colors: {
      main: string;
      secondary: string;
      backgroundMain: string;
      backgroundSecondary: string;
      highlight: string;
      btn_background: string;
      disabled: string;
      menuShadow: string;
      editorBackground: string;
    };
  }
}
