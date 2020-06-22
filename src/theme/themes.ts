import { DefaultTheme } from 'styled-components';
//import { DefaultTheme } from 'styled-components';

export const darkTheme: DefaultTheme = {
  borderRadius: '5px',
  transition: 'all 0.5s linear',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  colors: {
    main: 'hsla(0,0%,100%,.87)',
    secondary: '#999999',
    backgroundMain: '#1f1f1f',
    backgroundSecondary: '#282828',
    highlight: '#404040',
  },
};

export const lightTheme: DefaultTheme = {
  borderRadius: '5px',
  transition: 'all 0.5s linear',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  colors: {
    main: '#202020',
    secondary: '#999999',
    backgroundMain: '#fff',
    backgroundSecondary: '#ededed',
    highlight: 'hsla(0,0%,100%,.87)',
  },
};
