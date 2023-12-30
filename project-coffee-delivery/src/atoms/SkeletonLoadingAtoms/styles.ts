import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css, keyframes } from 'styled-components';

type Props = {
  $spacings?: number;
} & typeDefault;

const animation = keyframes`
  from {
    background-position: 0% 0%;
  }
  to {
    background-position: 135% 0%;
  }
`;
export const SketetonContainer = styled.div<Props>`
  ${({ theme, ...props }) => css`
    ${props.$background?.$background &&
    css`
      background-color: ${theme.color[props.$background.$background]};
    `}
    ${props.$color?.$text &&
    css`
      color: ${theme.color[props.$color.$text]};
    `}

    ${props.$spacings &&
    css`
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: ${props.$spacings}px;
    `}
    
    /*POSITION */
    position: ${props.$position?.position || 'relative'};
    ${props.$position?.top &&
    css`
      top: ${props.$position.top}px;
    `}
    ${props.$position?.left &&
    css`
      left: ${props.$position.left}px;
    `}
    ${props.$position?.right &&
    css`
      right: ${props.$position.right}px;
    `}
    ${props.$position?.bottom &&
    css`
      bottom: ${props.$position.bottom}px;
    `}
    ${props.$position?.zIndex &&
    css`
      z-index: ${props.$position.zIndex};
    `}
    /* width: 100%; */
    height: auto;
    flex-direction: column;
    /*Flex */
    display: ${props.$display ? props.$display : 'flex'};
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex.$flex};
    `}
    ${props.$flex?.$flexDirection &&
    css`
      flex-direction: ${props.$flex?.$flexDirection};
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
    ${props.$flex?.$flexWrap &&
    css`
      flex-wrap: ${props.$flex?.$flexWrap};
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
    /*PADDING */
    ${props.$space?.$p &&
    css`
      padding: ${props.$space?.$p ? theme.space.p[props.$space?.$p] : false}rem;
    `}
    ${props.$space?.$pt &&
    css`
      padding-top: ${props.$space?.$pt
        ? theme.space.pt[props.$space?.$pt]
        : false}rem;
    `}
    ${props.$space?.$pl &&
    css`
      padding-left: ${props.$space?.$pl
        ? theme.space.pl[props.$space?.$pl]
        : false}rem;
    `}
    ${props.$space?.$pr &&
    css`
      padding-right: ${props.$space?.$pr
        ? theme.space.pr[props.$space?.$pr]
        : false}rem;
    `}
    ${props.$space?.$pb &&
    css`
      padding-bottom: ${props.$space?.$pb
        ? theme.space.pb[props.$space?.$pb]
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
      padding: 0rem calc(1 * ${theme.space.pdx[props.$space.$pdx]}vw);
    `}
    ${props.$space?.$pdy &&
    css`
      padding: calc(1 * ${theme.space.py[props.$space.$pdy]}vw) 0rem;
    `}

    /*MARGIN */
    ${props.$space?.$m &&
    css`
      margin: ${theme.space.m[props.$space?.$m]}rem;
    `}
    ${props.$space?.$mt &&
    css`
      margin-top: ${theme.space.mt[props.$space?.$mt]}rem;
    `}
    ${props.$space?.$ml &&
    css`
      margin-left: ${theme.space.ml[props.$space?.$ml]}rem;
    `}
    ${props.$space?.$mr &&
    css`
      margin-right: ${theme.space.mr[props.$space?.$mr]}rem;
    `}
    ${props.$space?.$mb &&
    css`
      margin-bottom: ${theme.space.pb[props.$space?.$mb]}rem;
    `}
    ${props.$space?.$mx &&
    css`
      margin: ${theme.space.mx[props.$space.$mx]}rem 0rem;
    `}
    ${props.$space?.$my &&
    css`
      margin: 0rem ${theme.space.my[props.$space.$my]}rem;
    `}
    ${props.$space?.$md &&
    css`
      margin: calc(1 * ${theme.space.md[props.$space.$md]}vw);
    `}
    ${props.$space?.$mdx &&
    css`
      margin: calc(1 * ${theme.space.md[props.$space.$mdx]}vw) 0rem;
    `}
    ${props.$space?.$mdy &&
    css`
      margin: calc(1 * ${theme.space.md[props.$space.$mdy]}vw) 0rem;
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
  `}
`;

export const SketetonContent = styled.div<Props>`
  ${({ theme, ...props }) => css`
    width: 100%;
    ${props.$height?.$height &&
    css`
      height: ${props.$height.$height}rem;
    `}
    opacity: 0.6;
    border-radius: 8px;
    cursor: progress;
    background: rgb(145, 170, 180);
    background: linear-gradient(
      90deg,
      rgba(145, 170, 180, 1) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(145, 170, 180, 1) 100%
    );
    background-size: 400% 400%;

    display: flex;
    align-items: center;
    padding: 1rem;
  `}
  animation: ${animation} 2s ease-in-out infinite;
`;
