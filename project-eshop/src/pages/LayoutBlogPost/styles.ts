import { BoxDefault } from 'components/common/BoxDefault';
import { HeadingDefault } from 'components/common/HeadingDefault';
import { TextDefault } from 'components/common/TextDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
  `}
`;

export const Content = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    width: 90%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 45rem);
    justify-content: center;
    gap: 1.5rem 2rem;
  `}
`;

export const Box = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, min-content);
    height: 100%;
    border: 1px solid hsla(20, 99%, 44%, 0.3);
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 1px 1px 25px rgba(211, 211, 211, 0.5);
    gap: 2rem 0;
    & img {
      height: 20rem;
      border-top-left-radius: 1rem;
      border-top-right-radius: 1rem;
    }
  `}
`;

export const Heading = styled(HeadingDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;

export const Text = styled(TextDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;
