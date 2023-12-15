import { HeadingAtoms } from '@atoms/HeadingAtoms';
import { StatusAtoms } from '@atoms/StatusAtoms';
import { TableAtoms } from '@atoms/TableAtoms';
import { BoxAtoms } from './../../atoms/BoxAtoms/index';

export function HistoryPage() {
  return (
    <>
      <HeadingAtoms $font={{ $fdinamic: 2.4 }}>Meu histórico</HeadingAtoms>
      <BoxAtoms $overflowX='auto' $overflowY='auto'>
        <TableAtoms>
          <tr>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'yellow_700' }}>
                Em andamento
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'red_700' }}>
                Interrompido
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos </td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td>
              <StatusAtoms $variant={{ $vstatus: 'green_700' }}>
                Concluído
              </StatusAtoms>
            </td>
          </tr>
        </TableAtoms>
      </BoxAtoms>
    </>
  );
}
