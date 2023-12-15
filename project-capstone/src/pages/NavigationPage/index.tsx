import { FooterComponent } from 'components/footer-component';
import Header from 'components/header-component';
import { Outlet } from 'react-router-dom';
import * as Styles from './styles';
export default function NavigationPages() {
  return (
    <>
      <Header />
      <Styles.Container>
        <Outlet />
      </Styles.Container>
      <FooterComponent />
    </>
  );
}
