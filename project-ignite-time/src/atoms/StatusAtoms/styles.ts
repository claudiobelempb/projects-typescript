import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const StatusAtomsContainer = styled.span<typeDefault>`
  ${({ theme, ...props }) => css`
    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${props.$variant?.$vstatus
        ? theme.variant[props.$variant?.$vstatus]
        : theme.variant.green_700};
    }

    ${props.$variant?.$vbackgroud &&
    css`
      background-color: ${props.$variant?.$vbackgroud
        ? theme.variant[props.$variant?.$vbackgroud]
        : theme.variant.transparent};
    `}
    ${props.$variant?.$vcolor &&
    css`
      color: ${props.$variant?.$vcolor
        ? theme.variant[props.$variant?.$vcolor]
        : theme.variant.white};
    `}
    ${props.$font?.$fsize &&
    css`
      font-size: ${props.$font?.$fsize
        ? theme.font.fs[props.$font?.$fsize]
        : theme.font.fs.m16}rem;
    `}
    ${props.$text?.$textAlign &&
    css`
      text-align: ${props.$text?.$textAlign};
    `}
    ${props.$font?.$fweigh &&
    css`
      font-weight: ${props.$font?.$fweigh};
    `}
    ${props.$font?.$ffamily &&
    css`
      font-family: ${props.$font.$ffamily
        ? theme.font.ffamily[props.$font.$ffamily]
        : theme.font.ffamily};
    `}

    ${props.$font?.$fdinamic &&
    css`
      font-size: calc(1 * ${props.$font?.$fdinamic}vw);
    `}
    
    /*Flex */
    display: ${props.$display ? props.$display : 'flex'};
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex};
    `}
    ${props.$flex?.$flexDirection &&
    css`
      flex-direction: ${props.$flex.$flexDirection};
    `}
    ${props.$flex?.$justifyContent &&
    css`
      justify-content: ${props.$flex.$justifyContent};
    `}
    
    align-items: ${props.$flex?.$alingItems
      ? props.$flex?.$alingItems
      : 'center'};

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
      gap: ${props.$flex.$gap ? props.$flex.$basis : 0}rem;
    `}
  
    row-gap: ${props.$flex?.$rowGap ? props.$flex.$rowGap : 0.5}rem;
    column-gap: ${props.$flex?.$columnGap ? props.$flex.$columnGap : 0.5}rem;

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
    
      ${props.$width?.$width &&
    css`
      width: ${props.$width.$width}rem;
    `}
      ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width?.$minWidth}rem;
    `}
      ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width?.$maxWidth}rem;
    `}
     
      ${props.$height?.$height &&
    css`
      height: ${props.$height?.$height}rem;
    `}
      ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}rem;
    `}
      ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}rem;
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
      margin: ${props.$space?.$m ? theme.space.m[props.$space?.$m] : false}rem;
    `}
    ${props.$space?.$mt &&
    css`
      margin-top: ${props.$space?.$mt
        ? theme.space.mt[props.$space?.$mt]
        : false}rem;
    `}
    ${props.$space?.$ml &&
    css`
      margin-left: ${props.$space?.$ml
        ? theme.space.ml[props.$space?.$ml]
        : false}rem;
    `}
    ${props.$space?.$pr &&
    css`
      margin-right: ${props.$space?.$mr
        ? theme.space.mr[props.$space?.$mr]
        : false}rem;
    `}
    ${props.$space?.$mb &&
    css`
      margin-bottom: ${props.$space?.$mb
        ? theme.space.pb[props.$space?.$mb]
        : false}rem;
    `}
    ${props.$space?.$mx &&
    css`
      margin: ${props.$space.$mx ? theme.space.mx[props.$space.$mx] : false}rem
        0rem;
    `}
    ${props.$space?.$py &&
    css`
      margin: 0rem
        ${props.$space.$my ? theme.space.my[props.$space.$my] : false}rem;
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
