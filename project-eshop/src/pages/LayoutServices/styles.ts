import { BoxDefault } from 'components/common/BoxDefault';
import styled, { css } from 'styled-components';
import { UTILS } from './../../types/UtilsType';

export const Container = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    flex-direction: column;
    height: 100vh;
    align-items: center;
    gap: 2rem;
    padding: 5rem;
  `}
`;

export const Content = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    height: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
  `}
`;

export const Box = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    flex-basis: 40rem;
    background-color: white;
    padding: 2rem;
    border-radius: 0.5rem;

    ${UTILS.utils({})}
  `}
`;

export const IconContent = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    font-size: 2rem;
    padding: 1.5rem;
    justify-content: center;
    align-items: center;
    background-color: #2b59da;
    border-radius: 0.5rem;
    align-self: flex-start;

    svg {
      font-size: 3.5rem;
      color: white;
      font-weight: bold;
    }
  `}
`;
