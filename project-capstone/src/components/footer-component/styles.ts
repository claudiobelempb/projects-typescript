import { BoxDefault } from 'components/common/BoxDefault';
import { ContentDefault } from 'components/common/ContentDefault';
import { css, styled } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.footer<AppType>`
  ${({ theme, ...props }) => css``}
`;

export const Content = styled(ContentDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;

export const Box = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css``}
`;
