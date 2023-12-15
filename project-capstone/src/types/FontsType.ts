export const TYPE_FONTS = {
  fonts: {
    lineHeight: '160%',
    fontWeight: {
      bold: 700,
      regular: 400
    },
    fontFamily: {
      heading: 'Oswald',
      text: 'Plus Jakarta Sans',
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

export type FontsType =
  | 'fs10'
  | 'fs15'
  | 'fs16'
  | 'fs20'
  | 'fs25'
  | 'fs30'
  | 'fs35'
  | 'fs40'
  | 'fs45'
  | 'fd23'
  | 'fd30'
  | 'fd37'
  | 'fd54'
  | 'fd60'
  | 'fd77'
  | 'fd84'
  | 'fd91';

export type TypeFontsdefault = typeof TYPE_FONTS;
