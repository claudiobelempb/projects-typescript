import { css } from 'styled-components';

type PaddingValue = {
  value?: number;
  vstatic?: number;
  vdynamic?: number;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
};

export type PaddingType = {
  paddingStatic?: PaddingValue;
  paddingTopStatic?: PaddingValue;
  paddingRightStatic?: PaddingValue;
  paddingLeftStatic?: PaddingValue;
  paddingBottomStatic?: PaddingValue;
  paddingXStatic?: PaddingValue;
  paddingYStatic?: PaddingValue;
  paddingDynamic?: PaddingValue;
};

export const padding = {
  padding: ({
    paddingStatic,
    paddingDynamic,
    paddingBottomStatic,
    paddingLeftStatic,
    paddingRightStatic,
    paddingTopStatic,
    paddingXStatic,
    paddingYStatic
  }: PaddingType) => css`
    ${paddingStatic &&
    css`
      padding: ${paddingStatic.vstatic}rem;
    `};
    ${paddingTopStatic &&
    css`
      padding-top: ${paddingTopStatic.vstatic}rem;
    `};
    ${paddingRightStatic &&
    css`
      padding-right: ${paddingRightStatic.vstatic}rem;
    `};
    ${paddingLeftStatic &&
    css`
      padding-left: ${paddingLeftStatic.vstatic}rem;
    `};
    ${paddingBottomStatic &&
    css`
      padding-bottom: ${paddingBottomStatic.vstatic}rem;
    `};
    ${paddingXStatic &&
    css`
      padding-right: calc(10 * ${paddingXStatic.vstatic}${paddingXStatic.unit});
      padding-left: calc(10 * ${paddingXStatic.vstatic}${paddingXStatic.unit});
    `};
    ${paddingYStatic &&
    css`
      padding-top: calc(10 * ${paddingYStatic.vstatic}${paddingYStatic.unit});
      padding-bottom: calc(
        10 * ${paddingYStatic.vstatic}${paddingYStatic.unit}
      );
    `};
    ${paddingDynamic &&
    css`
      padding: calc(
        ${paddingDynamic.vstatic}rem + ${paddingDynamic.vdynamic}vw
      );
    `};
  `
};
