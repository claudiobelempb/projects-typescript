import * as icon from '@phosphor-icons/react';
import { TYPE_ICON } from '@typesDefault/TypeIcon';
import { useTheme } from 'styled-components';
import { Container } from './styles';

export function IconAtom({ ...props }: TYPE_ICON) {
  const { colors } = useTheme();
  switch (props.$type) {
    case 'ChatCircle':
      return (
        <Container {...props}>
          <icon.ChatCircle
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'CalendarCheck':
      return (
        <Container {...props}>
          <icon.CalendarCheck
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'Buildings':
      return (
        <Container {...props}>
          <icon.Buildings
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'ArrowSquareOut':
      return (
        <Container {...props}>
          <icon.ArrowSquareOut
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'GithubLogo':
      return (
        <Container {...props}>
          <icon.GithubLogo
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'Users':
      return (
        <Container {...props}>
          <icon.Users
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'ArrowCircleUp':
      return (
        <Container {...props}>
          <icon.ArrowCircleUp
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
    case 'ArrowCircleDown':
      return (
        <icon.ArrowCircleDown
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'CurrencyDollar':
      return (
        <icon.CurrencyDollar
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'X':
      return (
        <icon.X
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'TagSimple':
      return (
        <icon.TagSimple
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'CalendarBlank':
      return (
        <icon.CalendarBlank
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'CaretRight':
      return (
        <icon.CaretRight
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'CaretLeft':
      return (
        <icon.CaretLeft
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );
    case 'MagnifyingGlass':
      return (
        <icon.MagnifyingGlass
          size={props.$size}
          color={colors[props.$color || 'gray100']}
          weight={props.$weight}
          type={props.$type}
        />
      );

    default:
      return (
        <Container {...props}>
          <icon.Activity
            size={props.$size}
            color={colors[props.$color || 'gray100']}
            weight={props.$weight}
            type={props.$type}
          />
        </Container>
      );
  }
}
