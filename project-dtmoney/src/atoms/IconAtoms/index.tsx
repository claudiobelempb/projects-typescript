import * as icon from '@phosphor-icons/react';
import { typeDefault } from '@typesDefault/typesDefault';
import { useTheme } from 'styled-components';

export type IconWeight =
  | 'thin'
  | 'light'
  | 'regular'
  | 'bold'
  | 'fill'
  | 'duotone';

export function IconAtom({ ...props }: typeDefault) {
  const { colors } = useTheme();
  switch (props.$icons?.$type) {
    case 'ArrowCircleUp':
      return (
        <icon.ArrowCircleUp
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'ArrowCircleDown':
      return (
        <icon.ArrowCircleDown
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'CurrencyDollar':
      return (
        <icon.CurrencyDollar
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'X':
      return (
        <icon.X
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'TagSimple':
      return (
        <icon.TagSimple
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'CalendarBlank':
      return (
        <icon.CalendarBlank
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'CaretRight':
      return (
        <icon.CaretRight
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'CaretLeft':
      return (
        <icon.CaretLeft
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );
    case 'MagnifyingGlass':
      return (
        <icon.MagnifyingGlass
          size={props.$icons?.$size}
          color={colors[props.$icons.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons.$type}
        />
      );

    default:
      return (
        <icon.Activity
          size={props.$icons?.$size}
          color={colors[props.$icons?.$colors?.$color || 'gray100']}
          weight={props.$icons?.$weight}
          type={props.$icons?.$type}
        />
      );
  }
}
