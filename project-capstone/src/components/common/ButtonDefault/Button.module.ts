import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';
import { BoxDefault } from '../BoxDefault';

export const Container = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    width: 100%;
    gap: 1rem;
    border-radius: 0.5rem;
  `}
`;

export const Content = styled.button<AppType>`
  ${({ theme, ...props }) => css`
    flex-grow: ${props.grow && props.grow};
    width: ${props.width?.value && props.width.value}${props.width?.unit};
    padding: 1rem 2rem;
    height: 4rem;
    text-transform: uppercase;
    font-family: ${theme.fonts.fontFamily.text};
    font-weight: bolder;
    border: none;

    font-size: ${theme.fonts.size.fs16};
    background-color: ${props.backgroundstring ||
    (props.background ? theme.variant[props.background] : theme.variant.black)};
    color: ${props.textcolor
      ? theme.variant[props.textcolor]
      : theme.variant.white};

    &:hover {
      background-color: ${theme.variant.white};
      color: ${theme.variant.black};
      border: 1px solid ${theme.variant.black};
    }

    ${props.btntype === 'inverted' &&
    css`
      background-color: ${theme.variant.white};
      color: ${theme.variant.black};
      border: 1px solid ${theme.variant.black};

      &:hover {
        background-color: ${theme.variant.black};
        color: ${theme.variant.white};
        border: none;
      }
    `}

    ${props.btntype === 'facebook' &&
    css`
      &:hover {
        background-color: ${theme.variant.white} !important;
        color: ${theme.variant.blue400} !important;
      }
    `}

    ${props.btntype === 'google' &&
    css`
      background-color: ${theme.variant.blue400};
      color: ${theme.variant.white};
      border: none;
      &:hover {
        background-color: ${theme.variant.white};
        color: ${theme.variant.black};

        border: 1px solid ${theme.variant.black};
      }
    `}
  `}
`;
