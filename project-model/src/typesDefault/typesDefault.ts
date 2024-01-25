import { InputHTMLAttributes, ReactNode } from 'react';
import { TYPE_FONT } from './TypeFonts';
import { TYPE_SPACINGS } from './TypeSpace';

import { BACKGROUND_TYPE_PROPS, COLOR_TYPE_PROPS } from './ColorType';
import { TYPE_ICON } from './IconType';
import { TYPE_BORDER } from './TypeBorder';
import { TYPE_FLEX } from './TypeFlex';
import { TYPE_GRYD } from './TypeGrid';
import { TYPE_HEIGHT } from './TypeHeight';
import { TYPE_TEXT } from './TypeText';
import { TYPE_WIDTH } from './TypeWidth';
import { TYPE_POSITION } from './typePosition';

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
  $variant?: 'small' | 'medium' | 'large';

  $validation?: {
    $mensagem?: string;
    color?: COLOR_TYPE_PROPS;
  };

  $icons?: TYPE_ICON;

  $background?: BACKGROUND_TYPE_PROPS;

  $colors?: COLOR_TYPE_PROPS;

  /**FONTS */
  $fonts?: TYPE_FONT;
  /**SPACE */
  $spacings?: TYPE_SPACINGS;

  $position?: TYPE_POSITION;
  /**TEXTS */

  $text?: TYPE_TEXT;
  $unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  //value?: number;
  $width?: TYPE_WIDTH;
  $height?: TYPE_HEIGHT;
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

  $border?: TYPE_BORDER;

  // OVERFLOW
  $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';

  $display?: 'flex' | 'grid';
  /*Displa Flex Container */
  $flex?: TYPE_FLEX;

  $grid?: TYPE_GRYD;

  $opacity?: number;
};
