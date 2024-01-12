import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const StatusAtomsContainer = styled.span<typeDefault>`
  ${({ theme, ...props }) => css`
    &::before {
      content: '';
      width: 0.5rem;
      height: 0.5rem;
      border-radius: 50%;
      background-color: ${props.$background?.$background
        ? theme.color[props.$background?.$background]
        : theme.color.transparent};
    }

    ${props.$background?.$background &&
    css`
      background-color: ${theme.colors[props.$background.$background]};
    `}

    ${props.$colors?.$color &&
    css`
      color: ${theme.color[props.$colors.$color]};
    `}
    ${props.$fonts?.$size &&
    css`
      font-size: ${props.$fonts?.$size}rem;
    `}
    ${props.$text?.$textAlign &&
    css`
      text-align: ${props.$text?.$textAlign};
    `}
    ${props.$fonts?.$weigh &&
    css`
      font-weight: ${props.$fonts?.$weigh ? props.$fonts?.$weigh : '400'};
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
    ${props.$text?.$textAlign &&
    css`
      text-align: ${props.$text?.$textAlign};
    `}
    
    /*Flex */
    display: ${props.$display ? props.$display : 'flex'};
    ${props.$flex?.$flex &&
    css`
      flex: ${props.$flex};
    `}
    ${props.$flex?.$direction &&
    css`
      flex-direction: ${props.$flex.$direction};
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
    ${props.$flex?.$wrap &&
    css`
      flex-wrap: ${props.$flex.$wrap};
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
  `}
`;
