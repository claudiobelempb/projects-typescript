import { InpuType } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const Container = styled.input<InpuType>`
  ${({ theme, ...props }) => css`
    border: none;
    background-color: ${props.$background?.$background
      ? theme.color[props.$background?.$background]
      : theme.color.transparent};

    color: ${props.$color?.$text
      ? theme.color[props.$color.$text]
      : theme.color.white};

    font-size: ${props.$font?.$fsize
      ? theme.font.fs[props.$font.$fsize]
      : theme.font.fs.m16}rem;

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
    ${props.$border?.$radius
      ? css`
          border-radius: ${props.$border?.$radius.$borderWidth}px;
        `
      : css`
          border-radius: 5px;
        `}
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
  
    ${props.$text?.$textAlign &&
    css`
      text-align: ${props.$text?.$textAlign};
    `}
    ${props.$font?.$fweigh &&
    css`
      font-weight: ${props.$font.$fweigh};
    `}
    ${props.$font?.$ffamily &&
    css`
      font-family: ${theme.font.ffamily[props.$font.$ffamily]};
    `}

    ${props.$font?.$fdinamic &&
    css`
      font-size: calc(1 * ${props.$font.$fdinamic}vw);
    `}
    
    /*Flex */
    display: ${props.$display ? props.$display : 'flex'};
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex.$flex};
    `}
    ${props.$flex?.$flexDirection &&
    css`
      flex-direction: ${props.$flex.$flexDirection};
    `}
    ${props.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$flex.$justifyContent};
    `}
    ${props.$flex?.$alingItems &&
    css`
      align-items: ${props.$flex.$alingItems};
    `}
    ${props.$flex?.$alingContent &&
    css`
      align-content: ${props.$flex.$alingContent};
    `}
    ${props.$flex?.$alignSelf &&
    css`
      align-self: ${props.$flex.$alignSelf};
    `}
    ${props.$flex?.$flexWrap &&
    css`
      flex-wrap: ${props.$flex.$flexWrap};
    `}
    ${props.$flex?.$gap &&
    css`
      gap: ${props.$flex.$gap}rem;
    `}
    ${props.$flex?.$rowGap &&
    css`
      row-gap: ${props.$flex.$rowGap}rem;
    `}
    ${props.$flex?.$columnGap &&
    css`
      column-gap: ${props.$flex.$columnGap}rem;
    `}
    ${props.$flex?.$order &&
    css`
      order: ${props.$flex.$order ? props.$flex.$order : 0};
    `}
    ${props.$flex?.$grow &&
    css`
      flex-grow: ${props.$flex.$grow ? props.$flex.$grow : 0};
    `}
    ${props.$flex?.$shrink &&
    css`
      flex-shrink: ${props.$flex.$shrink ? props.$flex.$shrink : 0};
    `}
    ${props.$flex?.$basis &&
    css`
      flex-basis: ${props.$flex.$basis ? props.$flex.$basis : 0}rem;
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

    /*PADDING */

    padding: ${props.$space?.$p ? theme.$space.p[props.$space?.$p] : 1}rem;

    ${props.$space?.$pt &&
    css`
      padding-top: ${props.$space?.$pt
        ? theme.$space.pt[props.$space?.$pt]
        : false}rem;
    `}
    ${props.$space?.$pl &&
    css`
      padding-left: ${props.$space?.$pl
        ? theme.$space.pl[props.$space?.$pl]
        : false}rem;
    `}
    ${props.$space?.$pr &&
    css`
      padding-right: ${props.$space?.$pr
        ? theme.$space.pr[props.$space?.$pr]
        : false}rem;
    `}
    ${props.$space?.$pb &&
    css`
      padding-bottom: ${props.$space?.$pb
        ? theme.$space.pb[props.$space?.$pb]
        : false}rem;
    `}
    ${props.$space?.$px &&
    css`
      padding: ${props.$space.$px ? theme.space.px[props.$space.$px] : false}rem
        0rem;
    `}
    ${props.$space?.$py &&
    css`
      padding: 0rem
        ${props.$space.$py ? theme.space.py[props.$space.$py] : false}rem;
    `}
    ${props.$space?.$pd &&
    css`
      padding: calc(1 * ${theme.space.py[props.$space.$pd]}vw);
    `}
    ${props.$space?.$pdx &&
    css`
      padding: 0rem calc(1 * ${theme.$space.pdx[props.$space.$pdx]}vw);
    `}
    ${props.$space?.$pdy &&
    css`
      padding: calc(1 * ${theme.$space.py[props.$space.$pdy]}vw) 0rem;
    `}

    /*MARGIN */
    ${props.$space?.$m &&
    css`
      margin: ${props.$space?.$m ? theme.space.m[props.$space?.$m] : false}rem;
    `}
    ${props.$space?.$mt &&
    css`
      margin-top: ${props.$space?.$mt
        ? theme.$space.mt[props.$space?.$mt]
        : false}rem;
    `}
    ${props.$space?.$ml &&
    css`
      margin-left: ${props.$space?.$ml
        ? theme.$space.ml[props.$space?.$ml]
        : false}rem;
    `}
    ${props.$space?.$pr &&
    css`
      margin-right: ${props.$space?.$mr
        ? theme.$space.mr[props.$space?.$mr]
        : false}rem;
    `}
    ${props.$space?.$mb &&
    css`
      margin-bottom: ${props.$space?.$mb
        ? theme.$space.pb[props.$space?.$mb]
        : false}rem;
    `}
    ${props.$space?.$mx &&
    css`
      margin: ${props.$space.$mx ? theme.$space.mx[props.$space.$mx] : false}rem
        0rem;
    `}
    ${props.$space?.$py &&
    css`
      margin: 0rem
        ${props.$space.$my ? theme.$space.my[props.$space.$my] : false}rem;
    `}
    ${props.$space?.$md &&
    css`
      p: calc(1 * ${theme.space.md[props.$space.$md]}vw);
    `}
    ${props.$space?.$mdx &&
    css`
      margin: calc(1 * ${props.$space.$mdx}vw) 0rem;
    `}
    ${props.$space?.$mdy &&
    css`
      margin: calc(1 * ${props.$space.$mdy}vw) 0rem;
    `}
  `}
`;
