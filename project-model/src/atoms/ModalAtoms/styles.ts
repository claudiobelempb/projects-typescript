import * as Dialog from '@radix-ui/react-dialog';
import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const DialogOverlay = styled(Dialog.Overlay)<typeDefault>`
  ${({ theme, ...props }) => css`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    ${props.$background?.$background &&
    css`
      background-color: ${theme.colors[props.$background.$background]};
    `}
    ${props.$colors?.$color &&
    css`
      color: ${theme.colors[props.$colors.$color]};
    `}

   /*POSITION */
   ${props.$position?.$position &&
    css`
      position: ${props.$position.$position};
      top: ${`${props.$position.$top}rem`};
      left: ${`${props.$position.$left}rem`};
      right: ${`${props.$position.$right}rem`};
      bottom: ${`${props.$position.$bottom}rem`};
      z-index: ${props.$position.$zIndex};
    `};
    /* width: 100%; */
    height: auto;

    /*Flex */
    display: ${props.$display ? props.$display : 'flex'};
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex.$flex};
    `}
    ${props.$flex?.$direction &&
    css`
      flex-direction: ${props.$flex?.$direction};
    `}
    ${props.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$flex?.$justifyContent};
    `}
    ${props.$flex?.$alingItems &&
    css`
      align-items: ${props.$flex?.$alingItems};
    `}
    ${props.$flex?.$alingContent &&
    css`
      align-content: ${props.$flex?.$alingContent};
    `}
    ${props.$flex?.$alignSelf &&
    css`
      align-self: ${props.$flex?.$alignSelf};
    `}
    ${props.$flex?.$wrap &&
    css`
      flex-wrap: ${props.$flex?.$wrap};
    `}
    ${props.$flex?.$gap &&
    css`
      gap: ${props.$flex?.$gap}rem;
    `}
    ${props.$flex?.$rowGap &&
    css`
      row-gap: ${props.$flex?.$rowGap}rem;
    `}
    ${props.$flex?.$columnGap &&
    css`
      column-gap: ${props.$flex?.$columnGap}rem;
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
     ${props.$width?.$width
      ? css`
          width: ${props.$width?.$width}%;
        `
      : css`
          width: 100%;
        `}
    ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width?.$maxWidth}rem;
    `}
    ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width?.$minWidth}rem;
    `}
    
    /*HEIGT */
    ${props.$height?.$height &&
    css`
      height: ${props.$height?.$height
        ? `${props.$height.$height}rem`
        : `100vh`};
    `}
    ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}rem;
    `}
    ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}rem;
    `}
 
    /* BORDER */
    ${props.$border?.$border &&
    css`
      border: ${props.$border?.$border.$borderWidth || 1}px
        ${props.$border?.$border.$borderStyle || 'solid'}
        ${props.$border?.$border.$borderColor
          ? theme.color[props.$border.$border.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderTop &&
    css`
      border-top: ${props.$border?.$borderTop.$borderWidth || 1}px
        ${props.$border?.$borderTop.$borderStyle || 'solid'}
        ${props.$border.$borderTop.$borderColor
          ? theme.color[props.$border.$borderTop.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderLeft &&
    css`
      border-left: ${props.$border?.$borderLeft.$borderWidth || 1}px
        ${props.$border?.$borderLeft.$borderStyle || 'solid'}
        ${props.$border.$borderLeft.$borderColor
          ? theme.color[props.$border.$borderLeft.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderRight &&
    css`
      border-right: ${props.$border?.$borderRight.$borderWidth || 1}px
        ${props.$border?.$borderRight.$borderStyle || 'solid'}
        ${props.$border.$borderRight.$borderColor
          ? theme.color[props.$border.$borderRight.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderBottom &&
    css`
      border-bottom: ${props.$border?.$borderBottom.$borderWidth || 1}px
        ${props.$border?.$borderBottom.$borderStyle || 'solid'}
        ${props.$border.$borderBottom.$borderColor
          ? theme.color[props.$border.$borderBottom.$borderColor]
          : theme.color.transparent};
    `}
    /* BORDER RADIUS */
    ${props.$border?.$radius
      ? css`
          border-radius: ${props.$border?.$radius.$borderWidth}px;
        `
      : css`
          border-radius: 8px;
        `}
    ${props.$border?.$radiusTopLeft &&
    css`
      border-top-left-radius: ${props.$border?.$radiusTopLeft.$width}rem;
    `}
    ${props.$border?.$radiusTopRight &&
    css`
      border-top-right-radius: ${props.$border?.$radiusTopRight.$width}rem;
    `}
    ${props.$border?.$radiusBottomLeft &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomLeft.$width}rem;
    `}
    ${props.$border?.$radiusBottomRight &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomRight.$width}rem;
    `}

    /*PADDING */
    ${props.$spacings?.$p &&
    css`
      padding: ${props.$spacings?.$p}rem;
    `}
    ${props.$spacings?.$pt &&
    css`
      padding-top: ${props.$spacings?.$pt}rem;
    `}
    ${props.$spacings?.$pl &&
    css`
      padding-left: ${props.$spacings?.$pl}rem;
    `}
    ${props.$spacings?.$pr &&
    css`
      padding-right: ${props.$spacings?.$pr}rem;
    `}
    ${props.$spacings?.$pb &&
    css`
      padding-bottom: ${props.$spacings?.$pb}rem;
    `}
    ${props.$spacings?.$px &&
    css`
      padding: ${props.$spacings.$px}rem;
    `}
    ${props.$spacings?.$py &&
    css`
      padding: 0rem ${props.$spacings.$py}rem;
    `}
    ${props.$spacings?.$pd &&
    css`
      padding: calc(1 * ${props.$spacings.$pd}vw);
    `}
    ${props.$spacings?.$pdx &&
    css`
      padding: 0rem calc(1 * ${props.$spacings.$pdx}vw);
    `}
    ${props.$spacings?.$pdy &&
    css`
      padding: calc(1 * ${props.$spacings.$pdy}vw) 0rem;
    `}

    /*MARGIN */
    ${props.$spacings?.$m &&
    css`
      margin: ${props.$spacings?.$m}rem;
    `}
    ${props.$spacings?.$mt &&
    css`
      margin-top: ${props.$spacings?.$mt}rem;
    `}
    ${props.$spacings?.$ml &&
    css`
      margin-left: ${props.$spacings?.$ml}rem;
    `}
    ${props.$spacings?.$mr &&
    css`
      margin-right: ${props.$spacings?.$mr}rem;
    `}
    ${props.$spacings?.$mb &&
    css`
      margin-bottom: ${props.$spacings?.$mb}rem;
    `}
    ${props.$spacings?.$mx &&
    css`
      margin: ${props.$spacings.$mx}rem 0rem;
    `}
    ${props.$spacings?.$my &&
    css`
      margin: 0rem ${props.$spacings.$my}rem;
    `}
    ${props.$spacings?.$md &&
    css`
      p: calc(1 * ${props.$spacings.$md}vw);
    `}
    ${props.$spacings?.$mdx &&
    css`
      margin: calc(1 * ${props.$spacings.$mdx}vw) 0rem;
    `}
    ${props.$spacings?.$mdy &&
    css`
      margin: calc(1 * ${props.$spacings.$mdy}vw) 0rem;
    `}

    /* OVERFLOW */
    ${props.$overflow &&
    css`
      overflow: ${props.$overflow ? props.$overflow : 'hidden'};
    `}
    ${props.$overflow &&
    css`
      overflow-x: ${props.$overflowX ? props.$overflowX : 'hidden'};
    `}
    ${props.$overflow &&
    css`
      overflow-y: ${props.$overflowY ? props.$overflowY : 'hidden'};
    `} 
    /* GRID */
    ${props.$grid &&
    css`
      display: ${props.$grid.$grid};
    `}
    ${props.$grid?.$gridTemplateColumns &&
    css`
      display: grid;
      grid-template-columns:
        [container-start] repeat(
          ${props.$grid.$gridTemplateColumns},
          minmax(min-content, 1fr)
        )
        [container-end];
    `}
    ${props.$grid?.$gridColumn?.$span === 'span' &&
    css`
      grid-column: ${props.$grid.$gridColumn.$start} /
        ${props.$grid.$gridColumn.$span} ${props.$grid.$gridColumn.$end};
    `}

    ${props.$grid?.$gridColumn?.$span === '' &&
    css`
      grid-column: ${props.$grid.$gridColumn.$start} /
        ${props.$grid.$gridColumn.$end};
    `}

    ${props.$grid?.$gridRow?.$span === 'span' &&
    css`
      grid-row: ${props.$grid.$gridRow.$start} / ${props.$grid.$gridRow.$span}
        ${props.$grid.$gridRow.$end};
    `}

    ${props.$grid?.$gridRow?.$span === '' &&
    css`
      grid-row: ${props.$grid.$gridRow.$start} / ${props.$grid.$gridRow.$end};
    `}
    ${props.$grid?.$gridTemplateColumnsStatic &&
    css`
      grid-template-columns: repeat(
      ${props.$grid.$gridTemplateColumnsStatic.$repeatColumns},
      minmax(${props.$grid.$gridTemplateColumnsStatic.$minMax} 0rem, 1fr)
    `}
    ${props.$grid?.$gridTemplateRows &&
    css`
      grid-column: container-start / container-end;
    `}
  `}
`;

export const DialogContent = styled(Dialog.Content)<typeDefault>`
  ${({ theme, ...props }) => css`
    max-width: 53.5rem;
    min-height: max-content;
    border-radius: 6px;
    padding: 4.8rem;
    background-color: ${theme.colors.gray800};
    position: fixed;
    top: 50%;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
    ${props.$background?.$background &&
    css`
      background-color: ${theme.colors[props.$background.$background]};
    `}
    ${props.$colors?.$color &&
    css`
      color: ${theme.colors[props.$colors.$color]};
    `}

   /*POSITION */
   ${props.$position?.$position &&
    css`
      position: ${props.$position.$position};
      top: ${`${props.$position.$top}rem`};
      left: ${`${props.$position.$left}rem`};
      right: ${`${props.$position.$right}rem`};
      bottom: ${`${props.$position.$bottom}rem`};
      z-index: ${props.$position.$zIndex};
    `};

    /*Flex */
    ${props.$display &&
    css`
      display: ${props.$display};
    `};
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex.$flex};
    `}
    ${props.$flex?.$direction &&
    css`
      flex-direction: ${props.$flex?.$direction};
    `}
    ${props.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$flex?.$justifyContent};
    `}
    ${props.$flex?.$alingItems &&
    css`
      align-items: ${props.$flex?.$alingItems};
    `}
    ${props.$flex?.$alingContent &&
    css`
      align-content: ${props.$flex?.$alingContent};
    `}
    ${props.$flex?.$alignSelf &&
    css`
      align-self: ${props.$flex?.$alignSelf};
    `}
    ${props.$flex?.$wrap &&
    css`
      flex-wrap: ${props.$flex?.$wrap};
    `}
    ${props.$flex?.$gap &&
    css`
      gap: ${props.$flex?.$gap}rem;
    `}
    ${props.$flex?.$rowGap &&
    css`
      row-gap: ${props.$flex?.$rowGap}rem;
    `}
    ${props.$flex?.$columnGap &&
    css`
      column-gap: ${props.$flex?.$columnGap}rem;
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
     ${props.$width?.$width
      ? css`
          width: ${props.$width?.$width}%;
        `
      : css`
          width: 100%;
        `}
    ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width?.$maxWidth}rem;
    `}
    ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width?.$minWidth}rem;
    `}
    
    /*HEIGT */
    ${props.$height?.$height &&
    css`
      height: ${props.$height?.$height
        ? `${props.$height.$height}rem`
        : `100vh`};
    `}
    ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}rem;
    `}
    ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}rem;
    `}
 
    /* BORDER */
    ${props.$border?.$border &&
    css`
      border: ${props.$border?.$border.$borderWidth || 1}px
        ${props.$border?.$border.$borderStyle || 'solid'}
        ${props.$border?.$border.$borderColor
          ? theme.color[props.$border.$border.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderTop &&
    css`
      border-top: ${props.$border?.$borderTop.$borderWidth || 1}px
        ${props.$border?.$borderTop.$borderStyle || 'solid'}
        ${props.$border.$borderTop.$borderColor
          ? theme.color[props.$border.$borderTop.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderLeft &&
    css`
      border-left: ${props.$border?.$borderLeft.$borderWidth || 1}px
        ${props.$border?.$borderLeft.$borderStyle || 'solid'}
        ${props.$border.$borderLeft.$borderColor
          ? theme.color[props.$border.$borderLeft.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderRight &&
    css`
      border-right: ${props.$border?.$borderRight.$borderWidth || 1}px
        ${props.$border?.$borderRight.$borderStyle || 'solid'}
        ${props.$border.$borderRight.$borderColor
          ? theme.color[props.$border.$borderRight.$borderColor]
          : theme.color.transparent};
    `}
    ${props.$border?.$borderBottom &&
    css`
      border-bottom: ${props.$border?.$borderBottom.$borderWidth || 1}px
        ${props.$border?.$borderBottom.$borderStyle || 'solid'}
        ${props.$border.$borderBottom.$borderColor
          ? theme.color[props.$border.$borderBottom.$borderColor]
          : theme.color.transparent};
    `}
    /* BORDER RADIUS */
    ${props.$border?.$radius
      ? css`
          border-radius: ${props.$border?.$radius.$borderWidth}px;
        `
      : css`
          border-radius: 8px;
        `}
    ${props.$border?.$radiusTopLeft &&
    css`
      border-top-left-radius: ${props.$border?.$radiusTopLeft.$width}rem;
    `}
    ${props.$border?.$radiusTopRight &&
    css`
      border-top-right-radius: ${props.$border?.$radiusTopRight.$width}rem;
    `}
    ${props.$border?.$radiusBottomLeft &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomLeft.$width}rem;
    `}
    ${props.$border?.$radiusBottomRight &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomRight.$width}rem;
    `}

    /*PADDING */
    ${props.$spacings?.$p &&
    css`
      padding: ${props.$spacings?.$p}rem;
    `}
    ${props.$spacings?.$pt &&
    css`
      padding-top: ${props.$spacings?.$pt}rem;
    `}
    ${props.$spacings?.$pl &&
    css`
      padding-left: ${props.$spacings?.$pl}rem;
    `}
    ${props.$spacings?.$pr &&
    css`
      padding-right: ${props.$spacings?.$pr}rem;
    `}
    ${props.$spacings?.$pb &&
    css`
      padding-bottom: ${props.$spacings?.$pb}rem;
    `}
    ${props.$spacings?.$px &&
    css`
      padding: ${props.$spacings.$px}rem;
    `}
    ${props.$spacings?.$py &&
    css`
      padding: 0rem ${props.$spacings.$py}rem;
    `}
    ${props.$spacings?.$pd &&
    css`
      padding: calc(1 * ${props.$spacings.$pd}vw);
    `}
    ${props.$spacings?.$pdx &&
    css`
      padding: 0rem calc(1 * ${props.$spacings.$pdx}vw);
    `}
    ${props.$spacings?.$pdy &&
    css`
      padding: calc(1 * ${props.$spacings.$pdy}vw) 0rem;
    `}

    /*MARGIN */
    ${props.$spacings?.$m &&
    css`
      margin: ${props.$spacings?.$m}rem;
    `}
    ${props.$spacings?.$mt &&
    css`
      margin-top: ${props.$spacings?.$mt}rem;
    `}
    ${props.$spacings?.$ml &&
    css`
      margin-left: ${props.$spacings?.$ml}rem;
    `}
    ${props.$spacings?.$mr &&
    css`
      margin-right: ${props.$spacings?.$mr}rem;
    `}
    ${props.$spacings?.$mb &&
    css`
      margin-bottom: ${props.$spacings?.$mb}rem;
    `}
    ${props.$spacings?.$mx &&
    css`
      margin: ${props.$spacings.$mx}rem 0rem;
    `}
    ${props.$spacings?.$my &&
    css`
      margin: 0rem ${props.$spacings.$my}rem;
    `}
    ${props.$spacings?.$md &&
    css`
      p: calc(1 * ${props.$spacings.$md}vw);
    `}
    ${props.$spacings?.$mdx &&
    css`
      margin: calc(1 * ${props.$spacings.$mdx}vw) 0rem;
    `}
    ${props.$spacings?.$mdy &&
    css`
      margin: calc(1 * ${props.$spacings.$mdy}vw) 0rem;
    `}

    /* OVERFLOW */
    ${props.$overflow &&
    css`
      overflow: ${props.$overflow ? props.$overflow : 'hidden'};
    `}
    ${props.$overflow &&
    css`
      overflow-x: ${props.$overflowX ? props.$overflowX : 'hidden'};
    `}
    ${props.$overflow &&
    css`
      overflow-y: ${props.$overflowY ? props.$overflowY : 'hidden'};
    `} 
    /* GRID */
    ${props.$grid &&
    css`
      display: ${props.$grid.$grid};
    `}
    ${props.$grid?.$gridTemplateColumns &&
    css`
      display: grid;
      grid-template-columns:
        [container-start] repeat(
          ${props.$grid.$gridTemplateColumns},
          minmax(min-content, 1fr)
        )
        [container-end];
    `}
    ${props.$grid?.$gridColumn?.$span === 'span' &&
    css`
      grid-column: ${props.$grid.$gridColumn.$start} /
        ${props.$grid.$gridColumn.$span} ${props.$grid.$gridColumn.$end};
    `}

    ${props.$grid?.$gridColumn?.$span === '' &&
    css`
      grid-column: ${props.$grid.$gridColumn.$start} /
        ${props.$grid.$gridColumn.$end};
    `}

    ${props.$grid?.$gridRow?.$span === 'span' &&
    css`
      grid-row: ${props.$grid.$gridRow.$start} / ${props.$grid.$gridRow.$span}
        ${props.$grid.$gridRow.$end};
    `}

    ${props.$grid?.$gridRow?.$span === '' &&
    css`
      grid-row: ${props.$grid.$gridRow.$start} / ${props.$grid.$gridRow.$end};
    `}
    ${props.$grid?.$gridTemplateColumnsStatic &&
    css`
      grid-template-columns: repeat(
      ${props.$grid.$gridTemplateColumnsStatic.$repeatColumns},
      minmax(${props.$grid.$gridTemplateColumnsStatic.$minMax} 0rem, 1fr)
    `}
    ${props.$grid?.$gridTemplateRows &&
    css`
      grid-column: container-start / container-end;
    `}
  `}
`;
