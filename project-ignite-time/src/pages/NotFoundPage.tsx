import { BoxAtoms } from '@atoms/BoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';
import { FaExclamationTriangle } from 'react-icons/fa';

export function NotFoundPage() {
  return (
    <BoxAtoms $flex={{ $justifyContent: 'center', $alingItems: 'center' }}>
      <HeadingAtoms as='h2'>
        <FaExclamationTriangle /> 404
      </HeadingAtoms>
      <HeadingAtoms as='h3'>Sorry, there is nothing here</HeadingAtoms>

      <NavLinkAtoms to={'/'} title='Home'>
        Go Back Home
      </NavLinkAtoms>
    </BoxAtoms>
  );
}
