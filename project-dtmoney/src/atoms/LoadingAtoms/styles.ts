import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.gray700};
    position: relative;
    /* height: 100vh; */
    /* width: 100%; */
  `}
`;

export const Loading = styled.div<typeDefault>`
  ${({ theme }) => css`
    color: ${theme.colors.red700};
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    display: flex;
    flex: 1;
    width: 50px;
    height: 50px;
    border: 10px solid #f3f3f3; /* Light grey */
    border-top: 10px solid #383636; /* Black */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;
