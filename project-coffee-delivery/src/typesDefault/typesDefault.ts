import { InputHTMLAttributes, ReactNode } from 'react';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';
import { TypeSpace } from './TypeSpace';

import { RuleSet } from 'styled-components';
import { COLOR_PROPS } from './ColorType';
import { TypeBorderStyle } from './TypeBorder';
import { FlexContainerValue, FlexValue } from './TypeFlex';
import { TypeTetxAlign, TypeTextTransform } from './TypeText';

export type InpuType = typeDefault & InputHTMLAttributes<HTMLInputElement>;
export type InputRef = HTMLInputElement;
export type ButtonRef = HTMLButtonElement;

export type typeDefault = {
  as?: React.ElementType | keyof JSX.IntrinsicElements;
  $name?: string;
  $mensagem?: string;
  $description?: string;
  $titleButton?: string;
  $titleText?: string;
  $titleHeading?: string;
  children?: ReactNode;
  $child?: number;

  $background?: {
    $background?: COLOR_PROPS;
    $card?: COLOR_PROPS;
    $input?: COLOR_PROPS;
    $button?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
  };

  $color?: {
    $card?: COLOR_PROPS;
    $input?: COLOR_PROPS;
    $button?: COLOR_PROPS;
    $hover?: COLOR_PROPS;
    $label?: COLOR_PROPS;
    $subtitle?: COLOR_PROPS;
    $title?: COLOR_PROPS;
    $text?: COLOR_PROPS;
  };

  $table?: {
    $tr?: {
      $variant?: {
        $background?: COLOR_PROPS;
        $border?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };
    $td?: {
      $variant?: {
        $background?: COLOR_PROPS;
        $color?: COLOR_PROPS;
        $border?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };
    $th?: {
      $variant?: {
        $background?: COLOR_PROPS;
        $color?: COLOR_PROPS;
        $border?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };
    $thead?: {
      $variant?: {
        $background?: COLOR_PROPS;
        $color?: COLOR_PROPS;
        $border?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };
    $tfoot?: {
      $variant?: {
        $background?: COLOR_PROPS;
        $color?: COLOR_PROPS;
        $border?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };
    $tbody?: {
      $variant?: {
        $background?: COLOR_PROPS;
        $color?: COLOR_PROPS;
        $border?: COLOR_PROPS;
        $hover?: COLOR_PROPS;
      };
    };
  };

  /**FUNCTION */
  calcHeightNegative?: () => RuleSet<typeDefault>;
  calcHeightPositive?: () => RuleSet<typeDefault>;

  /**FONTS */
  $font?: {
    $fcolor?: COLOR_PROPS;
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
