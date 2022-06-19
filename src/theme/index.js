import {createBox, createText, createTheme} from '@shopify/restyle';

const palette = {
  purpleLight: '#8C6FF7',
  purplePrimary: '#5A31F4',
  purpleDark: '#3F22AB',

  greenLight: '#56DCBA',
  greenPrimary: '#0ECD9D',
  greenDark: '#0A906E',

  black: '#0B0B0B',
  white: '#F0F2F3',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
    primary: '#3C67AF',
    secondary: '#007AFF',
    green: '#7DD25A',
    danger: '#FF0058',
    text: 'rgba(12,13,52,0.7)',
    button: '#0C0D34',
    white: 'white',
    grey: '#999999',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      color: 'white',
      fontFamily: 'Roboto-Bold',
      textAlign: 'center',
    },
    title1: {
      fontSize: 28,
      fontFamily: 'Roboto-Black',
      color: 'secondary',
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      fontFamily: 'Roboto-Black',
      color: 'secondary',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      fontFamily: 'Roboto-Regular',
      color: 'text',
    },
    button: {
      fontSize: 15,
      fontFamily: 'Roboto-Medium',
      color: 'text',
    },
  },
  breakpoints: {},
});

export const Box = createBox();
export const Text = createText();
export default theme;
