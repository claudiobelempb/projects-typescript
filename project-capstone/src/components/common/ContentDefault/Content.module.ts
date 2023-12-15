import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const ContentDefaultStyle = styled.section<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;
    width: 90%;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: center;
    margin: 0 auto;
    /* height: 100%; */
    /*GRID DEFAULT */

    /*EFFECT DEFAULT */

    /*BEFORE DEFAULT  */

    /*BEFORE DEFAULT  */

    /*POSITION DEFAULT  */

    /*BACKGROUND IMG DEFAULT  */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /* FLEX DEFAULT */
  `}
`;
