import { ReactNode } from 'react';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';
import { TypeSpace } from './TypeSpace';

import { RuleSet } from 'styled-components';
import { TypeBorderStyle } from './TypeBorder';
import { FlexContainerValue, FlexValue } from './TypeFlex';
import { TypeTetxAlign, TypeTextTransform } from './TypeText';
import { TypeVariant } from './TypeVariant';

export type typeDefault = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  $title?: string;
  $name?: string;
  $mensagem?: string;
  $description?: string;
  $titleButton?: string;
  $titleText?: string;
  $titleHeading?: string;
  children?: ReactNode;
  $child?: number;
  $variant?: {
    $vbackgroud?: TypeVariant;
    $vstatus?: TypeVariant;
    $vbackgroudHover?: TypeVariant;
    $vcolorHover?: TypeVariant;
    $vcolor?: TypeVariant;
    $viconColor?: TypeVariant;
    $vborder?: TypeVariant;
    $vplaceholder?: TypeVariant;
  };

  $table?: {
    $tr?: {
      $variant?: {
        $background?: TypeVariant;
        $color?: TypeVariant;
        $border?: TypeVariant;
        $hover?: TypeVariant;
      };
    };
    $td?: {
      $variant?: {
        $background?: TypeVariant;
        $color?: TypeVariant;
        $border?: TypeVariant;
        $hover?: TypeVariant;
      };
    };
    $th?: {
      $variant?: {
        $background?: TypeVariant;
        $color?: TypeVariant;
        $border?: TypeVariant;
        $hover?: TypeVariant;
      };
    };
    $thead?: {
      $variant?: {
        $background?: TypeVariant;
        $color?: TypeVariant;
        $border?: TypeVariant;
        $hover?: TypeVariant;
      };
    };
    $tfoot?: {
      $variant?: {
        $background?: TypeVariant;
        $color?: TypeVariant;
        $border?: TypeVariant;
        $hover?: TypeVariant;
      };
    };
    $tbody?: {
      $variant?: {
        $background?: TypeVariant;
        $color?: TypeVariant;
        $border?: TypeVariant;
        $hover?: TypeVariant;
      };
    };
  };

  /**FUNCTION */
  calcHeightNegative?: () => RuleSet<typeDefault>;
  calcHeightPositive?: () => RuleSet<typeDefault>;

  /**FONTS */
  $font?: {
    $fcolor?: TypeVariant;
    $ffamily?: TypeFontFamily;
    $fstyle?: TypeFontStyle;
    $fline?: TypeFontLineHeight;
    $fweigh?: TypeFontWeigh;
    $fsize?: TypeFontSize;
    $fdinamic?: number;
  };
  /**SPACE */
  $space?: {
    $p?: TypeSpace;
    $pt?: TypeSpace;
    $pr?: TypeSpace;
    $pl?: TypeSpace;
    $pb?: TypeSpace;
    $px?: TypeSpace;
    $py?: TypeSpace;
    $pd?: TypeSpace;
    $pdx?: TypeSpace;
    $pdy?: TypeSpace;
    $m?: TypeSpace;
    $mt?: TypeSpace;
    $mr?: TypeSpace;
    $ml?: TypeSpace;
    $mb?: TypeSpace;
    $mx?: TypeSpace;
    $my?: TypeSpace;
    $md?: TypeSpace;
    $mdx?: TypeSpace;
    $mdy?: TypeSpace;
  };

  $position?: {
    position?: 'absolute' | 'relative';
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
    zIndex?: number;
  };
  /**TEXTS */

  $text?: {
    $textLineThrough?: 'line-through';
    $textTransform?: TypeTextTransform;
    $textAlign?: TypeTetxAlign;
  };
  $unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  //value?: number;
  $width?: {
    $width?: number;
    $maxWidth?: number;
    $minWidth?: number;
    $widthDinamic?: number;
  };
  $height?: {
    $height?: number;
    $maxHeight?: number;
    $minHeight?: number;
    $heightDinamic?: number;
  };
  $isWidth?: boolean;
  $isHeight?: boolean;
  $isHover?: boolean;

  $isActive?: boolean;
  $isIcon?: boolean;
  $isIconLeft?: boolean;
  $isIconRight?: boolean;
  $isBorder?: boolean;
  $isBorderRadius?: boolean;
  $isDisabled?: boolean;

  $border?: {
    $border?: {
      borderStyle?: TypeBorderStyle;
      borderWidth?: number;
      borderColor?: TypeVariant;
    };
    $borderTop?: {
      borderStyle?: TypeBorderStyle;
      borderWidth?: number;
      borderColor?: TypeVariant;
    };
    $borderLeft?: {
      borderStyle?: TypeBorderStyle;
      borderWidth?: number;
      borderColor?: TypeVariant;
    };
    $borderRight?: {
      borderStyle?: TypeBorderStyle;
      borderWidth?: number;
      borderColor?: TypeVariant;
    };
    $borderBottom?: {
      borderStyle?: TypeBorderStyle;
      borderWidth?: number;
      borderColor?: TypeVariant;
    };
    $radius?: {
      borderWidth?: number;
    };
    $radiusTopLeft?: {
      leftBorderWidth?: number;
      rightBorderWidth?: number;
    };
    $radiusTopRight?: {
      leftBorderWidth?: number;
      rightBorderWidth?: number;
    };
    $radiusBottomLeft?: {
      leftBorderWidth?: number;
      rightBorderWidth?: number;
    };
    $radiusBottomRight?: {
      leftBorderWidth?: number;
      rightBorderWidth?: number;
    };
  };

  // OVERFLOW
  $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';

  $display?: 'flex';
  /*Displa Flex Container */
  $flex?: {
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
};
