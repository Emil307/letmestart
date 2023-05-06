import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  
`

interface H1Props {
  children: React.ReactNode,
}

const H1: React.FC<H1Props> = ({ children }) => {
  return (
    <Title>{children}</Title>
  )
}

export default H1