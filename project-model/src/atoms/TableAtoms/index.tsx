import { typeDefault } from '@typesDefault/typesDefault';
import { TableAtomsTemplatesContainer } from './styles';

export function TableAtoms({ ...props }: typeDefault) {
  return (
    <TableAtomsTemplatesContainer {...props}>
      {props.children}
    </TableAtomsTemplatesContainer>
  );
}
