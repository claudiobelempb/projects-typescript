import { css, styled } from 'styled-components';

export const Container = styled.nav`
  ${({ theme, ...props }) => css`
    display: flex;
    justify-content: space-between;
    background-color: #0aa1dd;
    padding: 0.8rem;
    border-radius: 5rem;
    margin-top: 5rem;

    & a {
      color: white;
      border-radius: 3rem;
      padding: 1rem 2rem;
      transition: all 0.25s ease-in;
      font-size: 1.5rem;
      &:hover {
        background-color: white;
        color: #0aa1dd;
      }
    }
  `}
`;
