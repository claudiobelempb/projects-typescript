import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

// const shadow = () => {
//   return `box-shadow: 0 7px 4px #777;`;
// };

const shrinkLabel = (color: string) => {
  return `
    top: 10px;
    left: 0;
    font-size: 12px;
    color: ${color};
  `;
};

export const Container = styled.fieldset<AppType>`
  ${({ theme, ...props }) => css`
    border: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
  `};
`;

export const InputDefaultContainer = styled.input<AppType>`
  ${({ theme, ...props }) => css`
    &[type='text'],
    &[type='email'],
    &[type='password'],
    &[type='search'],
    &[type='number'] {
      padding: 1rem;
      background-color: ${props.background
        ? theme.variant[props.background]
        : theme.variant.white};
      color: ${props.textcolor
        ? theme.variant[props.textcolor]
        : theme.variant.gray300};
      font-size: 18px;
      display: block;
      width: 100%;
      border: none;
      border-radius: 0;
      margin-top: 3rem;
      border: 1px solid transparent;
      border-bottom: 1px solid ${theme.variant.gray300};
      ${props.isError && css``}
      ${props.isIconLeft &&
      css`
        border-radius: 0 0.5rem 0.5rem 0;
      `}
      ${props.isIconRight &&
      css`
        border-radius: 0.5rem 0 0 0.5rem;
      `}
      &:focus {
        outline: none;
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
    }

    &[type='submit'],
    &[type='select'],
    &[type='reset'] {
      flex-grow: 1;
      width: 100%;
      padding: 1rem 2rem;
      outline: none;
      font-size: 1.5rem;
      border: none;
      max-width: max-content;
      /* border-radius: 0.5rem; */
      background-color: ${props.background
        ? theme.variant[props.background]
        : theme.variant.white};
      color: ${props.textcolor
        ? theme.variant[props.textcolor]
        : theme.variant.white};
    }
  `}
`;

export const LabelDefaultContainer = styled.label<AppType>`
  ${({ theme, ...props }) => css`
    color: ${theme.variant.gray300};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 1rem;
    top: 3.8rem;
    transition: 300ms ease all;

    &.shrink {
      ${shrinkLabel(theme.variant.gray500)};
    }
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
