import { ColorType } from './ColorType';

export type BorderType = {
  unit?: 'px' | '%' | 'rem' | 'w' | 'h';
  type?:
    | 'border'
    | 'radius'
    | 'radius-top'
    | 'radius-bottom'
    | 'top'
    | 'right'
    | 'left'
    | 'bottom';
  width?: number;
  style?: 'solid' | 'dashed ';
  color?: ColorType;
};

export type TypeBorderProps = {
  border?: BorderType;
  borderTop?: BorderType;
  borderRight?: BorderType;
  borderLeft?: BorderType;
  borderBottom?: BorderType;
};

export type TypeBorderRadiusProps = {
  borderRadius?: BorderType;
  borderTopRightRadius?: BorderType;
  borderTopLeftRadius?: BorderType;
  borderBottomRightRadius?: BorderType;
  borderBottomLeftRadius?: BorderType;
};
