import { TYPE_COLOR_PROPS } from './ColorType';

export type TypeBorderStyle =
  | 'dotted'
  | 'dashed '
  | 'solid '
  | 'double '
  | 'groove '
  | 'ridge '
  | 'inset '
  | 'outset '
  | 'none '
  | 'hidden ';

export type TYPE_STYLE_PROPS =
  | 'dotted'
  | 'dashed '
  | 'solid '
  | 'double '
  | 'groove '
  | 'ridge '
  | 'inset '
  | 'outset '
  | 'none '
  | 'hidden ';
export type TYPE_BORDER = {
  $border?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR_PROPS;
  };
  $borderTop?: {
    $borderStyle?: TypeBorderStyle;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR_PROPS;
  };
  $borderLeft?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR_PROPS;
  };
  $borderRight?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR_PROPS;
  };
  $borderBottom?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR_PROPS;
  };
  $radius?: {
    $borderWidth?: number;
  };
  $radiusTopLeft?: {
    $width?: number;
  };
  $radiusTopRight?: {
    $width?: number;
  };
  $radiusBottomLeft?: {
    $width?: number;
  };
  $radiusBottomRight?: {
    $width?: number;
  };
};
