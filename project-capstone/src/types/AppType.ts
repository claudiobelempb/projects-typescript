import {
  ThemeColor,
  ThemeFontFamily,
  ThemeFontLineHeight,
  ThemeFontSize,
  ThemeFontWeight,
  ThemePadding
} from 'assets/themes/themeDefault';
import { BorderType } from './BorderType';
import { DisplayType } from './DisplayType';
import { FlexTypeValue } from './FlexType';
import { GridType, GridValue } from './GridType';
import { MarginType } from './MarginType';

import { BoxShadonwType, UtilsType } from './UtilsType';

export type AppType = {
  target?: '_blank' | '_self';
  appposition?: 'relative' | 'absolute' | 'fixed';
  href?: string;
  title?: string;
  subTitle?: string;
  description?: string;
  textColor?: ThemeColor;
  textcolor?: ThemeColor;
  backgroundColor?: ThemeColor;
  colorstring?: string;
  backgroundstring?: string;
  background?: ThemeColor;
  borderColor?: ThemeColor;
  isGreen?: boolean;
  isRed?: boolean;
  className?: string;

  src?: string;
  alt?: string;
  label?: string;
  url?: string;
  size?: string;
  small?: boolean;
  children?: React.ReactNode;
  btntype?: 'inverted' | 'default' | 'google' | 'facebook';
  // onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  // onClick?: () => void;

  as?:
    | 'fieldset'
    | 'header'
    | 'main'
    | 'footer'
    | 'section'
    | 'article'
    | 'aside'
    | 'nav'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'span'
    | 'small'
    | 'form'
    | 'ul'
    | 'li'
    | 'a'
    | 'img'
    | 'figure'
    | 'label'
    | 'select'
    | 'textarea'
    | 'strong';

  isIcons?: boolean;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  isiconright?: boolean;
  isVisibility?: boolean;
  isActive?: boolean;
  isBorder?: boolean;
  isOverflow?: boolean;
  isOpenNav?: boolean;
  isError?: boolean;
  isCheck?: boolean;
  isHover?: boolean;
  isAnimationLabel?: boolean;
  isanimation?: boolean;
  shrink?: boolean;

  /*FONT  */
  text?: ThemeFontSize;
  font?: ThemeFontSize;
  fontSize?: ThemeFontSize;
  fontFamily?: ThemeFontFamily;
  fontLineHeight?: ThemeFontLineHeight;
  fontWeight?: ThemeFontWeight;

  /* Grid */
  grid?: GridType;

  /* Padding  */
  padding?: ThemePadding;
  /* Margin */
  margin?: MarginType;
  /*HEIGHT  */
  height?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };
  maxHeight?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };
  minHeight?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };
  /*WIDTH  */
  width?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };
  maxWidth?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };
  minWidth?: {
    value?: number;
    unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  };

  /*BORDER  */
  border?: BorderType;
  /*BORDER RADIUS  */
  borderRadius?: BorderType;

  /*DISPLAY DEFAULT*/
  display?: DisplayType;

  /*FLEX  */
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

  /*GRID DEFAULT*/
  gridTemplateColumns?: GridValue;
  gridTemplateColumnsStatic?: GridValue;
  gridTemplateRows?: GridValue;

  overall?: string;

  gridMinMax?: number;
  gridcolumn?: {
    start?: number;
    end?: number;
    span?: '' | 'span';
  };
  gridrow?: {
    start?: number;
    end?: number;
    span?: '' | 'span';
  };
  gridColumnStart?: number;
  gridColumnEnd?: number;
  gridRowStart?: number;
  gridRowEnd?: number;
  gridSpan?: 'span' | '';
  gridRepeat?: 'rows' | 'columns';
  gridRepeatColumns?: number;
  gridRepeatRows?: number;
  gridType?:
    | 'grid-colum'
    | 'grid-row'
    | 'grid-template-columns'
    | 'gap'
    | 'row-gap'
    | 'column-gap';
  /*COLOR  */
  icon?: () => void;
  /* UTILS  */
  boxShadonw?: BoxShadonwType;
  ultils?: UtilsType;
};
