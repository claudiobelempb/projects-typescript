import { typeDefault } from '@typesDefault/typesDefault';
import { LinkProps } from 'react-router-dom';
import { NavLinkAtomsContainer } from './styles';

type Props = LinkProps & typeDefault;
//type Props = LinkHTMLAttributes<HTMLLinkElement> & typeDefault;
export function NavLinkAtoms({ ...props }: Props) {
  return (
    <NavLinkAtomsContainer {...props}>{props.children}</NavLinkAtomsContainer>
  );
}
