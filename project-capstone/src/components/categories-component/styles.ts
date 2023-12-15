import { ContainerDefault } from 'components/common/ContainerDefault';
import { ContentDefault } from 'components/common/ContentDefault';
import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled(ContainerDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;

export const Content = styled(ContentDefault)<AppType>`
  ${({ theme, ...props }) => css`
    gap: 1rem;
  `}
`;
