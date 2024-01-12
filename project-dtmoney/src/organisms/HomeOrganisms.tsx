import { ButtonAtoms } from '@atoms/ButtonAtoms';
import { ContainerAtoms } from '@atoms/ContainerAtoms';
import { ContentAtoms } from '@atoms/ContentAtoms';
import { FormAtoms } from '@atoms/FormAtoms';
import { InputAtoms } from '@atoms/InputAtoms';
import { TableAtoms } from '@atoms/TableAtoms';
import { TextAtoms } from '@atoms/TextAtoms';
import { TransactionsContext } from '@contexts/TransactionsContext';
import { CardSummaryMolecules } from '@molecules/CardSummaryMolecules';
import { HeaderMolecules } from '@molecules/HeaderMolecules';
import { useContext } from 'react';
import { LoadingAtoms } from '../atoms/LoadingAtoms';

export function HomeOrganisms() {
  const { transactions, isLoading } = useContext(TransactionsContext);

  return (
    <>
      <HeaderMolecules />
      <ContainerAtoms
        as={'main'}
        $background={{ $background: 'gray700' }}
        $flex={{ $alingItems: 'center' }}
        $spacings={{ $pdy: 3.2 }}
      >
        <ContentAtoms
          $grid={{
            $grid: 'grid',
            $gridTemplateColumns: {
              $repeatColumns: 3
            }
          }}
          $flex={{ $columnGap: 1.6 }}
          $spacings={{ $mt: -10 }}
        >
          <CardSummaryMolecules
            $title='Entradas'
            $value='R$ 17.400,00'
            $icons={{
              $type: 'ArrowCircleUp',
              $size: 32,
              $colors: { $color: 'green700' }
            }}
            $background={{ $background: 'gray600' }}
          />
          <CardSummaryMolecules
            $title='Saídas'
            $value='R$ 1.259,00'
            $icons={{
              $type: 'ArrowCircleDown',
              $size: 32,
              $colors: { $color: 'red700' }
            }}
            $background={{ $background: 'gray600' }}
          />
          <CardSummaryMolecules
            $title='Total'
            $value='R$ 16.141,00'
            $icons={{
              $type: 'CurrencyDollar',
              $size: 32,
              $colors: { $color: 'white' }
            }}
            $background={{ $background: 'green700' }}
          />
        </ContentAtoms>
        <ContentAtoms
          $height={{ $maxHeight: 5.6 }}
          $spacings={{ $mt: 4.8 }}
          $flex={{ $columnGap: 1 }}
        >
          <FormAtoms
            $flex={{ $direction: 'row', $columnGap: 1 }}
            action=''
            onSubmit={() => {}}
          >
            <InputAtoms
              placeholder='Busque uma transação'
              type='search'
              $background={{ $background: 'background' }}
              $colors={{
                $color: 'gray300',
                $placeholder: { $colors: 'gray300' }
              }}
            />
            <ButtonAtoms
              $buttom={{
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
          </FormAtoms>
        </ContentAtoms>
        <ContentAtoms $spacings={{ $mt: 2 }}>
          <TableAtoms>
            <tbody>
              {isLoading ? (
                <LoadingAtoms />
              ) : (
                transactions.map(transaction => (
                  <tr key={transaction.transactionId}>
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
                        {transaction.price}
                      </TextAtoms>
                    </td>
                    <td>{transaction.category}</td>
                    <td>{transaction.createdAt}</td>
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
