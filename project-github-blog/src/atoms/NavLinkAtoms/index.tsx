import { typeDefault } from '@typesDefault/typesDefault';
import { LinkProps } from 'react-router-dom';
import { Container } from './styles';

type Props = LinkProps & typeDefault;
//type Props = LinkHTMLAttributes<HTMLLinkElement> & typeDefault;
export function NavLinkAtoms({ ...props }: Props) {
  return <Container {...props}>{props.children}</Container>;
}
