import { BoxSearch } from '@molecules/BoxSearch';
import { CardPost } from '@molecules/CardPost';
import { CardProfile } from '@molecules/CardProfile';
import { HeaderMolecules } from '@molecules/HeaderMolecules';

export function HomeOrganismis() {
  return (
    <>
      <HeaderMolecules />
      <CardProfile />
      <BoxSearch />
      <CardPost />
    </>
  );
}
