import React from 'react';
//widgets
import WordsCard from '../widgets/WordsCard';
//shared
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';
import Button from '../shared/Button';
import styled from 'styled-components';

const Container = styled.div`
  width: 160px;
`

const WordsPage: React.FC = () => {
  function click() {
    console.log('click');
  }

  return (
    <Container>
      <Title fontSize={42} fontWeight={700}>Words</Title>
      <ProgressBar progress={80} height='20px' width='200px' />
      <Button onClick={click}>Continue</Button>
      <WordsCard></WordsCard>
    </Container>
  )
}

export default WordsPage;