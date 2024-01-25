export const COLOR = {
  gray100: '#E1E1E6',
  gray300: '#C4C4CC',
  gray400: '#8D8D99',
  gray500: '#7C7C8A',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',
  green100: '#00B37E',
  green500: '#00875F',
  green700: '#015F43',
  yellow700: '#C47F17',
  yellow500: '#DBAC2C',
  yellow100: '#F1E9C9',
  purple700: '#4B2995',
  purple500: '#8047F8',
  purple100: '#EBE5F9',
  red700: '#AA2834',
  red500: '#F75A68',
  red100: '#F03847',
  background: '#121214',
  shape100: '#323238',
  shape500: '#29292E',
  shape700: '#202024',
  card: '#F3F2F2',
  input: '#EDEDED',
  placeholder: '#7C7C8A',
  button: '#E6E5E5',
  hover: '#D7D5D5',
  label: '#8D8686',
  text: '#C4C4CC',
  subtitle: '#403937',
  title: '#E1E1E6',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent'
} as const;

export type COLOR_PROPS = keyof typeof COLOR;

export type BACKGROUND_TYPE_PROPS = {
  $background?: COLOR_PROPS;
  $hover?: COLOR_PROPS;
  $text?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $buttom?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $input?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $placeholder?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $icon?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $active?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $seleted?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $success?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $warning?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $error?: {
    $background?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
};

export type COLOR_TYPE_PROPS = {
  $color?: COLOR_PROPS;
  $hover?: COLOR_PROPS;
  $text?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $buttom?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $input?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $placeholder?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $icon?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $active?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $seleted?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $success?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $warning?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $error?: {
    $colors?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
};

export type TYPE_COLOR_PROPS = keyof typeof COLOR;

export type TYPE_BACKGROUND = {
  $background?: TYPE_COLOR_PROPS;
  $hover?: TYPE_COLOR_PROPS;
};

export type TYPE_COLOR = {
  $color?: TYPE_COLOR_PROPS;
  $hover?: TYPE_COLOR_PROPS;
};
