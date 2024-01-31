import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { HBoxAtoms } from '@atoms/HBoxAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { VBoxAtoms } from '@atoms/VBoxAtoms';
import { IssuesContext } from '@contexts/IssuesContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

// https://api.github.com/search/issues?q=tecnologia%20repo:claudiobelempb/projects-typescript/issues/1
// https://api.github.com/search/issues?q=tecnologia%20repo:claudiobelempb/projects-typescript/issues/1

const SearchFormSchema = z.object({
  query: z.string()
});

type SearchFormDataType = z.infer<typeof SearchFormSchema>;

export function BoxSearch() {
  const { fetchIssues } = useContext(IssuesContext);

  const { register, handleSubmit } = useForm<SearchFormDataType>({
    resolver: zodResolver(SearchFormSchema)
  });

  async function handleSearchIssues(data: SearchFormDataType) {
    await fetchIssues(data.query);
  }

  return (
    <ContainerAtoms $spacings={{ $mb: 4.8 }}>
      <ContentAtoms>
        <FormAtoms onSubmit={handleSubmit(handleSearchIssues)}>
          <VBoxAtoms>
            <HBoxAtoms>
              <InputAtoms
                {...register('query')}
                $background='input'
                type='search'
                placeholder='Buscar conteúdo'
                $color='text'
              />
            </HBoxAtoms>
          </VBoxAtoms>
        </FormAtoms>
      </ContentAtoms>
    </ContainerAtoms>
  );
}
