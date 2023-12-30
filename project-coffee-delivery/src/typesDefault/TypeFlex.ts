export type FlexType = {
  direction?: FlexContainerValue;
  alignSelf?: FlexContainerValue;
  justifyContent?: FlexContainerValue;
  alingItems?: FlexContainerValue;
  alingContent?: FlexContainerValue;
  order: number;
  grow: number;
  flex?: number;
  gap?: number;
  rowGap?: number;
  columnGap?: number;
  basis: number;
  wrap: FlexValue;
  row: FlexValue;
  column: FlexValue;
};

export type FlexContainerValue =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'cover'
  | 'contain'
  | 'repeat'
  | 'no-repeat';

export type FlexValue =
  | 'row'
  | 'row-reverse'
  | 'column'
  | 'column-reverse'
  | 'nowrap'
  | 'wrap'
  | 'wrap-reverse'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evenly'
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'stretch'
  | 'baseline'
  | 'auto'
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'cover'
  | 'contain'
  | 'repeat'
  | 'no-repeat';

export type FlexObjValue =
  | 'INHERINT'
  | 'INITIAL'
  | 'REVERT'
  | 'UNSET'
  | 'STRETCH'
  | 'BASELINE'
  | 'AUTO'
  | 'FLEX_START'
  | 'FLEX_END'
  | 'CENTER'
  | 'SPACE_BETWEEN'
  | 'SPACE_AROUND'
  | 'SPACE_EVENLY'
  | 'START'
  | 'END'
  | 'LEFT'
  | 'RIGHT'
  | 'ROW'
  | 'ROW_REVERSE'
  | 'COLUMN'
  | 'COLUMN_REVERSE'
  | 'NOW_WRAP'
  | 'WRAP'
  | 'COVER'
  | 'CONTAIN'
  | 'REPEAT'
  | 'NO_REPEAT'
  | 'WRAP_REVERSE';