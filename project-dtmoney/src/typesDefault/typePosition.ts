type TYPE_PROSITION_PROPS =
  | 'absolute'
  | 'relative'
  | 'static'
  | 'fixed'
  | 'sticky';

export type TYPE_POSITION = {
  $position?: TYPE_PROSITION_PROPS;
  $top?: number | 'initial';
  $left?: number | 'initial';
  $right?: number | 'initial';
  $bottom?: number | 'initial';
  $zIndex?: number | 'initial';
};
