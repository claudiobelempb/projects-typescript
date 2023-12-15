import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
  `}
`;

export const Content = styled.div`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    gap: 1.6rem;

    @media (min-width: 350px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 576px) {
      grid-template-columns: repeat(2, auto);
    }
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, auto);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, auto);
    }
    @media (min-width: 1400px) {
    }
  `}
`;

export const Box = styled.div`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, auto);
    background-color: #95dada;
    border: 1px solid grey;
    border-radius: 5px;
    padding: 25px;
    cursor: pointer;
    -moz-osx-font-smoothing: grayscale;
    backface-visibility: hidden;
    transform: translateZ(0);
    transition: transform 0.25s ease-out;

    &:hover {
      transform: scale(1.05);
    }
  `}
`;
