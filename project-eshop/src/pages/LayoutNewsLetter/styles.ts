import { styled } from 'styled-components';

export const Container = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem 0;
  align-items: center;
  h1 {
    text-align: center;
  }
  form {
    display: flex;
    width: 100%;
  }

  input {
    padding: 1.5rem 1rem;
    border: 1px solid rgb(251, 139, 127);
    font-size: 2rem;
    color: rgb(251, 139, 127);
  }

  input[type='email'] {
    flex-grow: 3;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  input[type='email']::placeholder {
    color: rgb(251, 139, 127);
  }

  input[type='submit'] {
    background-color: rgb(251, 139, 127);
    color: white;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    cursor: pointer;
    flex-grow: 1;
  }
`;
