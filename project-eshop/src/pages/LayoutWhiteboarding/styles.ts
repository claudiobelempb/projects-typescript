import { css, styled } from 'styled-components';

export const Container = styled.div`
  ${({ theme, ...props }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: ${theme.fonts.size.fd37};
    }

    section {
      display: flex;
      background-color: rgb(255, 90, 71);
      width: 50%;
      padding: ${theme.padding.vw18};
      border-radius: 1rem;
      gap: 2rem;
      padding: 1.5rem 2rem;
    }

    h2 {
      font-size: ${theme.fonts.size.fd30};
      font-weight: ${theme.fonts.fontWeight.bold};
      color: ${theme.variant.white};
      margin-bottom: 1rem;
    }

    p {
      font-size: ${theme.fonts.size.fs15};
      color: ${theme.variant.white};
    }

    span {
      font-size: ${theme.fonts.size.fs16};
      background-color: rgb(90, 35, 149);
      padding: 1rem 2rem;
      border-radius: 2rem;
      color: ${theme.variant.white};
      flex-shrink: 0;
      align-self: flex-start;
    }
  `}
`;
