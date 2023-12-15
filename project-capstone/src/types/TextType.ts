export type TextType = {
  textLineThrough?: 'line-through';
  textTransform?: TransformType;
  textAlign?: AlignType;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh' | 'em';
  value?: number;
  dynamic?: number;
};

export type TransformType =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana';

export type AlignType =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent';
