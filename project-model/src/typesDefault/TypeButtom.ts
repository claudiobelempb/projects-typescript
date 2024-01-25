import { TYPE_FONT } from './TypeFonts';
import { TYPE_SPACINGS } from './TypeSpace';

import { COLOR_PROPS } from './ColorType';
import { TYPE_BORDER } from './TypeBorder';

import { TYPE_ICON } from './IconType';
import { TYPE_FLEX } from './TypeFlex';
import { TYPE_GRYD } from './TypeGrid';
import { TYPE_HEIGHT } from './TypeHeight';
import { TYPE_TEXT } from './TypeText';
import { TYPE_WIDTH } from './TypeWidth';
import { TYPE_POSITION } from './typePosition';

export type TypeButtom = {
  $buttom?: {
    $title?: string;
    $display?: 'flex' | 'grid';
    $variant?: 'solido' | 'outlie';

    $selected?: {
      $active?: boolean;
      $disabled?: boolean;
    };

    $icons?: TYPE_ICON;

    $background?: {
      $color?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $text?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $icon?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $active?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $error?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };

    $colors?: {
      $color?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $text?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $icon?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $active?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $error?: {
        $color?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };

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

    $disabled?: boolean;

    // OVERFLOW
    $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
    $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
    $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';

    /*Displa Flex Container */
    $flex?: TYPE_FLEX;

    $grid?: TYPE_GRYD;
  };
};
