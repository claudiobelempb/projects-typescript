import { BoxDefault } from 'components/common/BoxDefault';
import { ContentDefault } from 'components/common/ContentDefault';
import { HeadingDefault } from 'components/common/HeadingDefault';
import { TextDefault } from 'components/common/TextDefault';
import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Content = styled(ContentDefault)<AppType>`
  ${({ theme, ...props }) => css`
    gap: 1rem;
  `}
`;

export const Box = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    min-width: 30%;
    height: 240px;
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &.large {
      height: 380px;
    }

    /* &:first-child {
      margin-right: 7.5px;
    }

    &:last-child {
      margin-left: 7.5px;
    } */
  `}
`;

export const BoxContent = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background-color: white;
    opacity: 0.7;
    position: absolute;

    &:hover {
      opacity: 0.9;
    }
  `}
`;

export const Heading = styled(HeadingDefault)<AppType>`
  ${({ theme, ...props }) => css`
    font-weight: bold;
    margin: 0 6px 0;
    font-size: 22px;
    color: #4a4a4a;
  `}
`;

export const Text = styled(TextDefault)<AppType>`
  ${({ theme, ...props }) => css`
    font-weight: lighter;
    font-size: 16px;
  `}
`;

export const Image = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${props.url && props.url});

    &:hover {
      cursor: pointer;

      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
  `}
`;
