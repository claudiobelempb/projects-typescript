export type TypeTextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana';

export type TypeTetxAlign =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent';

export type TYPE_TRANSFORM_PROPS =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'full-width'
  | 'full-size-kana';

export type TYPE_ALING_PROPS =
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent';

export type TYPE_TEXT = {
  $textLineThrough?: 'line-through';
  $textTransform?: TYPE_TRANSFORM_PROPS;
  $textAlign?: TYPE_ALING_PROPS;
  $ellipsis?: boolean;
  $lines?: number;
};
