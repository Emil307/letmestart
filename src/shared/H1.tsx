import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 48px;
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