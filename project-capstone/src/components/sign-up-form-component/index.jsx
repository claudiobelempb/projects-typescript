import { ButtonDefault } from 'components/common/ButtonDefault';
import { HeadingDefault } from 'components/common/HeadingDefault';
import { TextDefault } from 'components/common/TextDefault';
import { appCreateUserDocumentFromAuth, appCreateUserWithEmailAndPassword } from 'config/firebase/firebase.config';


import { InputDefault } from 'components/common/InputDefault';
import { useContext, useState } from 'react';
import { UserContext } from './../../contexts/user.context';
import * as Styles from './styles';

// type User = {
//   createdAt: Date;
//   displayName: string;
//   email: string;
// };

// type TypeFields = {
//   displayName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// };
const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

export const SignUpFormComponent = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { setCurrentUse} = useContext(UserContext);

  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }
    try {
      const { user } = await appCreateUserWithEmailAndPassword(email, password);
      setCurrentUse(user);
      await appCreateUserDocumentFromAuth(user, {displayName});
      resetFromFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in user');
      }
      console.log('user creation encountered an error: ', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <Styles.Form onSubmit={handleSubmit}>
      <HeadingDefault as='h2'>I do not have a account</HeadingDefault>
      <TextDefault>Sign up with your email and password</TextDefault>

      <InputDefault
        label='Display Name'
        onChange={handleChange}
        type='text'
        alt='Display Name'
        name='displayName'
        value={displayName}
      />

      <InputDefault
        onChange={handleChange}
        label='Email'
        type='email'
        alt='email'
        name='email'
        value={email}
      />

      <InputDefault
        onChange={handleChange}
        label='Password'
        type='password'
        alt='password'
        name='password'
        value={password}
      />

      <InputDefault
        onChange={handleChange}
        label='Confirm'
        type='password'
        alt='Confirm Password'
        name='confirmPassword'
        value={confirmPassword}
      />

      <ButtonDefault
        onClick={() => {}}
        title='SIGN UP'
        
      />
    </Styles.Form>
  );
};
