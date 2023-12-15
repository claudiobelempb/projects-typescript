import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';
import { BoxDefault } from '../BoxDefault';

export const Container = styled(BoxDefault)<AppType>`
  ${({ theme, ...props }) => css`
    width: 100%;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    :focus {
    }
    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */
  `}
`;

export const Content = styled.button<AppType>`
  ${({ theme, ...props }) => css`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    padding: 1rem 2rem;
    font-weight: bold;
    border-radius: 0.5rem;
    border: none;
    font-size: ${theme.fonts.size.fs16};
    background-color: ${props.backgroundColor &&
    theme.variant[props.backgroundColor]};
    color: ${props.textColor && theme.variant[props.textColor]};

    :focus {
    }
    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */

    /* Padding Default */

    /* Margin Default */

    /*UTILS DEFAULT */

    /*BORDER DEFAULT */

    /*BORDER RADIUS DEFAULT */
  `}
`;
