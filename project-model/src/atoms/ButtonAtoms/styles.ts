import { TypeButtom } from '@typesDefault/TypeButtom';
import styled, { css } from 'styled-components';

export const Container = styled.button<TypeButtom>`
  ${({ theme, ...props }) => css`
    border: none;

    cursor: pointer;

    ${props.$buttom?.$background?.$color?.$color &&
    css`
      background-color: ${theme.colors[
        props.$buttom?.$background.$color.$color || 'transparent'
      ]};
    `}

    ${props.$buttom?.$selected?.$active &&
    css`
      background-color: ${theme.colors.green700} !important;
      color: ${theme.colors.white} !important;
      & svg {
        fill: ${theme.colors.white} !important;
      }
    `}

    ${props.$buttom?.$selected?.$disabled &&
    css`
      background-color: ${theme.colors.red700} !important;
      color: ${theme.colors.white} !important;
      & svg {
        fill: ${theme.colors.white} !important;
      }
    `}

    ${props.$buttom?.$colors?.$active?.$color &&
    css`
      background-color: ${theme.colors[
        props.$buttom?.$colors.$active.$color || 'transparent'
      ]};
    `}

    ${props.$buttom?.$colors?.$color?.$color &&
    css`
      color: ${theme.colors[
        props.$buttom?.$colors.$color.$color || 'transparent'
      ]};
    `}

    ${props.$buttom?.$colors?.$icon?.$color &&
    css`
      & svg {
        fill: ${theme.colors[
          props.$buttom?.$colors?.$icon?.$color || 'transparent'
        ]};
      }
    `}

    &:hover {
      color: ${theme.colors[
        props.$buttom?.$colors?.$color?.$hover || 'transparent'
      ]};
      & svg {
        fill: ${theme.colors[
          props.$buttom?.$colors?.$icon?.$hover || 'transparent'
        ]};
      }
      background-color: ${theme.colors[
        props.$buttom?.$background?.$color?.$color || 'transparent'
      ]};
      background-color: ${theme.colors[
        props.$buttom?.$background?.$active?.$color || 'transparent'
      ]};
      transition: background-color 0.2s;
    }

    &:not(:disabled):hover {
      color: ${theme.colors[
        props.$buttom?.$colors?.$color?.$hover || 'transparent'
      ]};
      & svg {
        fill: ${theme.colors[
          props.$buttom?.$colors?.$icon?.$hover || 'transparent'
        ]};
      }
      background-color: ${theme.colors[
        props.$buttom?.$background?.$color?.$hover || 'transparent'
      ]};
      transition: background-color 0.2s;
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
      background-color: ${theme.colors[
        props.$buttom?.$background?.$color?.$hover || 'transparent'
      ]};
    }

    /* 
    &[data-state='unchecked']:hover {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green700};
      transition: background-color 0.2s;
    }

    &[data-state='checked'] {
      color: ${theme.colors.white};
      background-color: ${theme.colors.green700};
    }

    &[data-state='unchecked'] {
      color: ${theme.colors.white};
      background-color: ${theme.colors.red700};
    } */

    font-size: ${props.$buttom?.$fonts?.$size}rem;

    /*POSITION */
    ${props.$buttom?.$position?.$position &&
    css`
      position: ${props.$buttom?.$position.$position};
      top: ${`${props.$buttom?.$position.$top}rem`};
      left: ${`${props.$buttom?.$position.$left}rem`};
      right: ${`${props.$buttom?.$position.$right}rem`};
      bottom: ${`${props.$buttom?.$position.$bottom}rem`};
      z-index: ${props.$buttom?.$position.$zIndex};
    `};

    /* BORDER */
    ${props.$buttom?.$border?.$border &&
    css`
      border: ${props.$buttom?.$border?.$border.$borderWidth || 1}px
        ${props.$buttom?.$border?.$border.$borderStyle || 'solid'}
        ${props.$buttom?.$border.$border.$borderColor
          ? theme.colors[props.$buttom?.$border.$border.$borderColor]
          : theme.colors.transparent};
    `}

    /* BORDER RADIUS */

    border-radius: ${props.$buttom?.$border?.$radius?.$borderWidth
      ? props.$buttom?.$border?.$radius.$borderWidth
      : 8}px;

    ${props.$buttom?.$text?.$textAlign &&
    css`
      text-align: ${props.$buttom?.$text.$textAlign};
    `}
    ${props.$buttom?.$fonts?.$weigh &&
    css`
      font-weight: ${props.$buttom?.$fonts.$weigh};
    `}
    ${props.$buttom?.$fonts?.$family &&
    css`
      font-family: ${theme.fonts.family[props.$buttom?.$fonts.$family]};
    `}

    ${props.$buttom?.$fonts?.$dinamic &&
    css`
      font-size: calc(1 * ${props.$buttom?.$fonts.$dinamic}vw);
    `}

    /* SVG */
    ${props.$buttom?.$display
      ? css`
          display: ${props.$buttom?.$display};
        `
      : css`
          display: flex;
        `}
    ${props.$buttom?.$flex?.$alingItems
      ? css`
          align-items: ${props.$buttom?.$flex?.$alingItems};
        `
      : css`
          align-items: center;
        `};
    column-gap: ${props.$buttom?.$flex?.$columnGap
      ? props.$buttom?.$flex?.$columnGap
      : 0.5}rem;

    ${props.$buttom?.$flex?.$flex &&
    css`
      flex: ${props.$buttom?.$flex.$flex};
    `}
    ${props.$buttom?.$flex?.$direction
      ? css`
          flex-direction: ${props.$buttom?.$flex?.$direction};
        `
      : css`
          flex-direction: row;
        `}
      ${props.$buttom?.$flex?.$justifyContent
      ? css`
          justify-content: ${props.$buttom?.$flex?.$justifyContent};
        `
      : css`
          justify-content: center;
        `}
      ${props.$buttom?.$flex?.$alingContent &&
    css`
      align-content: ${props.$buttom?.$flex?.$alingContent};
    `}
      ${props.$buttom?.$flex?.$alignSelf &&
    css`
      align-self: ${props.$buttom?.$flex?.$alignSelf};
    `}
      ${props.$buttom?.$flex?.$wrap &&
    css`
      flex-wrap: ${props.$buttom?.$flex?.$wrap};
    `}
      ${props.$buttom?.$flex?.$gap &&
    css`
      gap: ${props.$buttom?.$flex?.$gap ? props.$buttom?.$flex?.$basis : 0}rem;
    `}
      ${props.$buttom?.$flex?.$rowGap &&
    css`
      gap: ${props.$buttom?.$flex?.$rowGap
        ? props.$buttom?.$flex?.$rowGap
        : 0}rem;
    `}
      

    ${props.$buttom?.$flex?.$order &&
    css`
      order: ${props.$buttom?.$flex?.$order ? props.$buttom?.$flex?.$order : 0};
    `}
    ${props.$buttom?.$flex?.$grow &&
    css`
      flex-grow: ${props.$buttom?.$flex?.$grow
        ? props.$buttom?.$flex?.$grow
        : 0};
    `}
      ${props.$buttom?.$flex?.$shrink &&
    css`
      flex-shrink: ${props.$buttom?.$flex?.$shrink
        ? props.$buttom?.$flex?.$shrink
        : 0};
    `}
      ${props.$buttom?.$flex?.$basis &&
    css`
      flex-basis: ${props.$buttom?.$flex?.$basis
        ? props.$buttom?.$flex?.$basis
        : 0}rem;
    `}
    
    /*WIDTH */
    ${props.$buttom?.$width?.$width
      ? css`
          width: ${props.$buttom?.$width?.$width}rem;
        `
      : css`
          width: 100%;
        `}
    ${props.$buttom?.$width?.$maxWidth &&
    css`
      max-width: ${props.$buttom?.$width?.$maxWidth}rem;
    `}
    ${props.$buttom?.$width?.$minWidth &&
    css`
      min-width: ${props.$buttom?.$width?.$minWidth}rem;
    `}
    
    /*HEIGT */
    ${props.$buttom?.$height?.$height &&
    css`
      height: ${props.$buttom?.$height?.$height}vh;
    `}
    ${props.$buttom?.$height?.$maxHeight &&
    css`
      max-height: ${props.$buttom?.$height?.$maxHeight}rem;
    `}
    ${props.$buttom?.$height?.$minHeight &&
    css`
      min-height: ${props.$buttom?.$height?.$minHeight}rem;
    `}
     
 
     /*PADDING */
     ${props.$buttom?.$spacings?.$p &&
    css`
      padding: ${props.$buttom?.$spacings?.$p}rem;
    `}
    ${props.$buttom?.$spacings?.$pt &&
    css`
      padding-top: ${props.$buttom?.$spacings?.$pt}rem;
    `}
    ${props.$buttom?.$spacings?.$pl &&
    css`
      padding-left: ${props.$buttom?.$spacings?.$pl}rem;
    `}
    ${props.$buttom?.$spacings?.$pr &&
    css`
      padding-right: ${props.$buttom?.$spacings?.$pr}rem;
    `}
    ${props.$buttom?.$spacings?.$pb &&
    css`
      padding-bottom: ${props.$buttom?.$spacings?.$pb}rem;
    `}
    ${props.$buttom?.$spacings?.$px &&
    css`
      padding: ${props.$buttom?.$spacings.$px}rem;
    `}
    ${props.$buttom?.$spacings?.$py &&
    css`
      padding: 0rem ${props.$buttom?.$spacings.$py}rem;
    `}
    ${props.$buttom?.$spacings?.$pd &&
    css`
      padding: calc(1 * ${props.$buttom?.$spacings.$pd}vw);
    `}
    ${props.$buttom?.$spacings?.$pdx &&
    css`
      padding: 0rem calc(1 * ${props.$buttom?.$spacings.$pdx}vw);
    `}
    ${props.$buttom?.$spacings?.$pdy &&
    css`
      padding: calc(1 * ${props.$buttom?.$spacings.$pdy}vw) 0rem;
    `}

    /*MARGIN */
    ${props.$buttom?.$spacings?.$m &&
    css`
      margin: ${props.$buttom?.$spacings?.$m}rem;
    `}
    ${props.$buttom?.$spacings?.$mt &&
    css`
      margin-top: ${props.$buttom?.$spacings?.$mt}rem;
    `}
    ${props.$buttom?.$spacings?.$ml &&
    css`
      margin-left: ${props.$buttom?.$spacings?.$ml}rem;
    `}
    ${props.$buttom?.$spacings?.$mr &&
    css`
      margin-right: ${props.$buttom?.$spacings?.$mr}rem;
    `}
    ${props.$buttom?.$spacings?.$mb &&
    css`
      margin-bottom: ${props.$buttom?.$spacings?.$mb}rem;
    `}
    ${props.$buttom?.$spacings?.$mx &&
    css`
      margin: ${props.$buttom?.$spacings.$mx}rem 0rem;
    `}
    ${props.$buttom?.$spacings?.$my &&
    css`
      margin: 0rem ${props.$buttom?.$spacings.$my}rem;
    `}
    ${props.$buttom?.$spacings?.$md &&
    css`
      p: calc(1 * ${props.$buttom?.$spacings.$md}vw);
    `}
    ${props.$buttom?.$spacings?.$mdx &&
    css`
      margin: calc(1 * ${props.$buttom?.$spacings.$mdx}vw) 0rem;
    `}
    ${props.$buttom?.$spacings?.$mdy &&
    css`
      margin: calc(1 * ${props.$buttom?.$spacings.$mdy}vw) 0rem;
    `}

    /* BORDER */
    ${props.$buttom?.$border?.$border &&
    css`
      border: ${props.$buttom?.$border?.$border.$borderWidth || 1}px
        ${props.$buttom?.$border?.$border.$borderStyle || 'solid'}
        ${props.$buttom?.$border.$border.$borderColor
          ? theme.colors[props.$buttom?.$border.$border.$borderColor]
          : theme.colors.transparent};
    `}
    ${props.$buttom?.$border?.$borderTop &&
    css`
      border-top: ${props.$buttom?.$border?.$borderTop.$borderWidth || 1}px
        ${props.$buttom?.$border?.$borderTop.$borderStyle || 'solid'}
        ${props.$buttom?.$border.$borderTop.$borderColor
          ? theme.color[props.$buttom?.$border.$borderTop.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$buttom?.$border?.$borderLeft &&
    css`
      border-left: ${props.$buttom?.$border?.$borderLeft.$borderWidth || 1}px
        ${props.$buttom?.$border?.$borderLeft.$borderStyle || 'solid'}
        ${props.$buttom?.$border.$borderLeft.$borderColor
          ? theme.color[props.$buttom?.$border.$borderLeft.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$buttom?.$border?.$borderRight &&
    css`
      border-right: ${props.$buttom?.$border?.$borderRight.$borderWidth || 1}px
        ${props.$buttom?.$border?.$borderRight.$borderStyle || 'solid'}
        ${props.$buttom?.$border.$borderRight.$borderColor
          ? theme.color[props.$buttom?.$border.$borderRight.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$buttom?.$border?.$borderBottom &&
    css`
      border-bottom: ${props.$buttom?.$border?.$borderBottom.$borderWidth ||
        1}px
        ${props.$buttom?.$border?.$borderBottom.$borderStyle || 'solid'}
        ${props.$buttom?.$border.$borderBottom.$borderColor
          ? theme.color[props.$buttom?.$border.$borderBottom.$borderColor]
          : theme.color.transparent};
    `}
    /* BORDER RADIUS */
    ${props.$buttom?.$border?.$radius
      ? css`
          border-radius: ${props.$buttom?.$border?.$radius.$borderWidth}px;
        `
      : css`
          border-radius: 8px;
        `}
    ${props.$buttom?.$border?.$radiusTopLeft &&
    css`
      border-top-left-radius: ${props.$buttom?.$border?.$radiusTopLeft.$width ||
      8}px;
    `}
    ${props.$buttom?.$border?.$radiusTopRight &&
    css`
      border-top-right-radius: ${props.$buttom?.$border?.$radiusTopRight
        .$width || 8}px;
    `}
    ${props.$buttom?.$border?.$radiusBottomLeft &&
    css`
      border-bottom-left-radius: ${props.$buttom?.$border?.$radiusBottomLeft
        .$width || 8}px;
    `}
    ${props.$buttom?.$border?.$radiusBottomRight &&
    css`
      border-bottom-left-radius: ${props.$buttom?.$border?.$radiusBottomRight
        .$width || 8}px;
    `}
  `}
`;
