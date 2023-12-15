export type HeightValue = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: number;
};

export type HeightType = {
  height?: HeightValue;
  maxHeight?: HeightValue;
  minHeight?: HeightValue;
};
