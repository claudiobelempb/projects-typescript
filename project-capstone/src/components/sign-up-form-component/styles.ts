import { InputDefault } from 'components/common/InputDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Form = styled.form<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-self: flex-start;
    row-gap: 1.6rem;
  `}
`;

export const Input = styled(InputDefault)`
  ${({ theme, ...props }) => css`
    &:focus {
      background-color: #e4edfc;
    }
  `}
`;

export const ButtonGroup = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    column-gap: 1.6rem;
  `}
`;
