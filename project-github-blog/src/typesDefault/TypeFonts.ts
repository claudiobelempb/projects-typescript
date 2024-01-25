import { TYPE_COLOR_PROPS } from './TypeColor';

export type TypeFontSize =
  | 's5'
  | 's8'
  | 's10'
  | 's12'
  | 's14'
  | 'm16'
  | 'm20'
  | 'm24'
  | 'l32'
  | 'x48'
  | 'x64';

export type TypeFontDinamic =
  | 'd1'
  | 'd2'
  | 'd3'
  | 'd4'
  | 'd5'
  | 'd6'
  | 'd7'
  | 'd8'
  | 'd9'
  | 'd10';

export type TypeFontFamily = 'Roboto' | 'Baloo';

export type TypeFontStyle =
  | 'normal'
  | 'italic'
  | 'oblique'
  | 'initial'
  | 'inherit';

export type TypeFontLineHeight = '65%' | '130%' | '160%';

export type TypeFontWeigh =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'extraBold';

type TYPE_HEIGH_PROPS =
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | 'bold'
  | 'extraBold';

type TYPE_HEIGHT_PROPS = '65%' | '130%' | '160%';

type TYPE_FAMILY_PROPS = 'Roboto' | 'Baloo';

type TYPE_STYLE_PROPS = 'normal' | 'italic' | 'oblique' | 'initial' | 'inherit';

export type TYPE_FONT = {
  $color?: TYPE_COLOR_PROPS;
  $family?: TYPE_FAMILY_PROPS;
  $style?: TYPE_STYLE_PROPS;
  $height?: TYPE_HEIGHT_PROPS;
  $weigh?: TYPE_HEIGH_PROPS;
  $size?: number;
  $dinamic?: number;
};
