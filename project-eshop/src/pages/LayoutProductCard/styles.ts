import { HeadingDefault } from 'components/common/HeadingDefault';
import { LinkDefault } from 'components/common/LinkDefault';
import { TextDefault } from 'components/common/TextDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Box = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    height: 100%;
    display: flex;
  `}
`;

export const Container = styled(Box)`
  ${({ theme, ...props }) => css`
    flex-direction: row;
    gap: 1.6rem;
    justify-content: space-between;
    padding: 1rem;

    @media only screen and (max-width: 1024px) {
      flex-wrap: wrap;
    }

    @media only screen and (max-width: 768px) {
      flex-wrap: wrap;
    }

    @media only screen and (max-width: 425px) {
      flex-wrap: wrap;
    }
  `}
`;

export const Content = styled(Box)`
  ${({ theme, ...props }) => css`
    /* flex-direction: row; */
  `}
`;

export const ProductCard = styled(Box)`
  ${({ theme, ...props }) => css`
    flex-direction: column;
    box-shadow: 2px 2px 30px 2px lightgray;
    /* padding: 2rem 4rem; */
    /* gap: 1rem 0; */

    img {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    }
  `}

  @media only screen and (max-width: 1024px) {
    /* flex-basis: 50%; */
  }

  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 425px) {
  }
`;

export const ProductCardInfor = styled(Box)`
  ${({ theme, ...props }) => css`
    flex-direction: column;
    background-color: white;
    padding: 2rem;
    border-bottom-left-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    min-height: 32rem;
  `}
`;

export const ProductCardPrice = styled(TextDefault)`
  ${({ theme, ...props }) => css`
    background-color: ${theme.variant.green600};
    color: ${theme.variant.white};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    display: flex;
    align-self: flex-start;
    margin-bottom: 1rem;
  `}
`;

export const ProductCardTitle = styled(HeadingDefault)`
  ${({ theme, ...props }) => css`
    font-size: ${theme.fonts.size.fd23};
    font-weight: bold;
    margin-bottom: 1rem;
  `}
`;

export const ProductCardDescription = styled(TextDefault)`
  ${({ theme, ...props }) => css`
    margin-bottom: 2rem;
  `}
`;

export const ProductCardLink = styled(LinkDefault)`
  ${({ theme, ...props }) => css`
    width: 100%;
  `}
`;

interface Props extends AppType {
  media?: '320' | '375';
}

export const BoxDefault = styled.div<Props>`
  ${({ theme, ...props }) => css`
    width: 100%;
    height: 100%;
    display: flex;
  `}

  ${(theme, ...props) => css`
  switch(props.media) {
    case '320':
      return (
        background-color: red;
      )
      break;
    case y:
      // code block
      break;
    default:
      // code block
  }
  `}
`;
