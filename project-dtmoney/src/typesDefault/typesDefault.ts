import { InputHTMLAttributes, ReactNode } from 'react';
import {
  TypeFontFamily,
  TypeFontLineHeight,
  TypeFontSize,
  TypeFontStyle,
  TypeFontWeigh
} from './TypeFonts';
import { TypeSpacings } from './TypeSpace';

import { IconType, IconWeight } from '@atoms/IconAtoms';
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
  $lines?: number;

  $icons?: {
    $weight?: IconWeight;
    $color?: COLOR_PROPS;
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
  $fonts?: {
    $color?: COLOR_PROPS;
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
    $mt?: TypeSpacings;
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
  $isError?: boolean;
  $error?: string;

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
