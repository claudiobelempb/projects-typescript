import { ContentAtoms } from '@atoms/ContentAtoms';
import { useSummary } from '@hooks/useSummary';
import { CardSummaryMolecules } from './CardSummaryMolecules';

export function SummaryMolecules() {
  const summary = useSummary();

  return (
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
        $value={summary.income}
        $icons={{
          $type: 'ArrowCircleUp',
          $size: 32,
          $colors: { $color: 'green700' }
        }}
        $background={{ $background: 'gray600' }}
      />
      <CardSummaryMolecules
        $title='Saídas'
        $value={summary.outcome}
        $icons={{
          $type: 'ArrowCircleDown',
          $size: 32,
          $colors: { $color: 'red700' }
        }}
        $background={{ $background: 'gray600' }}
      />
      <CardSummaryMolecules
        $title='Total'
        $value={summary.total}
        $icons={{
          $type: 'CurrencyDollar',
          $size: 32,
          $colors: { $color: 'white' }
        }}
        $background={{ $background: 'green700' }}
      />
    </ContentAtoms>
  );
}
