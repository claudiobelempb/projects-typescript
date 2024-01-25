export type TYPE_GRID_PROPS = {
  $minMax?: number;
  $start?: number;
  $span?: 'span' | '';
  $repeat?: 'rows' | 'columns';
  $end?: number;
  $repeatColumns?: number;
  $repeatRows?: number;
  $type?:
    | 'grid-colum'
    | 'grid-row'
    | 'grid-template-columns'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
};

export type TYPE_GRYD = {
  $grid?: 'grid';
  $gridTemplateColumns?: TYPE_GRID_PROPS;
  $gridTemplateColumnsStatic?: TYPE_GRID_PROPS;
  $gridTemplateRows?: TYPE_GRID_PROPS;
  $gridColumn?: TYPE_GRID_PROPS;
  $gridRow?: TYPE_GRID_PROPS;
  $overall?: string;
};
