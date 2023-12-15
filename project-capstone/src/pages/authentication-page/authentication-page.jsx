import { SignInFormComponent } from 'components/sign-in-form-component';
import { SignUpFormComponent } from 'components/sign-up-form-component';

import * as Styles from './styles';

export default function AuthenticationPages() {
console.log('hi');
  return (
    <Styles.Content>
      <SignUpFormComponent />
      
      <SignInFormComponent/>
    </Styles.Content>
  );
}
