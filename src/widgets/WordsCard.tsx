import React from 'react';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';
import styled from 'styled-components';

const Link = styled.a`
  display: block;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 740px;
  height: 120px;
  padding: 30px;
  background: #fff;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  height: 47px;
`

const Left = styled.div``

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
    <Link href='/wordset'>
      <Container>
        <Top>
          <Left>
            <Title fontSize={20}>В отеле</Title>
            <CountWords>31 words</CountWords>
          </Left>
          <ProgressBar progress={70} height='10px' width='100px'/>
        </Top>
      </Container>
    </Link>
  )
}

export default WordsCard;