import { css } from 'styled-components';
import { typeDefault } from './typesDefault';

export type TypeSpace =
  | 's5'
  | 's8'
  | 's10'
  | 's12'
  | 's14'
  | 'm16'
  | 'm20'
  | 'm24'
  | 'l30'
  | 'l32'
  | 'x48'
  | 'x64';
/*
  calcHeightNegative?: () => FlattenSimpleInterpolation;
  calcHeightPositive?: () => FlattenSimpleInterpolation;

  calcHeightNegative={props.calcHeightNegative}
  calcHeightPositive={props.calcHeightPositive}
  
  ${props.calcHeightNegative && props.calcHeightNegative()}
  ${props.calcHeightPositive && props.calcHeightPositive()}

*/

export const calcHeightNegative = ({ ...props }: typeDefault) => css`
  height: calc(100vh - ${`${props.$height?.$height}rem`});
`;

export const calcHeightPositive = ({ ...props }: typeDefault) => css`
  height: calc(100vh + ${`${props.$height?.$height}rem`});
`;
