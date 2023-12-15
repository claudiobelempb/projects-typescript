import { css, styled } from 'styled-components';

export const Container = styled.div`
  ${({ theme, ...props }) => css`
    background-color: ${theme.variant.gray100};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    h1 {
      font-size: ${theme.fonts.size.fd54};
    }

    section {
      display: flex;
      flex-direction: column;
      background-color: rgb(119, 88, 249);
      border-radius: 0.5rem;
      width: 40rem;
      max-width: 100%;
      padding: 1.5rem 3rem;
      gap: 1rem 0;
    }

    h2 {
      color: ${theme.variant.white};
      font-size: ${theme.fonts.size.fd37};
      text-align: center;
      padding: 2rem 0;
    }

    div {
      display: flex;
      gap: 0 1rem;
    }

    p {
      color: ${theme.variant.white};
      text-align: center;
      padding: 1rem 0;
    }

    a {
      flex-basis: calc(100% / 2);
      background-color: ${theme.variant.white};
      color: rgb(153, 125, 255);
      padding: 1rem 2rem;
      text-align: center;
      border-radius: 0.5rem;
      margin-bottom: 2rem;
    }

    a:first-child {
      background-color: rgb(153, 125, 255);
      color: ${theme.variant.white};
    }

    @media only screen and (max-width: 375px) {
      a {
        flex-basis: 100%;
      }

      div {
        flex-wrap: wrap;
      }
    }
  `}
`;
