import { css } from 'styled-components';

export type WidthValue = {
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
  value?: number;
};

export type WidthType = {
  width?: WidthValue;
  maxWidth?: WidthValue;
  minWidth?: WidthValue;
};

export const width = {
  width: ({ width, maxWidth, minWidth }: WidthType) => css`
    ${width &&
    css`
      width: calc(10 * ${width.value}${width.unit});
    `}
    ${maxWidth &&
    css`
      max-width: calc(10 * ${maxWidth.value}${maxWidth.unit});
    `}
  ${minWidth &&
    css`
      min-width: calc(10 * ${minWidth.value}${minWidth.unit});
    `}
  `
};
