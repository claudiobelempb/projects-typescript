import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.fieldset<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    flex-grow: 1;
    /* width: 100%; */
    /* gap: 1rem; */
    border: none;
    justify-content: center;
  `};
`;

export const InputDefaultContainer = styled.input<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    height: 4rem;

    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='search'],
    &[type='number'] {
      /* FLEX DEFAULT */

      /*HEIGHT DEFAULT  */

      /*WIDTH DEFAULT  */

      padding: 1rem 2rem;
      /*BORDER DEFAULT */
      border: 1px solid transparent;
      ${props.isError && css``}
      /*BORDER RADIUS DEFAULT */
      border-radius: 0.5rem;
      ${props.isIconLeft &&
      css`
        border-radius: 0 0.5rem 0.5rem 0;
      `}
      ${props.isIconRight &&
      css`
        border-radius: 0.5rem 0 0 0.5rem;
      `}
      &:focus {
        /*BORDER DEFAULT */
        /* border: 1px solid red; */
        /*BORDER RADIUS DEFAULT */
      }

      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }

      ${props.disabled &&
      css`
        &:disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
      `}

      outline: none;
      font-size: 1.5rem;
      /*HEIGHT DEFAULT  */
    }
    /*WIDTH DEFAULT  */
    width: 100%;
    /* FLEX DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    & [type='submit'],
    & [type='select'],
    & [type='reset'] {
      flex-grow: 1;
      /* width: 100%; */
      padding: 1rem 2rem;
      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;

      border-radius: 0.5rem;
      /* outline: none; *

       /*HEIGHT DEFAULT  */

      /*WIDTH DEFAULT  */

      /* FLEX DEFAULT */

      /* Padding Default */
    }
    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */
  `}
`;

export const LabelDefaultContainer = styled.label<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
  `}
`;

export const IconContent = styled.button<AppType>`
  ${({ theme, ...props }) => css`
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    border: none;
    background-color: ${({ theme }) => theme.variant.orange500};
    ${props.isIconLeft &&
    css`
      border-radius: 0.5rem 0 0 0.5rem;
    `}
    ${props.isIconRight &&
    css`
      border-radius: 0 0.5rem 0.5rem 0;
    `}
  `}
`;
