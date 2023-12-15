import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.main<AppType>`
  ${({ theme, ...props }) => css`
    justify-content: center;
    align-items: center;
  `}
`;

export const Content = styled.section<AppType>`
  ${({ theme, ...props }) => css`
    width: 90%;
    justify-content: center;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 1rem;
  `}
`;

export const Box = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    ${props.gridcolumn &&
    css`
      grid-column: ${props.gridcolumn.start} / ${props.gridcolumn.span}
        ${props.gridcolumn.end};
    `}
    ${props.gridrow &&
    css`
      grid-row: ${props.gridrow.start} / ${props.gridrow.span}
        ${props.gridrow.end};
    `} /* &:first-child {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }

    &:nth-child(4) {
      grid-column: 4 / 1-;
      grid-row: 1 / 1;
      background-color: red;
    } */
  `}
`;
