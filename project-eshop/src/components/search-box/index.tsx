import { ChangeEvent } from 'react';
import { AppType } from 'types/AppType';
import * as Styles from './styles';

interface Props extends AppType {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ onChange, ...props }: Props) => {
  return (
    <Styles.Container>
      <Styles.Content
        {...props}
        type={'search'}
        placeholder='search monsters'
        onChange={onChange}
      />
    </Styles.Container>
  );
};
