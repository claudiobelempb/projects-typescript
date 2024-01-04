import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const TableAtomsTemplatesContainer = styled.table<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    margin: 0 0 2em 0;
    border-collapse: collapse;
    /* background-color: beige; */
    text-align: left;
    ${props.$colors?.$colors &&
    css`
      color: ${theme.colors[props.$colors.$colors]};
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

    thead {
      padding: 8px 0px 8px 0px;
      width: 100%;
      tr {
        width: 100%;
      }
      th {
        /* border: 1px solid #000; */
        width: 100%;
        background-color: ${props.$table?.$th?.$variant?.$background
          ? theme.colors[props.$table?.$th?.$variant?.$background]
          : theme.colors.green700};
        color: ${props.$table?.$th?.$variant?.$color
          ? theme.colors[props.$table?.$th?.$variant?.$color]
          : theme.colors.green500};
        font-size: ${theme.fonts.size.s14}rem;
        line-height: 1.6;
        padding: 1rem;

        &:first-child {
          border-top-left-radius: 8px;
          padding-left: 1.5rem;
          width: 50%;
        }

        &:last-child {
          border-top-right-radius: 8px;
          padding-right: 1.5rem;
        }
      }
    }

    tfoot {
      /* padding: 5px 0px 5px 0px; */
    }

    tbody {
      padding: 8px 0px 8px 0px;

      tr {
        border-bottom: 1px solid #ccc;

        tr:first-child td {
          border-top: 2px solid #666;
        }

        tr:last-child td {
          border-bottom: 2px solid #666;
        }

        /* Pega as td de uma em uma */

        /* .table-default tbody tr:nth-child(1) td {
            background: red;
        } */

        /* Pega todas td impar */
        /* .table-default tbody tr:nth-child(odd) td {
            background: red;
        } */

        /* Pega todas td pares */
        tr:nth-child(even) td {
          background: #eee;
        }

        /* TABLE ALTERNATE */
        &--alteration {
          border: 1px solid #ccc;

          tbody tr:first-child td {
            border-top: 1px solid #ccc;

            tr:last-child td {
              border-bottom: 1px solid #ccc;
            }
          }
        }
      }

      td {
        background-color: ${theme.colors.shape100};
        border-top: 4px solid ${theme.colors.yellow700};
        text-align: left;
        font-size: ${theme.fonts.size.s14}rem;
        line-height: 1.6;
        padding: 1rem;

        &:first-child {
          width: 50%;
          padding-left: 1.5rem;
        }

        &:last-child {
          padding-right: 1.5rem;
        }
      }
    }

    position: relative;
    width: 100%;
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
    ${props.$width?.$widthDinamic &&
    css`
      width: calc(100vh * ${`${props.$width.$widthDinamic}rem`});
    `}
    width: ${props.$width?.$width ? `${props.$width.$width}vw` : `${100}vw`};
    max-width: ${props.$width?.$maxWidth
      ? `${props.$width.$maxWidth}rem`
      : `${100}%`};
    min-width: ${props.$width?.$minWidth
      ? `${props.$width.$minWidth}rem`
      : `${5}rem`};

    /*HEIGT */
    height: ${props.$height?.$height ? `${props.$height.$height}vh` : `auto`};
    max-height: ${props.$height?.$maxHeight
      ? `${props.$height.$maxHeight}rem`
      : `${100}%`};
    min-height: ${props.$height?.$minHeight
      ? `${props.$height.$minHeight}rem`
      : `${5}rem`};

    /* BORDER */
    ${props.$border?.$border &&
    css`
      border: ${props.$border?.$border.$borderWidth || 1}px
        ${props.$border?.$border.$borderStyle || 'solid'}
        ${props.$border.$border.$borderColor
          ? theme.colors[props.$border.$border.$borderColor]
          : theme.colors.transparent};
    `}
    ${props.$border?.$borderTop &&
    css`
      border-top: ${props.$border?.$borderTop.$borderWidth || 1}px
        ${props.$border?.$borderTop.$borderStyle || 'solid'}
        ${props.$border.$borderTop.$borderColor
          ? theme.colors[props.$border.$borderTop.$borderColor]
          : theme.colors.transparent};
    `}
    ${props.$border?.$borderLeft &&
    css`
      border-left: ${props.$border?.$borderLeft.$borderWidth || 1}px
        ${props.$border?.$borderLeft.$borderStyle || 'solid'}
        ${props.$border.$borderLeft.$borderColor
          ? theme.colors[props.$border.$borderLeft.$borderColor]
          : theme.colors.transparent};
    `}
    ${props.$border?.$borderRight &&
    css`
      border-right: ${props.$border?.$borderRight.$borderWidth || 1}px
        ${props.$border?.$borderRight.$borderStyle || 'solid'}
        ${props.$border.$borderRight.$borderColor
          ? theme.colors[props.$border.$borderRight.$borderColor]
          : theme.colors.transparent};
    `}
    ${props.$border?.$borderBottom &&
    css`
      border-bottom: ${props.$border?.$borderBottom.$borderWidth || 1}px
        ${props.$border?.$borderBottom.$borderStyle || 'solid'}
        ${props.$border.$borderBottom.$borderColor
          ? theme.colors[props.$border.$borderBottom.$borderColor]
          : theme.colors.transparent};
    `}
    /* BORDER RADIUS */
    ${props.$border?.$radius &&
    css`
      border-radius: ${props.$border?.$radius.$borderWidth || 8}px;
    `}
    ${props.$border?.$radiusTopLeft &&
    css`
      border-top-left-radius: ${props.$border?.$radiusTopLeft.$width || 8}px;
    `}
    ${props.$border?.$radiusTopRight &&
    css`
      border-top-right-radius: ${props.$border.$radiusTopRight.$width || 8}px;
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
