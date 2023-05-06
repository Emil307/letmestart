import React, { ChangeEventHandler } from 'react';
import styled from 'styled-components';

const FormInputStyled = styled.input`
  width: 455px;
  height: 73px;
  border: 3px solid rgba(238, 238, 238, 1);
  padding-left: 20px;
  border-radius: 24px;

  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  line-height: 18px;

  color: #DECECE;
`

interface FormInputProps {
  type?: string,
  placeholder: string,
  value: string,
  onChange: ChangeEventHandler<HTMLInputElement>,
}

const FormInput: React.FC<FormInputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <FormInputStyled placeholder={placeholder} type={type} value={value} onChange={onChange}/>
  )
}

export default FormInput;