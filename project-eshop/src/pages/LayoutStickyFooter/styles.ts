import { BoxDefault } from 'components/common/BoxDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    background-color: ${props.backgroundColor &&
    theme.variant[props.backgroundColor]};
  `}
`;

export const Content = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    width: 90%;
    margin: 0 auto;
    background-color: ${props.backgroundColor &&
    theme.variant[props.backgroundColor]};
  `}
`;

export const Box = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;
