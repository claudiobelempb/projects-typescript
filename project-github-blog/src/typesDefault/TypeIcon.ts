import { TYPE_COLOR } from './TypeColor';

type IconWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

type TYPE_ICON_PROPS =
  | 'ArrowSquareOut'
  | 'GithubLogo'
  | 'Buildings'
  | 'Users'
  | 'CalendarCheck'
  | 'ChatCircle'
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
  $color?: TYPE_COLOR;
  $size?: number;
  $type?: TYPE_ICON_PROPS;
};
