import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.fieldset`
  display: flex;
  align-items: flex-end;
  align-items: center;
  flex-grow: 1;
  width: 100%;
  gap: 1rem;
  border: none;
`;

export const InputDefaultContainer = styled.input<AppType>`
  border: none;
  ${({ theme, ...props }) => css`
    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='number'] {
      /* FLEX DEFAULT */

      /*HEIGHT DEFAULT  */

      /*WIDTH DEFAULT  */

      padding: 1rem 2rem;
      /* border: 2px solid transparent; */
      /*BORDER DEFAULT */

      /*BORDER DEFAULT */

      /*BORDER RADIUS DEFAULT */

      &::-webkit-calendar-picker-indicator {
        display: none !important;
      }

      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;

      /*BORDER DEFAULT */

      /*BORDER RADIUS DEFAULT */

      &:focus {
        border-radius: 0.5rem;
      }

      &::placeholder {
      }

      /*HEIGHT DEFAULT  */

      /*WIDTH DEFAULT  */

      /* FLEX DEFAULT */

      /* Padding Default */

      /* Margin Default */

      /*UTILS DEFAULT */

      /*BORDER DEFAULT */

      /*BORDER RADIUS DEFAULT */

      /*COLOR DEFAULT */
    }

    & [type='submit'],
    & [type='select'],
    & [type='reset'] {
      flex-grow: 1;
      /* width: 100%; */
      padding: 1rem 2rem;
      outline: none;
      /* border-radius: 0.5rem; */
      font-size: 1.5rem;

      /*BORDER DEFAULT */

      /*BORDER RADIUS DEFAULT */

      &:focus {
        /*BORDER DEFAULT */

        /*BORDER RADIUS DEFAULT */

        border-radius: 0.5rem;
        /* outline: none; */
      }

      &::placeholder {
      }

      /*HEIGHT DEFAULT  */

      /*WIDTH DEFAULT  */

      /* FLEX DEFAULT */

      /* Padding Default */

      /* Margin Default */

      /*UTILS DEFAULT */

      /*BORDER DEFAULT */

      /*BORDER RADIUS DEFAULT */

      /*COLOR DEFAULT */
    }
  `}
`;

export const InputCheckboxDefaultContainer = styled(InputDefaultContainer)`
  ${({ theme, ...props }) => css`
    &[type='checkbox'] {
      flex-grow: 0 !important;
    }
    border-radius: 0.5rem;
  `}
`;

export const LabelDefaultContainer = styled.label<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
  `}
`;
