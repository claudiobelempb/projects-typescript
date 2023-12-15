import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const ContainerParagraph = styled.p<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: 1.6rem;
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;

export const ContainerStrong = styled.strong<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: 1.6rem;
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;

export const ContainerSpan = styled.span<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: 1.6rem;
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;
