import { IconAtom } from '@atoms/IconAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TypeButtom } from '@typesDefault/TypeButtom';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Container } from './styles';

type ButtonProps = TypeButtom & ButtonHTMLAttributes<HTMLButtonElement>;

export const ButtonAtoms = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...props }: ButtonProps, ref) => {
    return (
      <>
        <Container {...props} ref={ref} disabled={props.$buttom?.$disabled}>
          {props.$buttom?.$icons && <IconAtom $icons={props.$buttom.$icons} />}
          {props.$buttom?.$title && (
            <TextAtoms>{props.$buttom?.$title}</TextAtoms>
          )}
        </Container>
      </>
    );
  }
);
