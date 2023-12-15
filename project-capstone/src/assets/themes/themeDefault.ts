export const ThemeDefault = {
  title: 'theme-default',
  variant: {
    blue400: 'rgb(27,85,211)',
    blue500: '#2b59da',
    green500: '#00B37E',
    green600: '#0086AD',
    green700: 'rgb(51,162,185)',
    green800: 'rgb(40,135,160)',
    green900: 'rgb(25,86,103)',
    red700: '#AA2834',
    red500: '#F75A68',
    gray100: '#E1E1E6',
    gray200: 'rgb(206,206,208)',
    gray300: '#7C7C8A',
    gray400: '#323238',
    gray500: '#29292E',
    gray600: '#202024',
    gray700: 'rgb(19,24,33)',
    gray800: 'rgb(19,24,33)',
    gray900: 'rgb(38,31,63)',
    orange500: 'rgb(251,155,0)',
    orange600: 'rgb(242,86,0)',
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  },
  padding: {
    ps10: '1rem',
    ps15: '1.5rem',
    ps16: '1.6rem',
    ps20: '2rem',
    ps25: '2.5rem',
    ps30: '3rem',
    ps35: '3.5rem',
    vw18: 'calc(1rem + 1vw)', // 18.14px
    vw22: 'calc(1rem + 1.5vw)', // 22.21px
    vw26: 'calc(1rem + 2vw)', // 26.28px
    vw30: 'calc(1rem + 2.5vw)', // 30.35px
    vw61: 'calc(1rem + 5.5vw)', // 61.26px
    vh28: 'calc(1rem + 3vh)', // 28.75px
    vh31: 'calc(1rem + 3.5vh)', // 31.875px
    vh35: 'calc(1rem + 4vh)', // 35px
    vh38: 'calc(1rem + 4.5vh)', // 38.125px
    vh95: 'calc(2rem + 12vh)' // 95px
  },
  pstatic: {
    ps10: '1rem',
    ps15: '1.5rem',
    ps16: '1.6rem',
    ps20: '2rem',
    ps25: '2.5rem',
    ps30: '3rem',
    ps35: '3.5rem'
  },
  pdinamic: {
    vw18: 'calc(1rem + 1vw)', // 18.14px
    vw22: 'calc(1rem + 1.5vw)', // 22.21px
    vw26: 'calc(1rem + 2vw)', // 26.28px
    vw30: 'calc(1rem + 2.5vw)', // 30.35px
    vw61: 'calc(1rem + 6vw)', // 61.42px
    vh28: 'calc(1rem + 3vh)', // 28.75px
    vh31: 'calc(1rem + 3.5vh)', // 31.875px
    vh35: 'calc(1rem + 4vh)', // 35px
    vh38: 'calc(1rem + 4.5vh)', // 38.125px
    vh95: 'calc(2rem + 12vh)' // 95px
  },
  media: {
    phone: '@media(min-width: 400px)',
    phoneWide: '@media(min-width: 480px)',
    tablet: '@media(min-width: 560px)',
    tabletSmall: '@media(min-width: 640px)',
    tabletWide: '@media(min-width: 1240px)',
    desktop: '@media(min-width: 1248px)',
    desktopWide: '@media(min-width: 1440px)'
  },
  fonts: {
    lineHeight: '160%',
    fontWeight: {
      bold: 700,
      regular: 400
    },
    fontFamily: {
      title: 'Open Sans Condensed',
      heading: 'Open Sans Condensed',
      text: 'Open Sans Condensed',
      code: 'Courier'
    },

    size: {
      fs10: '1rem',
      fs15: '1.5rem',
      fs16: '1.6rem',
      fs20: '2rem',
      fs25: '2.5rem',
      fs30: '3rem',
      fs35: '3.5rem',
      fs40: '4rem',
      fs45: '4.5rem',
      fd10: 'calc(1rem + 0.1vw)', // 10.967px
      fd16: 'calc(1rem + 0.2.5vw)', // 16px
      fd19: 'calc(1rem + 0.5vw)', // 19.1067px
      fd23: 'calc(1rem + 1vw)', // 23.66px
      fd30: 'calc(1rem + 1.5vw)', // 30.49px
      fd37: 'calc(1rem + 2vw)', // 37.32px
      fd54: 'calc(2rem + 2.5vw)', // 54.15px
      fd60: 'calc(2rem + 3vw)', // 60.98px
      fd77: 'calc(3rem + 3.5vw)', // 77.81px
      fd84: 'calc(3rem + 4vw)', // 84.64px
      fd91: 'calc(3rem + 4.5vw)' // 91.47px
    }
  }
};

/*COLOR*/
export type ThemeColor = keyof typeof ThemeDefault.variant;

/*FONT*/
export type ThemeFontSize = keyof typeof ThemeDefault.fonts.size;
export type ThemeFontFamily = keyof typeof ThemeDefault.fonts.fontFamily;
export type ThemeFontWeight = keyof typeof ThemeDefault.fonts.fontWeight;
export type ThemeFontLineHeight = keyof typeof ThemeDefault.fonts.lineHeight;

/*PADDING*/
export type ThemePaddingStatic = keyof typeof ThemeDefault.pstatic;
export type ThemePaddingDinamic = keyof typeof ThemeDefault.pdinamic;
export type ThemePadding = keyof typeof ThemeDefault.padding;
export type ThemeMedia = keyof typeof ThemeDefault.media;
