import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AppType } from 'types/AppType';

export const Container = styled.div<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;
    justify-content: ${props.justify ? props.justify : 'center'};
    align-items: ${props.align ? props.align : 'center'};
    flex-basis: ${props.basis?.value ? props.basis.value : 100}${props.basis?.unit ? props.basis.unit : '%'};
    transition: all 0.25s ease-in;
    border-radius: 0.5rem;
    background-color: ${props.background
      ? theme.variant[props.background]
      : theme.variant.blue400};

    & a.active {
      filter: brightness(0.9);
    }
  `}
`;

export const Content = styled(NavLink)<AppType>`
  ${({ theme, ...props }) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: ${props.align ? props.align : 'center'};
    flex-basis: ${props.basis?.value ? props.basis.value : 100}${props.basis?.unit ? props.basis.unit : '%'};
    transition: all 0.25s ease-in;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    color: ${props.textColor
      ? theme.variant[props.textColor]
      : theme.variant.white};

    & a.active {
      filter: brightness(0.9);
    }
  `}
`;
