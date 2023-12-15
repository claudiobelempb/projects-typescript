import { InputDefault } from 'components/common/InputDefault';
import * as Styles from './styles';

export default function LayoutNavigateMobile() {
  return (
    <Styles.Container>
      <h1>LayoutNavigateMobile</h1>

      <Styles.Content as='header'>
        <Styles.Brand>
          <h3>EL</h3>
        </Styles.Brand>

        <Styles.NavBar as='ul'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/'>Services</a>
          </li>
          <li>
            <a href='/'>Blog</a>
          </li>
        </Styles.NavBar>

        <InputDefault type='search' placeholder='Search here...' />
      </Styles.Content>
    </Styles.Container>
  );
}
