import React from 'react';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 180px;
  padding: 30px;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 47px;
`

const CountWords = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #06407E;
`

const Bottom = styled.div``

const WordsCard: React.FC = () => {
  return (
    <Container>
      <Top>
        <Title fontSize={20}>В отеле</Title>
        <CountWords>31 words</CountWords>
      </Top>
      <Bottom>
        <ProgressBar progress={70} height='10px' width='100px'/>
      </Bottom>
    </Container>
  )
}

export default WordsCard;