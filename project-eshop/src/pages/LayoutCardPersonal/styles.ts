import { css, styled } from 'styled-components';

export const Container = styled.section`
  ${({ theme, ...props }) => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 50vh;
    transform: translateY(-50%);
    background-color: #f4d7d7;
    padding: 2rem 4rem;
  `}
`;

export const Box = styled.article`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    & img {
      width: 20rem;
      height: 20rem;
      border-radius: 50%;
    }
  `}
`;

export const Infor = styled.div`
  ${({ theme, ...props }) => css`
    display: flex;
    flex-direction: column;

    & p {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }

    & span {
      font-size: 1.5rem;
      color: rgba(0 0 0 / 0.5);
    }
  `}
`;
