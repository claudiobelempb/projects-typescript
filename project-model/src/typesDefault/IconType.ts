import { IconWeight } from '@phosphor-icons/react';
import { COLOR_PROPS } from './ColorType';
type TYPE_ICON_PROPS =
  | 'ArrowCircleUp'
  | 'ArrowCircleDown'
  | 'CurrencyDollar'
  | 'X'
  | 'TagSimple'
  | 'CalendarBlank'
  | 'CaretRight'
  | 'CaretLeft'
  | 'MagnifyingGlass';

export type TYPE_ICON = {
  $weight?: IconWeight;
  $colors?: {
    $color?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };
  $size?: number;
  $type?: TYPE_ICON_PROPS;
};
