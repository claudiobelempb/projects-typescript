import styled, { css } from 'styled-components';
import { BoxDefault } from '../BoxDefault';

export const ContainerDefault = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    /* display: flex; */
    /* flex-direction: column; */
    /* gap: 1.5rem; */
    /* position: relative; */
    /* width: 100%; */
    /* height: 100%; */
    /* background-color: red; */
    /*UTILS DEFAULT */
    /* FLEX DEFAULT */

    /* FLEX DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /*GRID DEFAULT */

    // sm applies to x-small devices (portrait phones, less than 576px)
    @media (max-width: 320px) {
    }

    // md applies to small devices (landscape phones, less than 768px)
    @media (min-width: 320px) and (max-width: 576px) {
    }

    // lg applies to medium devices (tablets, less than 992px)
    @media (min-width: 576px) and (max-width: 768px) {
    }

    // xl applies to large devices (desktops, less than 1200px)
    @media (min-width: 768px) and (max-width: 992px) {
    }

    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 992px) and (max-width: 1200px) {
    }
    // xxl applies to x-large devices (large desktops, less than 1400px)
    @media (min-width: 1200px) and (max-width: 1400px) {
    }
  `}
`;
