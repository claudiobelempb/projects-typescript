import React, { ReactNode } from 'react';
import { TYPE_ICON } from './IconType';
import { TYPE_BACKGROUND_IMAGE } from './TypeBackgroundImage';
import { TYPE_BORDER } from './TypeBorder';
import { TYPE_COLOR } from './TypeColor';
import { TYPE_FLEX } from './TypeFlex';
import { TYPE_FONT } from './TypeFonts';
import { TYPE_GRYD } from './TypeGrid';
import { TYPE_HEIGHT } from './TypeHeight';
import { TYPE_POSITION } from './TypePosition';
import { TYPE_SPACINGS } from './TypeSpace';
import { TYPE_TEXT } from './TypeText';
import { TYPE_WIDTH } from './TypeWidth';

export type TYPE_BOX = {
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

  $icons?: TYPE_ICON;
  /**BACKGROUND */
  $background?: TYPE_COLOR;
  $background_hover?: TYPE_COLOR;
  $background_image?: TYPE_BACKGROUND_IMAGE;

  /**COLOR */
  $color?: TYPE_COLOR;
  $color_hover?: TYPE_COLOR;
  /**FONTS */
  $fonts?: TYPE_FONT;
  /**SPACINGS */
  $spacings?: TYPE_SPACINGS;
  /**POSITION */
  $position?: TYPE_POSITION;
  /**TEXTS */
  $text?: TYPE_TEXT;
  $unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  /**WIDTH */
  $width?: TYPE_WIDTH;
  /**HEIGHT */
  $height?: TYPE_HEIGHT;
  /**BOOLEAM */
  $isActive?: boolean;
  $isIcon?: boolean;
  $isIconLeft?: boolean;
  $isIconRight?: boolean;
  $disabled?: boolean;
  /**ERROR */
  $isError?: boolean;
  $error?: string;
  /**BORDER */
  $border?: TYPE_BORDER;
  /**OVERFLOW */
  $overflow?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowX?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  $overflowY?: 'scroll' | 'hidden' | 'auto' | 'cli' | 'visible';
  /**DISPLAY */
  $display?: 'flex' | 'grid';
  /**FLEX BOX */
  $flex?: TYPE_FLEX;
  /**GRID CSS */
  $grid?: TYPE_GRYD;
  /**OPACITY */
  $opacity?: number;
};
