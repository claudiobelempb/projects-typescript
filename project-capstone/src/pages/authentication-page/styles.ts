import { InputDefault } from 'components/common/InputDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.div`
  ${({ theme, ...props }) => css``}
`;

export const Content = styled.section<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.6rem;
    padding: ${theme.pdinamic.vw61};
  `}

  @media (max-width: 350px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (max-width: 992px) {
  }
  @media (max-width: 1200px) {
  }
  @media (max-width: 1400px) {
  }
`;

export const Box = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    align-self: flex-start;
    row-gap: 1.6rem;
  `}
`;

export const Form = styled.div<AppType>`
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
