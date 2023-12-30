import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const TableAtomsTemplatesContainer = styled.table<typeDefault>`
  ${({ theme, ...props }) => css`
    width: 100%;
    margin: 0 0 2em 0;
    border-collapse: collapse;
    /* background-color: beige; */
    text-align: left;

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
          ? theme.variant[props.$table?.$th?.$variant?.$background]
          : theme.variant.gray_500};
        color: ${props.$table?.$th?.$variant?.$color
          ? theme.variant[props.$table?.$th?.$variant?.$color]
          : theme.variant.gray_100};
        font-size: ${theme.font.fs.s14}rem;
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
        background-color: ${theme.variant.gray_500};
        border-top: 4px solid ${theme.variant.gray_600};
        text-align: left;
        font-size: ${theme.font.fs.s14}rem;
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
    ${props.$border?.$radius &&
    css`
      border-radius: ${props.$border?.$radius.$borderWidth || 8}px;
    `}
    ${props.$border?.$radiusTopLeft &&
    css`
      border-top-left-radius: ${props.$border?.$radiusTopLeft
        .$leftBorderWidth || 8}px;
    `}
    ${props.$border?.$radiusTopRight &&
    css`
      border-top-right-radius: ${props.$border.$radiusTopRight
        .$rightBorderWidth || 8}px;
    `}
    ${props.$border?.$radiusBottomLeft &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomLeft
        .$leftBorderWidth || 8}px;
    `}
    ${props.$border?.$radiusBottomRight &&
    css`
      border-bottom-left-radius: ${props.$border?.$radiusBottomRight
        .$rightBorderWidth || 8}px;
    `}
  `}
`;
