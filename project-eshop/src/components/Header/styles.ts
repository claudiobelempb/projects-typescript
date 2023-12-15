import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.header<AppType>`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.variant.gray700};
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  height: 100%;
`;

export const ContentNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-grow: 1;
`;

export const ContentInputSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;

  & svg {
    background-color: ${({ theme }) => theme.variant.orange500};
    font-size: ${({ theme }) => theme.fonts.size.fd23};
  }
`;

export const Brand = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => theme.variant.white};
  gap: 1rem;
  font-size: ${({ theme }) => theme.fonts.size.fd23};
  font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
  & svg {
    color: ${({ theme }) => theme.variant.orange500};
    font-size: 2.5rem;
  }
`;

export const Signin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.variant.white};
  & p {
    font-size: ${({ theme }) => theme.fonts.size.fs10};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  }

  & strong {
    font-size: ${({ theme }) => theme.fonts.size.fs15};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
  }
`;

export const Shoping = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  color: ${({ theme }) => theme.variant.white};
  & p {
    font-size: ${({ theme }) => theme.fonts.size.fs10};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  }

  & strong {
    font-size: ${({ theme }) => theme.fonts.size.fs15};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;

  color: ${({ theme }) => theme.variant.white};
  & p {
    font-size: ${({ theme }) => theme.fonts.size.fs10};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.regular};
  }

  & strong {
    font-size: ${({ theme }) => theme.fonts.size.fs15};
    font-weight: ${({ theme }) => theme.fonts.fontWeight.bold};
  }
`;

export const Box = styled.div<AppType>`
  display: flex;
  align-items: ${props => (props?.align ? props?.align : 'center')};
  flex-direction: ${props => (props?.direction ? props?.direction : 'column')};
  padding: 0 16px;
  height: 100%;
  gap: 1rem;

  ${({ theme, backgroundColor }) =>
    backgroundColor &&
    css`
      background-color: ${theme.variant[backgroundColor]};
    `}
  ${({ theme, textColor }) =>
    textColor &&
    css`
      color: ${theme.variant[textColor]};
    `}
`;
