import React, { useState } from 'react';
import styled from 'styled-components';
// shared
import FormInput from '../shared/FormInput';
import Button from '../shared/Button';
import Link from '../shared/Link';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 252px;
  width: 406px;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 175px;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const AuthForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function submitForm(e: any) {
    const formData = new FormData(e.target);

    e.preventDefault();
    fetch('http://localhost:8000/auth/token/login/', {
      method : 'POST',
      body : formData,
    })
    .then (response => response.text())
    .then (response => {
      response = JSON.parse(response);
      localStorage.setItem('token', JSON.stringify((response as any).auth_token));
    })
  }

  return (
    <Form onSubmit={submitForm}>
      <Inputs>
        <FormInput placeholder='E-mail' type='email' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <FormInput placeholder='Password' type='password' name='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Inputs>
      <Buttons>
        <Button width='150px' height='41px'>Continue</Button>
        <Link href='/signUp'>Sign up</Link>
      </Buttons>
    </Form>
  )
}

export default AuthForm;