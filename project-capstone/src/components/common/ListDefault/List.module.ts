import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const ListDefaultContainer = styled.ul<AppType>`
  ${({ theme, ...props }) => css`
    list-style-type: none;

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */
  `}
`;

export const ItenListDefaultContainer = styled.li<AppType>`
  ${({ theme, ...props }) => css`
    list-style-type: none;

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */
  `}
`;
