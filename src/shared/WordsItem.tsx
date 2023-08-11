import React from 'react';
// shared
import Title from './Title';
// icons
import acceptIcon from '../images/accept-icon.svg';
// styles
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 14px 0;
`

const Content = styled.div``

const Text = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 15px;

  color: #606060;
  margin-top: 5px;
`

const Span = styled.span``

interface WordsItemProps {
  value: string,
  translate: string,
  isLearned: boolean,
}

const WordsItem: React.FC<WordsItemProps> = ({ value, translate, isLearned }) => {
  return (
    <Container>
      <Content>
        <Title fontSize={18} fontWeight={500}>{translate}</Title>
        <Text>{value}</Text>
      </Content>
      <Span>
        {isLearned ?
          <img src={acceptIcon} alt="learned" /> :
          <></>
        }
      </Span>
    </Container>
  )
}

export default WordsItem