import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /*----------*----------*----------*----------*---------- Reset */

  ${({ theme }) => css`
    *,
    *::before,
    *::after {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    html {
      font-weight: 600;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
      font-size: 62.5%;

      min-height: 100vh;
    }
    body {
      font-size: ${theme.fonts.size.m16}rem;
      font-weight: 400;
      min-height: 100vh;
      background-color: ${theme.colors.background};
      color: ${theme.colors.title};
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
      font-family: ${theme.fonts.family.Baloo}, monospace;
    }

    #root {
      height: 100vh;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-weight: 900;
      line-height: ${theme.fonts.lineHeight};
      font-family: '${`${theme.fonts.family}`}', sans-serif;
    }
    img,
    figure {
      /* width: 100%; */
      /* height: 100%; */
      object-fit: cover;
    }
    a {
      /* width: 100%; */
      text-decoration: none;
      color: inherit;
      align-self: center;
      text-align: center;
      /* cursor: pointer; */
      a:hover {
        filter: brightness(0.9);
        /* cursor: pointer; */
        color: red;
      }
    }
    p {
      line-height: 160%;
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
    }

    strong,
    span,
    input,
    label {
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
      display: block;
    }

    button,
    a {
      cursor: pointer;
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
    }

    &:focus {
      outline: transparent;
      box-shadow: 0 0 0 2px ${theme.colors.green500};
      border-radius: 0.5rem;
    }

    input::-webkit-calendar-picker-indicator {
      display: none !important;
    }

    input:disabled {
      cursor: not-allowed;
    }

    main {
      display: flex;
      flex: 1 1;
      flex-direction: column;
      height: 100vh;
    }

    ol,
    ul {
      list-style-position: inside;
      list-style-type: none;
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
    }

    blockquote,
    q {
      quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
      content: '';
      content: none;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      min-width: 60rem;
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
    }

    pre {
      font-family: ${theme.fonts.family.Roboto}, sans-serif;
    }
  `}
`;
