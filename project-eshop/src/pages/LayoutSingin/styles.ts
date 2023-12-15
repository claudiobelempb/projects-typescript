import { styled } from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-top: 5rem;

  h2 {
    text-align: center;
    font-size: 3rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* width: 30%; */
  }

  input {
    border: none;
    background-color: none;
    outline: none;
    padding: 1rem 2rem;
    border: 1px solid black;
    border-radius: 0.5rem;
  }

  input[type='submit'] {
    border: none;
    background-color: #6a67ce;
    color: white;
    cursor: pointer;
  }

  ul {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    li {
      width: 33.33%;
      border-radius: 0.5rem;
      padding: 1rem 2rem;
      text-align: center;

      a {
        color: white;
        font-size: 1.5rem;
      }
    }
  }

  ul li:first-child {
    background-color: #2155cd;
  }

  ul li:nth-child(2) {
    background-color: #79dae8;
  }

  ul li:last-child {
    background-color: #eb5353;
  }

  span {
    text-align: center;
    font-size: 2rem;
    padding: 1rem 0;
  }

  a {
    color: #6a67ce;
    font-size: 1.5rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }

  p a {
    margin-left: 1rem;
    color: #6a67ce;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
