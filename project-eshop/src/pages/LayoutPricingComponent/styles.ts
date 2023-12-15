import { NavLink } from 'react-router-dom';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.main<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  `}
`;

export const Content = styled.section<AppType>`
  ${({ theme, ...props }) => css`
    width: 90%;
    max-width: 80rem;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 2px 2px 30px 5px hsla(0 0% 83% / 0.5);

    & p {
      font-size: ${theme.fonts.size.fs15};
      color: ${theme.variant.white};
    }

    & div:first-child {
      grid-column-start: 1;
      grid-column-end: -1;
      grid-column: 1 / -1;
    }

    & div:nth-child(2) {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }
  `}
`;

export const Box = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    ${props.gridRepeatColumns &&
    css`
      grid-template-columns: repeat(${props.gridRepeatColumns}, 1fr);
    `}
    ${props.gridRepeatRows &&
    css`
      grid-template-rows: repeat(${props.gridRepeatRows}, auto);
    `}
    gap: 3rem;
    padding: 4rem;
    background-color: ${props.background && theme.variant[props.background]};

    & h2 {
      font-size: ${theme.fonts.size.fd30};
      color: ${theme.variant.white};
      font-weight: bold;
    }

    & h3 {
      font-size: ${theme.fonts.size.fd19};
      color: ${theme.variant.white};
      font-weight: bold;
    }

    & ul {
      color: ${theme.variant.white};
    }

    & li {
      margin-bottom: 1rem;
    }
  `}
`;

export const Link = styled(NavLink)<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    padding: 1rem 2rem;
    background-color: ${theme.variant.green900};
    color: ${theme.variant.white};
    border-radius: 0.5rem;
    text-align: center;
  `}
`;
