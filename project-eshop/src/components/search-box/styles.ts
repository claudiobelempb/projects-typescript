import { InputDefault } from 'components/common/InputDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
  `}
`;

export const Content = styled(InputDefault)<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    flex-direction: column;
    color: ${props.textcolor && theme.variant[props.textcolor]};
    background-color: ${props.background && theme.variant[props.background]};
    height: 5rem;
    max-width: 35rem;

    &::placeholder {
      color: ${props.textcolor && theme.variant[props.textcolor]};
    }
  `}
`;
