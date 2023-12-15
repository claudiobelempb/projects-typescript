import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const ContainerH1 = styled.h1<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: ${theme.fonts.size.fd84};
    color: ${props.textcolor && theme.variant[props.textcolor]};
  `}
`;

export const ContainerH2 = styled.h2<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: ${theme.fonts.size.fd54};
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;

export const ContainerH3 = styled.h3<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: ${theme.fonts.size.fd23};
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;

export const ContainerH4 = styled.h4<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: ${theme.fonts.size.fd30};
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;

export const ContainerH5 = styled.h5<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: ${theme.fonts.size.fd19};
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;

export const ContainerH6 = styled.h6<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    font-size: ${theme.fonts.size.fs16};
    color: ${props.textColor && theme.variant[props.textColor]};
  `}
`;
