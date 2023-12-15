import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const ImgDefaultContainer = styled.img<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    z-index: 0;

    /*EFFECT DEFAULT */

    /*BEFORE DEFAULT  */

    /*BEFORE DEFAULT  */

    /*POSITION DEFAULT  */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /* FLEX DEFAULT */
  `}
`;

export const FigureDefaultContainer = styled.figure<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */

    /*EFFECT DEFAULT */
    /* Padding Default */

    /*UTILS DEFAULT */

    /*EFFECT DEFAULT */

    /*BEFORE DEFAULT  */

    /*BEFORE DEFAULT  */

    /*POSITION DEFAULT  */

    /* FLEX DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */
  `}
`;
