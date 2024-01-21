import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { TransactionsContext } from '@contexts/TransactionsContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { memo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useContextSelector } from 'use-context-selector';
import * as z from 'zod';

const SearchFormSchema = z.object({
  query: z.string()
});

type SearchFormDataType = z.infer<typeof SearchFormSchema>;

function SearchFormMoleculeComponent() {
  const [isLoading, setIsloading] = useState(false);
  const { register, handleSubmit } = useForm<SearchFormDataType>({
    resolver: zodResolver(SearchFormSchema)
  });

  const context = useContextSelector(
    TransactionsContext,
    ({ fetchTransactions, isLoading }) => {
      return {
        fetchTransactions,
        isLoading
      };
    }
  );

  async function handleSearchTransaction(data: SearchFormDataType) {
    setIsloading(true);
    await context.fetchTransactions(data.query);
    setIsloading(false);
  }
  return (
    <ContentAtoms
      $height={{ $maxHeight: 5.6 }}
      $spacings={{ $mt: 4.8 }}
      $flex={{ $columnGap: 1 }}
    >
      <FormAtoms
        $flex={{ $direction: 'row', $columnGap: 1 }}
        action=''
        onSubmit={handleSubmit(handleSearchTransaction)}
      >
        <InputAtoms
          disabled={context.isLoading}
          {...register('query')}
          placeholder='Busque uma transação'
          type='search'
          $background={{ $background: 'background' }}
          $colors={{
            $color: 'gray300',
            $placeholder: { $colors: 'gray300' }
          }}
        />
        {isLoading ? (
          <ButtonAtoms
            type='submit'
            $buttom={{
              $disabled: isLoading,
              $background: {
                $color: {
                  $color: 'gray600',
                  $hover: 'green700'
                }
              },
              $colors: {
                $color: {
                  $color: 'green700',
                  $hover: 'white'
                },
                $icon: {
                  $color: 'green700',
                  $hover: 'white'
                }
              },
              $width: { $maxWidth: 14.7 },
              $border: {
                $border: {
                  $borderWidth: 1,
                  $borderStyle: 'solid ',
                  $borderColor: 'green700'
                }
              },
              $fonts: { $size: 1.6, $weigh: '700' }
            }}
          >
            <LoadingAtoms $variant='small' />
          </ButtonAtoms>
        ) : (
          <ButtonAtoms
            type='submit'
            $buttom={{
              $disabled: isLoading,
              $background: {
                $color: {
                  $color: 'gray600',
                  $hover: 'green700'
                }
              },
              $colors: {
                $color: {
                  $color: 'green700',
                  $hover: 'white'
                },
                $icon: {
                  $color: 'green700',
                  $hover: 'white'
                }
              },
              $width: { $maxWidth: 14.7 },
              $border: {
                $border: {
                  $borderWidth: 1,
                  $borderStyle: 'solid ',
                  $borderColor: 'green700'
                }
              },
              $icons: {
                $type: 'MagnifyingGlass',
                $size: 20,
                $weight: 'bold'
              },
              $fonts: { $size: 1.6, $weigh: '700' },
              $title: 'Buscar'
            }}
          />
        )}
      </FormAtoms>
    </ContentAtoms>
  );
}

export const SearchFormMolecule = memo(SearchFormMoleculeComponent);
