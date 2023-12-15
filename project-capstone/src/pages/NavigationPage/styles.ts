import { BoxDefault } from 'components/common/BoxDefault';
import { ContainerDefault } from 'components/common/ContainerDefault';
import { ContentDefault } from 'components/common/ContentDefault';
import { css, styled } from 'styled-components';

export const Container = styled(ContainerDefault)`
  ${({ theme, ...props }) => css``}
`;

export const Content = styled(ContentDefault)`
  ${({ theme, ...props }) => css``}
`;

export const Box = styled(BoxDefault)`
  ${({ theme, ...props }) => css``}
`;
