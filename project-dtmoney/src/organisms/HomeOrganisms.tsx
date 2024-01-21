import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { LoadingAtoms } from '@atoms/LoadingAtoms';
import { TableAtoms } from '@atoms/TableAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TransactionsContext } from '@contexts/TransactionsContext';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { SearchFormMolecule } from '@molecules/SearchFormMolecules';
import { SummaryMolecules } from '@molecules/SummaryMolecules';
import { dateFormatter, priceFormatter } from '@utils/formatter';
import { useContextSelector } from 'use-context-selector';

export function HomeOrganisms() {
  const context = useContextSelector(
    TransactionsContext,
    ({ transactions, isLoading }) => {
      return {
        transactions,
        isLoading
      };
    }
  );

  return context.isLoading ? (
    <LoadingAtoms
      $width={{ $width: 100 }}
      $height={{ $height: 100 }}
      $flex={{ $alingItems: 'center', $justifyContent: 'center' }}
    />
  ) : (
    <>
      <HeaderMolecules />
      <ContainerAtoms
        as={'main'}
        $background={{ $background: 'gray700' }}
        $flex={{ $alingItems: 'center' }}
        $spacings={{ $pdy: 3.2 }}
      >
        <SummaryMolecules />
        <SearchFormMolecule />
        <ContentAtoms $spacings={{ $mt: 4 }} $overflow='auto'>
          <TableAtoms>
            <tbody>
              {context.isLoading ? (
                <LoadingAtoms $variant='small' />
              ) : (
                context.transactions.map(transaction => (
                  <tr key={transaction.id}>
                    <td>{transaction.description}</td>
                    <td>
                      <TextAtoms
                        $colors={{
                          $color:
                            transaction.type === 'income'
                              ? 'green500'
                              : 'red700'
                        }}
                        $fonts={{
                          $color: 'red700'
                        }}
                      >
                        {transaction.type === 'outcome' && '- '}
                        {priceFormatter.format(transaction.price)}
                      </TextAtoms>
                    </td>
                    <td>{transaction.category}</td>
                    <td>
                      {dateFormatter.format(new Date(transaction.createdAt))}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </TableAtoms>
        </ContentAtoms>
      </ContainerAtoms>
    </>
  );
}
