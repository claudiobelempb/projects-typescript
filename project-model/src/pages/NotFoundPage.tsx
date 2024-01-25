import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { IconAtom } from '@atoms/IconAtoms';
import { NavLinkAtoms } from '@atoms/NavLinkAtoms';

export function NotFoundPage() {
  return (
    <ContainerAtoms
      $flex={{ $justifyContent: 'center', $alingItems: 'center' }}
    >
      <HeadingAtoms as='h2' $color={{ $text: 'red500' }}>
        <IconAtom type='FaExclamationTriangle' /> 404
      </HeadingAtoms>
      <HeadingAtoms as='h3' $color={{ $text: 'text' }}>
        Sorry, there is nothing here
      </HeadingAtoms>

      <NavLinkAtoms to={'/'} title='Home' $color={{ $text: 'text' }}>
        Go Back Home
      </NavLinkAtoms>
    </ContainerAtoms>
  );
}
