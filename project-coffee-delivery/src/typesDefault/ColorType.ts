export const COLOR = {
  green100: '#00B37E',
  green500: '#00875F',
  green700: '#015F43',
  yellow700: '#C47F17',
  yellow500: '#DBAC2C',
  yellow100: '#F1E9C9',
  purple700: '#4B2995',
  purple500: '#8047F8',
  purple100: '#EBE5F9',
  red700: '#7A1921',
  red500: '#F03847',
  red100: '#F03847',
  background: '#FAFAFA',
  card: '#F3F2F2',
  input: '#EDEDED',
  button: '#E6E5E5',
  hover: '#D7D5D5',
  label: '#8D8686',
  text: '#574F4D',
  subtitle: '#403937',
  title: '#272221',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent'
} as const;

export type COLOR_PROPS = keyof typeof COLOR;
