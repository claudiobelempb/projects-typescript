export type GridValue = {
  minMax?: number;
  start?: number;
  span?: 'span' | '';
  repeat?: 'rows' | 'columns';
  end?: number;
  repeatColumns?: number;
  repeatRows?: number;
  type?:
    | 'grid-colum'
    | 'grid-row'
    | 'grid-template-columns'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
};

export type GridType = {
  gridTemplateColumns?: GridValue;
  gridTemplateColumnsStatic?: GridValue;
  gridTemplateRows?: GridValue;
  gridColumn?: GridValue;
  gridRow?: GridValue;
  overall?: string;
};
