import { css } from 'styled-components';
import { AppType } from './AppType';

export interface UtilsType extends AppType {
  zIndex?: number;
  overflow?: TypeOverflow;
  visibility?: TypeVisibility;
  boxShadow?: BoxShadonwType;
  position?: TypeProsition;
}

export type BoxShadonwType = {
  offsetX?: number;
  offsetY?: number;
  blurRadius?: number;
  spreadRadius?: number;
  color?: string;
};

export type TypeOverflow = {
  value?: 'hidden' | 'overlay' | 'scroll' | 'visible';
};

export type TypeProsition = {
  value?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
};

export type TypeVisibility = {
  value?: 'hidden' | 'overlay' | 'scroll' | 'visible';
};

export type TypeDisplay = {
  value: 'flex' | 'grid' | 'block' | 'inline-block';
};

/**
  zIndex?: TypeThemeNumber;
  boxShadow?: TypeBoxShadonwProps;
  display?: TypeDisplay;
  overflow?: TypeOverflow;
  visibility?: TypeVisibility;
  impar?: () => FlattenSimpleInterpolation;
  par?: () => FlattenSimpleInterpolation;

  zIndex={props.zIndex}
  visibility={prpos.visibility}
  impar={props.impar}
  par={props.par}
  boxShadow={props.boxShadow}
  display={props.display}
  overflow={props.overflow}

  ${props.zIndex && utils.zIndex(props.zIndex)}
  ${props.impar && utils.impar(props.impar)}
  ${props.par && utils.par(props.par)}
  ${props.boxShadow && utils.boxShadow(props.boxShadow)}
  ${props.display && utils.display(props.display)}
  ${props.overflow && utils.overflow(props.overflow)}

*/

export const UTILS = {
  utils: ({
    boxShadow = {
      offsetX: 1,
      offsetY: 2,
      blurRadius: 35,
      spreadRadius: 5,
      color: 'rgba(0, 0, 0, 0.2)'
    },
    display,
    overflow,
    position,
    visibility,
    zIndex,
    ...props
  }: UtilsType) =>
    css`
      ${zIndex &&
      css`
        z-index: ${zIndex};
      `};
      ${boxShadow &&
      css`
        box-shadow: ${boxShadow.offsetX}px ${boxShadow.offsetY}px
          ${boxShadow.blurRadius}px ${boxShadow.spreadRadius}px
          ${boxShadow.color};
      `};
      ${position &&
      css`
        position: ${position};
      `};
      ${visibility &&
      css`
        visibility: ${visibility};
        display: none;
        display: flex;
      `};
      ${overflow &&
      css`
        overflow: ${overflow};
      `};
      ${display &&
      css`
        display: ${display};
      `};
    `
};
