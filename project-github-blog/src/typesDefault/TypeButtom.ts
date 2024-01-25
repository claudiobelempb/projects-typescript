import { TYPE_FONT } from './TypeFonts';
import { TYPE_SPACINGS } from './TypeSpace';

import { TYPE_BORDER } from './TypeBorder';
import { TYPE_COLOR_PROPS } from './TypeColor';

import { TYPE_ICON } from './IconType';
import { TYPE_FLEX } from './TypeFlex';
import { TYPE_GRYD } from './TypeGrid';
import { TYPE_HEIGHT } from './TypeHeight';
import { TYPE_POSITION } from './TypePosition';
import { TYPE_TEXT } from './TypeText';
import { TYPE_WIDTH } from './TypeWidth';

export type TypeButtom = {
  $title?: string;
  $display?: 'flex' | 'grid';
  $variant?: 'solido' | 'outlie';

  $selected?: boolean;
  $active?: boolean;
  $disabled?: boolean;

  $icons?: TYPE_ICON;

  $background?: TYPE_COLOR_PROPS;
  $background_hover?: TYPE_COLOR_PROPS;

  $color?: TYPE_COLOR_PROPS;
  $color_hover?: TYPE_COLOR_PROPS;

  /**FONTS */
  $fonts?: TYPE_FONT;
  /**SPACE */
  $spacings?: TYPE_SPACINGS;

  $position?: TYPE_POSITION;
  /**TEXTS */

  $text?: TYPE_TEXT;
  /**WIDTH */
  $width?: TYPE_WIDTH;
  /**HEIGHT */
  $height?: TYPE_HEIGHT;
  /**BORDER */
  $border?: TYPE_BORDER;

  // OVERFLOW
  $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';

  /*Displa Flex Container */
  $flex?: TYPE_FLEX;

  $grid?: TYPE_GRYD;
};
