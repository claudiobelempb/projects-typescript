import { BoxDefault } from 'components/common/BoxDefault';
import { css, styled } from 'styled-components';

export const Container = styled(BoxDefault)`
  ${({ theme, ...props }) => css``}
`;

export const Content = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: 50% 50%;
    /* gap: 2rem; */
    height: 100%;
  `}
`;

export const Box = styled(BoxDefault)`
  ${({ theme, ...props }) => css`
    background-image: url(${props.url});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  `}
`;
