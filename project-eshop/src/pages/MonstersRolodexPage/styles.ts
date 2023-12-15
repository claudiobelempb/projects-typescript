import { HeadingDefault } from 'components/common/HeadingDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.main<AppType>`
  ${({ theme, ...props }) => css`
    align-items: center;
    background: linear-gradient(
      to left,
      rgba(7, 27, 82, 1) 0%,
      rgba(0, 128, 128, 1) 100%
    );
  `}
`;

export const Content = styled.section<AppType>`
  ${({ theme, ...props }) => css`
    width: 90%;
    /* max-width: 69rem; */
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    margin: 3rem 0rem;
  `}
`;

export const CardListContainet = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    display: grid;
    /* grid-template-columns: repeat(${props.gridRepeatColumns}, 200px); */
    grid-template-columns: minmax(230px, auto);
    grid-template-rows: auto;
    flex-direction: row;
    gap: 1.6rem;
    padding: 2rem 0;
  `}
`;

export const Title = styled(HeadingDefault)<AppType>`
  ${({ theme, ...props }) => css`
    color: #0ccac4;
    font-size: ${theme.fonts.size.fd77};
    font-family: ${theme.fonts.fontFamily.title};
  `}
`;
