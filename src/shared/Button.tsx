import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  background: #06407E;
  color: #fff;
  border-radius: 10px;
  box-shadow: 0px 4px 1px #0A2139;
  transition: all .2s ease;
  &:hover {
    transform: translateY(4px);
    box-shadow: 0px 0px 0px #0A2139;
  }
`

interface ButtonProps {
  children: React.ReactNode,
  height?: string,
  onClick?: (e: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({ children, height, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} style={{height: height}}>{children}</ButtonContainer>
  )
}

export default Button;