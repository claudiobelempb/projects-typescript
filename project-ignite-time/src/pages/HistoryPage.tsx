import { BoxAtoms } from '@atoms/BoxAtoms';
import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TableAtoms } from '@atoms/TableAtoms';
import { CycleContext } from '@contexts/CyclesContext';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useContext } from 'react';

export function HistoryPage() {
  const { cycles } = useContext(CycleContext);
  console.log(cycles);

  return (
    <>
      <HeadingAtoms $font={{ $fdinamic: 2.4 }}>Meu histórico</HeadingAtoms>
      <BoxAtoms $overflowX='auto' $overflowY='auto'>
        <TableAtoms>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map(cycle => (
              <tr key={cycle.cycleId}>
                <td>{cycle.task}</td>
                <td>{`${cycle.minutesAmount}`} minutos</td>
                <td>{`${formatDistanceToNow(new Date(cycle.startDate), {
                  addSuffix: true,
                  locale: ptBR
                })}`}</td>
                <td>
                  {!cycle.finishedDate && !cycle.endDate && (
                    <StatusAtoms $variant={{ $vstatus: 'yellow_700' }}>
                      Em andamento
                    </StatusAtoms>
                  )}
                  {cycle.finishedDate && (
                    <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                      Concluido
                    </StatusAtoms>
                  )}
                  {cycle.endDate && (
                    <StatusAtoms $variant={{ $vstatus: 'red_700' }}>
                      Interrompido
                    </StatusAtoms>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </TableAtoms>
      </BoxAtoms>
    </>
  );
}
