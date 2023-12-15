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

export const TextAreaDefaultContainer = styled.textarea<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
    outline: none;

    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid hsla(0, 0%, 40%, 0.4);

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */

    /* FLEX DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /*HEIGHT DEFAULT  */

    /*WIDTH DEFAULT  */
  `}
`;

export const LabelDefaultContainer = styled.label<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: max-content;
    font-size: 1.5rem;
  `}
`;
