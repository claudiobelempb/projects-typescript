import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const BoxDefaultStyle = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    /* z-index: -30; */
    /* height: 100%; */
    position: relative;
    width: 100%;
    /* display: flex; */

    /*TEXT DEFAULT */

    /*FONT DEFAULT  */

    /*ICON DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */

    /*EFFECT DEFAULT */

    /*BEFORE DEFAULT  */

    /*BEFORE DEFAULT  */

    /*POSITION DEFAULT  */

    /* GRID DEFAULT */

    /* FLEX DEFAULT */

    // Small devices (landscape phones, 576px and up)
    @media (min-width: 576px) {
      /* grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr)); */
    }

    // Medium devices (tablets, 768px and up)
    @media (min-width: 768px) {
    }

    // Large devices (desktops, 992px and up)
    @media (min-width: 992px) {
    }

    // X-Large devices (large desktops, 1200px and up)
    @media (min-width: 1200px) {
    }

    // XX-Large devices (larger desktops, 1400px and up)
    @media (min-width: 1400px) {
    }
  `}
`;
