import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';
import { TypeSpacings } from './TypeSpace';

import { IconType, IconWeight } from '@atoms/IconAtoms';
import { COLOR_PROPS } from './ColorType';
import { TypeBorderStyle } from './TypeBorder';
import { FlexContainerValue, FlexValue } from './TypeFlex';
import { TypeGridProps } from './TypeGrid';
import { TypeTetxAlign, TypeTextTransform } from './TypeText';

export type TypeIcon = {
  $icons?: {
    $title?: string;
    $display?: 'flex' | 'grid';

    $icons?: {
      $weight?: IconWeight;
      $color?: {
        $colors?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
      $size?: number;
      $type?: IconType;
    };

    $background?: {
      $background?: COLOR_PROPS;
      $hover?: COLOR_PROPS;
    };

    $colors?: {
      $colors?: COLOR_PROPS;
      $hover?: COLOR_PROPS;
    };

    /**FONTS */
    $fonts?: {
      $family?: TypeFontFamily;
      $style?: TypeFontStyle;
      $lineHeight?: TypeFontLineHeight;
      $fontWeigh?: TypeFontWeigh;
      $size?: TypeFontSize;
      $dinamic?: number;
    };
    /**SPACE */
    $spacings?: {
      $p?: TypeSpacings;
      $pt?: TypeSpacings;
      $pr?: TypeSpacings;
      $pl?: TypeSpacings;
      $pb?: TypeSpacings;
      $px?: TypeSpacings;
      $py?: TypeSpacings;
      $pd?: TypeSpacings;
      $pdx?: TypeSpacings;
      $pdy?: TypeSpacings;
      $m?: TypeSpacings;
      $mt?: number;
      $mr?: TypeSpacings;
      $ml?: TypeSpacings;
      $mb?: TypeSpacings;
      $mx?: TypeSpacings;
      $my?: TypeSpacings;
      $md?: TypeSpacings;
      $mdx?: TypeSpacings;
      $mdy?: TypeSpacings;
    };

    $position?: {
      $position?: 'absolute' | 'relative' | 'static' | 'fixed' | 'sticky';
      $top?: number | 'initial';
      $left?: number | 'initial';
      $right?: number | 'initial';
      $bottom?: number | 'initial';
      $zIndex?: number | 'initial';
    };
    /**TEXTS */

    $text?: {
      $textLineThrough?: 'line-through';
      $textTransform?: TypeTextTransform;
      $textAlign?: TypeTetxAlign;
    };
    /**WIDTH */
    $width?: {
      $width?: number;
      $maxWidth?: number;
      $minWidth?: number;
      $widthDinamic?: number;
    };
    /**HEIGHT */
    $height?: {
      $height?: number;
      $maxHeight?: number;
      $minHeight?: number;
      $heightDinamic?: number;
    };

    $active?: boolean;
    $disabled?: boolean;
    $error?: string;
    /**BORDER */
    $border?: {
      $border?: {
        $borderStyle?: TypeBorderStyle;
        $borderWidth?: number;
        $borderColor?: COLOR_PROPS;
      };
      $borderTop?: {
        $borderStyle?: TypeBorderStyle;
        $borderWidth?: number;
        $borderColor?: COLOR_PROPS;
      };
      $borderLeft?: {
        $borderStyle?: TypeBorderStyle;
        $borderWidth?: number;
        $borderColor?: COLOR_PROPS;
      };
      $borderRight?: {
        $borderStyle?: TypeBorderStyle;
        $borderWidth?: number;
        $borderColor?: COLOR_PROPS;
      };
      $borderBottom?: {
        $borderStyle?: TypeBorderStyle;
        $borderWidth?: number;
        $borderColor?: COLOR_PROPS;
      };
      $radius?: {
        $borderWidth?: number;
      };
      $radiusTopLeft?: {
        $width?: number;
      };
      $radiusTopRight?: {
        $width?: number;
      };
      $radiusBottomLeft?: {
        $width?: number;
      };
      $radiusBottomRight?: {
        $width?: number;
      };
    };

    // OVERFLOW
    $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
    $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
    $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';

    /*Displa Flex Container */
    $flex?: {
      $display?: 'flex';
      $flexDirection?: FlexContainerValue;
      $justifyContent?: FlexContainerValue;
      $alingItems?: FlexContainerValue;
      $alingContent?: FlexContainerValue;
      $flexWrap?: FlexValue;
      $row?: FlexValue;
      $colum?: FlexValue;
      /*Displa Flex Itemns */
      $order?: number;
      $alignSelf?: FlexContainerValue;
      $grow?: number;
      $shrink?: number;
      $basis?: number;
      $flex?: number;
      $gap?: number;
      $rowGap?: number;
      $columnGap?: number;
    };

    $grid?: {
      $display?: 'grid';
      $gridTemplateColumns?: TypeGridProps;
      $gridTemplateColumnsStatic?: TypeGridProps;
      $gridTemplateRows?: TypeGridProps;
      $gridColumn?: TypeGridProps;
      $gridRow?: TypeGridProps;
      $overall?: string;
    };
  };
};
