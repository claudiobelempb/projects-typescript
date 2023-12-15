export const TYPE_COLOR = {
  variant: {
    blue500: '#2b59da',
    green500: '#00B37E',
    green600: '#0086AD',
    green700: '#00875F',
    red700: '#AA2834',
    red500: '#F75A68',
    gray100: '#E1E1E6',
    gray200: '#C4C4CC',
    gray300: '#7C7C8A',
    gray400: '#323238',
    gray500: '#29292E',
    gray600: '#202024',
    gray700: '#121214',
    gray800: '#121214',
    gray900: '#121214',
    white: '#FFFFFF',
    black: '#000000',
    orange500: 'rgb(251,155,0)',
    transparent: 'transparent'
  }
} as const;

export type ColorType =
  | 'blue500'
  | 'green500'
  | 'green600'
  | 'green700'
  | 'red700'
  | 'red500'
  | 'gray100'
  | 'gray200'
  | 'gray300'
  | 'gray400'
  | 'gray500'
  | 'gray600'
  | 'gray700'
  | 'gray800'
  | 'gray900'
  | 'orange500'
  | 'white'
  | 'black'
  | 'transparent';

// export type TypeColorDefault = typeof TYPE_COLOR;
