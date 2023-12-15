export type FlexTypeValue =
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'now-rap'
  | 'wrap'
  | 'cover'
  | 'contain'
  | 'repeat'
  | 'no-repeat'
  | 'wrap-reverse';

export type FlexType = {
  flex?: number;
  gap?: {
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
    row?: number;
    column?: number;
  };
  direction?: FlexTypeValue;
  self?: FlexTypeValue;
  justify?: FlexTypeValue;
  align?: FlexTypeValue;
  basis?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };
  grow?: number;
  wrap?: 'wrap' | 'nowrap';
};
