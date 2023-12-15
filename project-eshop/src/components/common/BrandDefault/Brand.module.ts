import styled, { css } from 'styled-components';
import { BoxDefault } from '../BoxDefault';

export const BrandDefaultStyle = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    /* z-index: -30; */
    /* height: 100%; */
    position: relative;
   
    /* background-color: red; */

    /* Padding Static */
    /* padding: 1rem 0; */


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
