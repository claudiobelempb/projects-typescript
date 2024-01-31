import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { IssuesContext } from '@contexts/IssuesContext';
import { BoxSearch } from '@molecules/BoxSearch';
import { CardPost } from '@molecules/CardPost';
import { CardProfile } from '@molecules/CardProfile';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { useContext, useEffect, useState } from 'react';
import { UserFindByNameService } from 'services/users/UserFindByNameService';

export function HomeOrganismis() {
  const [user, setUser] = useState<GITHUB_USER_DTO>({} as GITHUB_USER_DTO);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  const { issues, isLoadingIssues } = useContext(IssuesContext);

  async function fechtUserFindByName() {
    try {
      const response = await UserFindByNameService(user.login);
      setIsLoadingUser(true);
      setUser(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingUser(false);
    }
  }

  useEffect(() => {
    fechtUserFindByName();
  }, []);

  return (
    <>
      <HeaderMolecules />
      {isLoadingUser ? <LoadingAtoms /> : <CardProfile user={user} />}
      <ContainerAtoms>
        <ContentAtoms
          $flex={{ $justifyContent: 'space-between' }}
          $spacings={{ $pdy: 1 }}
        >
          <TextAtoms>Publicações</TextAtoms>
          <TextAtoms>{issues.length} publicações</TextAtoms>
        </ContentAtoms>
      </ContainerAtoms>
      <BoxSearch />
      {isLoadingIssues ? <LoadingAtoms /> : <CardPost items={issues} />}
    </>
  );
}
