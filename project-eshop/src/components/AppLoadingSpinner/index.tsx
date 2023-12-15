import { AppType } from 'types/AppType';
import * as Styles from './styles';

const AppLoadingSpinner = ({ ...props }: AppType) => {
  return (
    <Styles.Container {...props}>
      <Styles.Loading {...props} />
    </Styles.Container>
  );
};

export { AppLoadingSpinner };
