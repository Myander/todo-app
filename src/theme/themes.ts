import { DefaultTheme } from 'styled-components';
//import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  borderRadius: '5px',
  transition: 'all 0.5s linear',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  navSize: '60px',
  colors: {
    main: 'hsla(0,0%,100%,.87)',
    secondary: '#cccccc',
    backgroundMain: '#1f1f1f',
    backgroundSecondary: '#282828',
    highlight: '#404040',
    btn_background: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.4)',
    menuShadow: '-2px 2px 5px 3px rgba(0, 0, 0, 0.35)',
    editorBackground: '#171717',
  },
};

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',
  transition: 'all 0.5s linear',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  navSize: '60px',
  colors: {
    main: '#202020',
    secondary: '#999999',
    backgroundMain: '#fff',
    backgroundSecondary: '#ededed',
    highlight: 'rgba(50, 50, 50, 0.2)',
    btn_background: 'rgba(0, 0, 0, 0.2)',
    disabled: 'rgba(0, 0, 0, 0.4)',
    menuShadow: '0px 3px 5px #888888',
    editorBackground: '#d6d6d6',
  },
};
