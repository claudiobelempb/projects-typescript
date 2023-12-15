import { css } from 'styled-components';
import { ColorType, TYPE_COLOR } from './ColorType';

export type PositionType = {
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  zIndex?: number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  width?: number;
  height?: number;
  backgroundImg?: string;
  backgroundColor?: ColorType;
  clipPath?: boolean;
  transformX?: boolean;
  transformY?: boolean;
  translate?: number;
};

export const positionDefault = ({
  position = 'absolute',
  zIndex = 0,
  top,
  bottom,
  left,
  right,
  width,
  height,
  backgroundColor,
  backgroundImg = '',
  clipPath = false,
  transformX = false,
  transformY = false,
  translate = 0
}: PositionType) => css`
  & {
    position: ${position};
    z-index: ${zIndex};
    top: calc(10 * ${top}%);
    bottom: calc(10 * ${bottom}%);
    left: calc(10 * ${left}%);
    right: calc(10 * ${right}%);
    width: calc(10 * ${width}%);
    height: calc(10 * ${height}%);
    background-image: url(${backgroundImg});
    background-color: ${backgroundColor
      ? TYPE_COLOR.variant[backgroundColor]
      : ''};
    ${clipPath &&
    css`
      clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 0% 100%, 0% 0%);
    `}
    ${transformX &&
    css`
      transform: translateX(${translate}0%);
    `}
    ${transformY &&
    css`
      transform: translateX(${translate}0%);
    `}
  }
`;
