import * as Styles from './styles';

export default function LayoutSingin() {
  return (
    <Styles.Container>
      <h2>Evolutive Leaming</h2>
      <form action=''>
        <input placeholder='Email' type='email' />
        <input placeholder='Passowrd' type='password' />
        <input type='submit' value='Sign In' />

        <span>Or connect with</span>

        <ul>
          <li>
            <a href='/'>Facebook</a>
          </li>
          <li>
            <a href='/'>Twitter</a>
          </li>
          <li>
            <a href='/'>Google</a>
          </li>
        </ul>

        <a href='/'>Forgot Password?</a>
        <p>
          Not a member yet?<a href='/'>Sign Up</a>
        </p>
      </form>
    </Styles.Container>
  );
}
