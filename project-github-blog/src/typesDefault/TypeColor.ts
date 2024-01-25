import { ThemeDefault } from '@themes/ThemeDefault';

export type TYPE_COLOR = keyof typeof ThemeDefault.colors;

export type TYPE_BACKGROUND_PROPS = {
  $color: TYPE_COLOR;
  $hover: TYPE_COLOR;
};

export type TYPE_COLOR_PROPS = {
  $color: TYPE_COLOR;
  $hover: TYPE_COLOR;
};
