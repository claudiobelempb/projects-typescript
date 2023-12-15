import { BoxDefault } from 'components/common/BoxDefault';
import { css, styled } from 'styled-components';

export const Box = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: ${props?.direction};
    align-items: ${props?.align};
    justify-content: ${props?.justify};
    flex-basis: ${props?.basis?.value}${props?.basis?.unit};
  `}
`;

export const Container = styled(Box)`
  flex-direction: column;
  /* height: 6rem; */
`;

export const Content = styled(Box)`
  ${({ theme, ...props }) => css`
    align-items: center;
    background-color: rgb(131, 118, 154);
    justify-content: space-around;
    /* width: 90%;
    margin: 0 auto; */
    padding: 1rem;
  `}

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    row-gap: 2rem;
  }
`;

export const Brand = styled(Box)`
  ${({ theme, ...props }) => css`
    align-items: center;
    color: white;
    font-size: 2rem;
    flex-basis: 20%;
  `}

  @media screen and (max-width: 800px) {
  }
`;

export const NavBar = styled(Box)`
  ${({ theme, ...props }) => css`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    flex-basis: 30%;
    margin-right: 1rem;

    li {
      padding: 1rem 2rem;
      background-color: white;
      color: rgb(131, 118, 154);
      border-radius: 0.5rem;
    }

    @media screen and (max-width: 800px) {
      order: 2;
      flex-basis: 100%;
      margin-right: 0;
      li {
        width: 100%;
      }
    }
  `}
`;
