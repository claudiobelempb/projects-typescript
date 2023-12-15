import { css } from 'styled-components';

type MarginValue = {
  value?: number;
  vstatic?: number;
  vdynamic?: number;
  unit?: 'px' | '%' | 'rem' | 'vw' | 'vh';
};

export type MarginType = {
  marginStatic?: MarginValue;
  marginTopStatic?: MarginValue;
  marginRightStatic?: MarginValue;
  marginLeftStatic?: MarginValue;
  marginBottomStatic?: MarginValue;
  marginXStatic?: MarginValue;
  marginYStatic?: MarginValue;
  marginDynamic?: MarginValue;
};

export const margin = {
  margin: ({
    marginStatic,
    marginDynamic,
    marginBottomStatic,
    marginLeftStatic,
    marginRightStatic,
    marginTopStatic,
    marginXStatic,
    marginYStatic
  }: MarginType) => css`
    ${marginStatic &&
    css`
      margin: ${marginStatic.vstatic}rem;
    `};
    ${marginTopStatic &&
    css`
      margin-top: ${marginTopStatic.vstatic}rem;
    `};
    ${marginRightStatic &&
    css`
      margin-right: ${marginRightStatic.vstatic}rem;
    `};
    ${marginLeftStatic &&
    css`
      margin-left: ${marginLeftStatic.vstatic}rem;
    `};
    ${marginBottomStatic &&
    css`
      margin-bottom: ${marginBottomStatic.vstatic}rem;
    `};
    ${marginXStatic &&
    css`
      margin-right: ${marginXStatic.vstatic}rem;
      margin-left: ${marginXStatic.vstatic}rem;
    `};
    ${marginYStatic &&
    css`
      margin-top: ${marginYStatic.vstatic}rem;
      margin-bottom: ${marginYStatic.vstatic}rem;
    `};
    ${marginDynamic &&
    css`
      margin: calc(${marginDynamic.vstatic}rem + ${marginDynamic.vdynamic}vw);
    `};
  `
};
