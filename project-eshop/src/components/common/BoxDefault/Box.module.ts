import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const BoxDefaultStyle = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    /* z-index: -30; */
    /* height: 100%; */
    position: relative;

    /* DISPLAY DEFAULT */
    display: ${props.display ? props.display : 'flex'};

    /* FLEX DEFAULT */
    flex-direction: ${props.direction ? props.direction : 'column'};
    flex-wrap: ${props.wrap && props.wrap};
    flex-grow: ${props.grow && props.grow};
    justify-content: ${props.justify && props.justify};
    align-items: ${props.align && props.align};
    align-self: ${props.self && props.self};
    flex-basis: ${props.basis?.value && props.basis.value}${props.basis?.unit && props.basis.unit};

    /*COLOR DEFAULT */
    background-color: ${props.backgroundColor &&
    theme.variant[props.backgroundColor]};
    color: ${props.textColor && theme.variant[props.textColor]};
    /*PADDING DEFAULT */

    /*MARGIN DEFAULT */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */
    border-color: ${props.borderColor && theme.variant[props.borderColor]};
    border: ${props.border && props.border};

    /*BORDER RADIUS DEFAULT */
    border-radius: ${props.borderRadius && props.borderRadius};
    /*HEIGHT DEFAULT  */
    height: ${props.height?.value && props.height.value}${props.height?.unit && props.height.unit};
    max-height: ${props.maxHeight?.value && props.maxHeight.value}${props.maxHeight?.unit && props.maxHeight.unit};
    min-height: ${props.minHeight?.value && props.minHeight.value}${props.minHeight?.unit && props.minHeight.unit};

    /*WIDTH DEFAULT  */
    width: ${props.width?.value && props.width.value}${props.width?.unit && props.width.unit};
    max-width: ${props.maxWidth?.value && props.maxWidth.value}${props.maxWidth?.unit && props.maxWidth.unit};
    min-width: ${props.minWidth?.value && props.minWidth.value}${props.minWidth?.unit && props.minWidth.unit};

    /*EFFECT DEFAULT */

    /*BEFORE DEFAULT  */

    /*BEFORE DEFAULT  */

    /*POSITION DEFAULT  */

    /* GRID DEFAULT */
    grid-template-columns: ${props.gridTemplateColumns &&
    props.gridTemplateColumns};
    grid-template-rows: ${props.gridTemplateRows && props.gridTemplateRows};
    grid-column: ${props.gridcolumn && props.gridcolumn};
    grid-row: ${props.gridrow && props.gridcolumn};

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

    /* (320x480) iPhone (Original, 3G, 3GS) */
    @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
      /* insert styles here */
    }

    /* (320x480) Smartphone, Portrait */
    @media only screen and (device-width: 320px) and (orientation: portrait) {
      /* insert styles here */
    }

    /* (320x480) Smartphone, Landscape */
    @media only screen and (device-width: 480px) and (orientation: landscape) {
      /* insert styles here */
    }

    /* (480x800) Android */
    @media only screen and (min-device-width: 480px) and (max-device-width: 800px) {
      /* insert styles here */
    }

    /* (640x960) iPhone 4 & 4S */
    @media only screen and (min-device-width: 640px) and (max-device-width: 960px) {
      /* insert styles here */
    }

    /* (720x1280) Galaxy Nexus, WXGA */
    @media only screen and (min-device-width: 720px) and (max-device-width: 1280px) {
      /* insert styles here */
    }

    /* (720x1280) Galaxy Nexus, Landscape */
    @media only screen and (min-device-width: 720px) and (max-device-width: 1280px) and (orientation: landscape) {
      /* insert styles here */
    }

    /* (1024x768) iPad 1 & 2, XGA */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
      /* insert styles here */
    }

    /* (768x1024) iPad 1 & 2, Portrait */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
      /* insert styles here */
    }

    /* (1024x768) iPad 1 & 2, Landscape */
    @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
      /* insert styles here */
    }

    /* (2048x1536) iPad 3 */
    @media only screen and (min-device-width: 1536px) and (max-device-width: 2048px) {
      /* insert styles here */
    }

    /* (1280x720) Galaxy Note 2, WXGA */
    @media only screen and (min-device-width: 720px) and (max-device-width: 1280px) {
      /* insert styles here */
    }

    /* (1366x768) WXGA Display */
    @media screen and (max-width: 1366px) {
      /* insert styles here */
    }

    /* (1280x1024) SXGA Display */
    @media screen and (max-width: 1280px) {
      /* insert styles here */
    }

    /* (1440x900) WXGA+ Display */
    @media screen and (max-width: 1440px) {
      /* insert styles here */
    }

    /* (1680x1050) WSXGA+ Display */
    @media screen and (max-width: 1680px) {
      /* insert styles here */
    }

    /* (1920x1080) Full HD Display */
    @media screen and (max-width: 1920px) {
      /* insert styles here */
    }

    /* (1600x900) HD+ Display */
    @media screen and (max-width: 1600px) {
      /* insert styles here */
    }
  `}
`;
