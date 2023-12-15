import { ButtonDefault } from 'components/common/ButtonDefault';
import { HeadingDefault } from 'components/common/HeadingDefault';
import { TextDefault } from 'components/common/TextDefault';
import {
  appCreateUserDocumentFromAuth,
  appSignInWithEmailAndPassword,
  appSignInWithPopupGoogle
} from 'config/firebase/firebase.config';


import { InputDefault } from 'components/common/InputDefault';
import { UserContext } from 'contexts/user.context';
import { useContext, useState } from 'react';
import * as Styles from './styles';

const defaultFormFields = {
  email: '',
  password: '',
};

export const SignInFormComponent = () => {

  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const {setCurrentUse} = useContext(UserContext);

  const resetFromFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await appSignInWithPopupGoogle();
    setCurrentUse(user);
    await appCreateUserDocumentFromAuth(user);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const {user} = await appSignInWithEmailAndPassword(email, password);
      setCurrentUse(user);
      resetFromFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break
        case 'auth/popup-closed-by-user':
          alert('no user associated with this email');
          break
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };


  return (
    <Styles.Form onSubmit={() => {}}>
      <HeadingDefault as='h2'>I already have an account</HeadingDefault>
      <TextDefault>Sign in with your email and password</TextDefault>

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

      <Styles.ButtonGroup
        direction='row'
        display='flex'
        gap={{ column: 1.6, unit: 'rem' }}
      >
        <ButtonDefault onClick={handleSubmit} background='black' textcolor='white' title='Sign In' grow={1}/>
        <ButtonDefault
          title='Sign In With Google'
          onClick={signInWithGoogle}
          type='button'
          btntype='google'
          grow={1}
        />
      </Styles.ButtonGroup>
    </Styles.Form>
  );
};
