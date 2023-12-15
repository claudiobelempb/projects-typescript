import styled, { css } from 'styled-components';

export const HomePageContainet = styled.div`
  ${({ theme }) => css`
    color: ${theme.variant.gray_700};
  `}
`;
