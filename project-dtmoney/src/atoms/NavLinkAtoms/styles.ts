import { typeDefault } from '@typesDefault/typesDefault';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Container = styled(NavLink)<typeDefault>`
  ${({ theme, ...props }) => css`
    ${props.$background?.$background &&
    css`
      background-color: ${theme.colors[props.$background.$background]};
    `}

    ${props.$colors?.$colors &&
    css`
      color: ${theme.color[props.$colors.$colors]};
    `}
    ${props.$fonts?.$size &&
    css`
      font-size: ${props.$fonts?.$size
        ? theme.fonts.size[props.$fonts?.$size]
        : theme.fonts.size.m24}rem;
    `}
    ${props.$text?.$textAlign &&
    css`
      text-align: ${props.$text?.$textAlign};
    `}
    ${props.$fonts?.$fontWeigh &&
    css`
      font-weight: ${props.$fonts?.$fontWeigh
        ? props.$fonts?.$fontWeigh
        : '400'};
    `}
    ${props.$fonts?.$family &&
    css`
      font-family: '${`${theme.fonts.family[props.$fonts?.$family]}`}';
    `}

    ${props.$fonts?.$dinamic &&
    css`
      font-size: calc(1 * ${props.$fonts?.$dinamic}vw);
    `}
     /*PADDING */
     ${props.$spacings?.$p &&
    css`
      padding: ${theme.spacings[props.$spacings?.$p]}rem;
    `}
    ${props.$spacings?.$pt &&
    css`
      padding-top: ${theme.spacings[props.$spacings?.$pt]}rem;
    `}
    ${props.$spacings?.$pl &&
    css`
      padding-left: ${theme.spacings[props.$spacings?.$pl]}rem;
    `}
    ${props.$spacings?.$pr &&
    css`
      padding-right: ${theme.spacings[props.$spacings?.$pr]}rem;
    `}
    ${props.$spacings?.$pb &&
    css`
      padding-bottom: ${theme.spacings[props.$spacings?.$pb]}rem;
    `}
    ${props.$spacings?.$px &&
    css`
      padding: ${theme.spacings[props.$spacings.$px]}rem;
    `}
    ${props.$spacings?.$py &&
    css`
      padding: 0rem ${theme.spacings[props.$spacings.$py]}rem;
    `}
    ${props.$spacings?.$pd &&
    css`
      padding: calc(1 * ${theme.spacings[props.$spacings.$pd]}vw);
    `}
    ${props.$spacings?.$pdx &&
    css`
      padding: 0rem calc(1 * ${theme.spacings[props.$spacings.$pdx]}vw);
    `}
    ${props.$spacings?.$pdy &&
    css`
      padding: calc(1 * ${theme.spacings[props.$spacings.$pdy]}vw) 0rem;
    `}

    /*MARGIN */
    ${props.$spacings?.$m &&
    css`
      margin: ${theme.spacings[props.$spacings?.$m]}rem;
    `}
    ${props.$spacings?.$mt &&
    css`
      margin-top: ${theme.spacings[props.$spacings?.$mt]}rem;
    `}
    ${props.$spacings?.$ml &&
    css`
      margin-left: ${theme.spacings[props.$spacings?.$ml]}rem;
    `}
    ${props.$spacings?.$mr &&
    css`
      margin-right: ${theme.spacings[props.$spacings?.$mr]}rem;
    `}
    ${props.$spacings?.$mb &&
    css`
      margin-bottom: ${theme.spacings[props.$spacings?.$mb]}rem;
    `}
    ${props.$spacings?.$mx &&
    css`
      margin: ${theme.spacings[props.$spacings.$mx]}rem 0rem;
    `}
    ${props.$spacings?.$my &&
    css`
      margin: 0rem ${theme.spacings[props.$spacings.$my]}rem;
    `}
    ${props.$spacings?.$md &&
    css`
      p: calc(1 * ${theme.spacings[props.$spacings.$md]}vw);
    `}
    ${props.$spacings?.$mdx &&
    css`
      margin: calc(1 * ${theme.spacings[props.$spacings.$mdx]}vw) 0rem;
    `}
    ${props.$spacings?.$mdy &&
    css`
      margin: calc(1 * ${theme.spacings[props.$spacings.$mdy]}vw) 0rem;
    `}

    ${props.$position &&
    css`
      position: ${props.$position.position ? 'absolute' : 'relative'};
      top: ${props.$position.top ? props.$position.top : 0}px;
      left: ${props.$position.left ? props.$position.left : 0}px;
      right: ${props.$position.right ? props.$position.right : 0}px;
      top: ${props.$position.bottom ? props.$position.bottom : 0}px;
      z-index: ${props.$position.zIndex ? props.$position.zIndex : 0};
    `}
    position: relative;
    ${props.$isHover &&
    css`
      & {
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
      }

      &:hover {
        border-bottom: 3px solid ${theme.variant.green_500};
        border-radius: 0;
      }
    `}
    ${props.$isActive &&
    css`
      & {
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
      }

      &.active {
        color: ${theme.variant.green_500};
        border-bottom: 3px solid ${theme.variant.green_500};
        border-radius: 0;
      }
    `}
    /*Flex */
    ${props.$display
      ? css`
          display: ${props.$display};
        `
      : css`
          display: flex;
        `};
    ${props.$flex?.$flexDirection
      ? css`
          flex-direction: ${props.$flex.$flexDirection};
        `
      : css`
          flex-direction: column;
        `};

    ${props.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$flex?.$justifyContent};
    `}
    ${props.$flex?.$alingItems &&
    css`
      align-items: ${props.$flex?.$alingItems};
    `}

    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex.$flex};
    `}
    ${props.$flex?.$alingContent &&
    css`
      align-content: ${props.$flex?.$alingContent};
    `}
    ${props.$flex?.$alignSelf &&
    css`
      align-self: ${props.$flex?.$alignSelf};
    `}
    ${props.$flex?.$flexWrap &&
    css`
      flex-wrap: ${props.$flex?.$flexWrap};
    `}
    ${props.$flex?.$gap &&
    css`
      gap: ${props.$flex?.$gap ? props.$flex?.$basis : 0}rem;
    `}
    ${props.$flex?.$rowGap &&
    css`
      gap: ${props.$flex?.$rowGap ? props.$flex?.$rowGap : 0}rem;
    `}
    ${props.$flex?.$columnGap &&
    css`
      gap: ${props.$flex?.$columnGap ? props.$flex?.$columnGap : 0}rem;
    `}
    ${props.$flex?.$order &&
    css`
      order: ${props.$flex?.$order ? props.$flex?.$order : 0};
    `}
    ${props.$flex?.$grow &&
    css`
      flex-grow: ${props.$flex?.$grow ? props.$flex?.$grow : 0};
    `}
    ${props.$flex?.$shrink &&
    css`
      flex-shrink: ${props.$flex?.$shrink ? props.$flex?.$shrink : 0};
    `}
    ${props.$flex?.$basis &&
    css`
      flex-basis: ${props.$flex?.$basis ? props.$flex?.$basis : 0}rem;
    `}

    /*WIDTH */
    ${props.$width?.$width &&
    css`
      width: ${props.$width.$width}%;
    `};
    ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width.$maxWidth}rem;
    `};
    ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width.$minWidth}rem;
    `};

    /*HEIGHT */
    ${props.$height?.$height &&
    css`
      height: ${props.$height?.$height}%;
    `}
    ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}%;
    `}
    ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}%;
    `}
    

    /* BORDER */
    ${props.$border?.$border &&
    css`
      border: ${props.$border?.$border.$borderWidth || 1}px
        ${props.$border?.$border.$borderStyle || 'solid'}
        ${props.$border.$border.$borderColor
          ? theme.variant[props.$border.$border.$borderColor]
          : theme.variant.transparent};
    `}
    ${props.$border?.$borderTop &&
    css`
      border-top: ${props.$border?.$borderTop.$borderWidth || 1}px
        ${props.$border?.$borderTop.$borderStyle || 'solid'}
        ${props.$border.$borderTop.$borderColor
          ? theme.variant[props.$border.$borderTop.$borderColor]
          : theme.variant.transparent};
    `}
    ${props.$border?.$borderLeft &&
    css`
      border-left: ${props.$border?.$borderLeft.$borderWidth || 1}px
        ${props.$border?.$borderLeft.$borderStyle || 'solid'}
        ${props.$border.$borderLeft.$borderColor
          ? theme.variant[props.$border.$borderLeft.$borderColor]
          : theme.variant.transparent};
    `}
    ${props.$border?.$borderRight &&
    css`
      border-right: ${props.$border?.$borderRight.$borderWidth || 1}px
        ${props.$border?.$borderRight.$borderStyle || 'solid'}
        ${props.$border.$borderRight.$borderColor
          ? theme.variant[props.$border.$borderRight.$borderColor]
          : theme.variant.transparent};
    `}
    ${props.$border?.$borderBottom &&
    css`
      border-bottom: ${props.$border?.$borderBottom.$borderWidth || 1}px
        ${props.$border?.$borderBottom.$borderStyle || 'solid'}
        ${props.$border.$borderBottom.$borderColor
          ? theme.variant[props.$border.$borderBottom.$borderColor]
          : theme.variant.transparent};
    `}
    /* BORDER RADIUS */
    
      border-radius: ${props.$border?.$radius
      ? `${props.$border?.$radius.$borderWidth}px`
      : `${8}px`};

    ${props.$border?.$radiusTopLeft &&
    css`
      border-top-left-radius: ${props.$border?.$radiusTopLeft.$width || 8}px;
    `}
    ${props.$border?.$radiusTopRight &&
    css`
      border-top-right-radius: ${props.$border?.$radiusTopRight.$width || 8}px;
    `}
    ${props.$border?.$radiusBottomLeft &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomLeft.$width ||
      8}px;
    `}
    ${props.$border?.$radiusBottomRight &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomRight.$width ||
      8}px;
    `}
  `}
`;
