import React, { useState } from 'react';
import styled from 'styled-components';
import FormInput from '../shared/FormInput';
import Button from '../shared/Button';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 252px;
`

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 175px;
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
      <Button width='150px' height='41px' onClick={click}>Continue</Button>
    </Form>
  )
}

export default AuthForm;