import { typeDefault } from '@typesDefault/typesDefault';
import styled, { css } from 'styled-components';

export const Container = styled.div<typeDefault>`
  ${({ ...props }) => css`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    position: relative;
    /*WIDTH */
    ${props.$width?.$width &&
    css`
      width: ${props.$width?.$width}%;
    `}
    ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width?.$maxWidth}px;
    `}
    ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width?.$minWidth}px;
    `}
    
    /*HEIGT */
    ${props.$height?.$height &&
    css`
      height: ${props.$height.$height}%;
    `}
    ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}px;
    `}
    ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}px;
    `}
  `}
`;

export const Loading = styled.div<typeDefault>`
  ${({ theme, ...props }) => css`
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
    ${props.$border
      ? css`
          border: ${props.$border.$border?.$borderWidth}px;
          border-style: ${props.$border.$border?.$borderStyle};
          border-color: ${theme.colors[
            props.$border.$border?.$borderColor || 'gray100'
          ]};
        `
      : css`
          border: 10px solid #f3f3f3; /* Light grey */
        `}
    ${props.$border?.$borderTop
      ? css`
          border-top-width: ${props.$border.$borderTop?.$borderWidth}px;
          border-top-style: ${props.$border.$borderTop?.$borderStyle};
          border-top-color: ${theme.colors[
            props.$border.$borderTop?.$borderColor || 'gray700'
          ]};
        `
      : css`
          border-top: 10px solid #383636; /* Black */
        `}
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
    position: absolute;
    /* top: 50%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    /*WIDTH */
    ${props.$width?.$width &&
    css`
      width: ${props.$width?.$width}px;
    `}
    ${props.$width?.$maxWidth &&
    css`
      max-width: ${props.$width?.$maxWidth}px;
    `}
    ${props.$width?.$minWidth &&
    css`
      min-width: ${props.$width?.$minWidth}px;
    `}
    
    /*HEIGT */
    ${props.$height?.$height &&
    css`
      height: ${props.$height.$height}px;
    `}
    ${props.$height?.$maxHeight &&
    css`
      max-height: ${props.$height?.$maxHeight}px;
    `}
    ${props.$height?.$minHeight &&
    css`
      min-height: ${props.$height?.$minHeight}px;
    `}
  `}
`;
