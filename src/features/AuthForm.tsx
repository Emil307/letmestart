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

  function click(e: any) {
    e.preventDefault();
    console.log(email);
  }

  return (
    <Form>
      <Inputs>
        <FormInput placeholder='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <FormInput placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Inputs>
      <Buttons>
        <Button width='150px' height='41px' onClick={click}>Continue</Button>
        <Link href='/signUp'>Sign up</Link>
      </Buttons>
    </Form>
  )
}

export default AuthForm;