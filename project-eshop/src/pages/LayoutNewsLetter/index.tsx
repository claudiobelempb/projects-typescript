import * as Styles from './styles';
export default function LayoutNewsLetter() {
  return (
    <Styles.Container>
      <h1>LayoutNewsLetter</h1>
      <form>
        <input type='email' placeholder='Email Address' name='email' id='' />
        <input type='submit' id='' value='Subscribe' />
      </form>
    </Styles.Container>
  );
}
