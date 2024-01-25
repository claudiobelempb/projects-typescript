import { TYPE_COLOR } from './TypeColor';

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
    $borderColor?: TYPE_COLOR;
  };
  $borderTop?: {
    $borderStyle?: TypeBorderStyle;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR;
  };
  $borderLeft?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR;
  };
  $borderRight?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR;
  };
  $borderBottom?: {
    $borderStyle?: TYPE_STYLE_PROPS;
    $borderWidth?: number;
    $borderColor?: TYPE_COLOR;
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
