import * as Styles from './styles';

export default function LayoutNavigation() {
  return (
    <Styles.Container>
      <a href='/home'>Profile</a>
      <a href='/notification'>Notification</a>
      <a href='/payments'>Payments</a>
      <a href='/contact'>Contact</a>
    </Styles.Container>
  );
}
