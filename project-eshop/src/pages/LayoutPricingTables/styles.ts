import { LinkDefault } from 'components/common/LinkDefault';
import { ListDefault } from 'components/common/ListDefault';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.main<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    align-items: center;
    flex-direction: column;

    h2 {
      text-align: center;
    }
  `}
`;

export const Content = styled.section<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: repeat(4, 25rem);

    justify-content: center;
    align-content: center;
    gap: 0 2rem;
  `}
`;

export const Box = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-rows: repeat(4, auto);
    border: 1px solid ${theme.variant.gray200};
    padding: 1rem;
    background-color: ${theme.variant.white};
    border-radius: 1rem;
    gap: 2rem 2rem;

    h2:first-child {
      text-decoration: line-through 2px solid;
      height: 1px;
      color: ${theme.variant.gray300};
    }

    h2:last-child {
      font-weight: bold;
      margin-left: 1rem;
    }
  `}
`;

export const Link = styled(LinkDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;

export const FaCheckIcon = styled(FaCheck)<AppType>`
  ${({ theme, ...props }) => css`
    font-size: 2rem;
    color: ${props.textColor
      ? theme.variant[props.textColor]
      : theme.variant.green500};
  `}
`;

export const FaTimesIcon = styled(FaTimes)<AppType>`
  ${({ theme, ...props }) => css`
    font-size: 2rem;
    color: ${theme.variant.red500};
  `}
`;

export const List = styled(ListDefault)<AppType>`
  ${({ theme, ...props }) => css`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    gap: 1rem 0;

    ${props.isGreen &&
    css`
      color: ${theme.variant.green500};
    `}

    ${props.isRed &&
    css`
      color: ${theme.variant.red500};
    `}

    & li {
      display: flex;
      gap: 0 1rem;
    }
  `}
`;
