import React from 'react';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';

const WordsPage: React.FC = () => {
  return (
    <>
      <Title fontSize={42} fontWeight={700}>Words</Title>
      <ProgressBar progress={80} height='20px' width='200px' />
    </>
  )
}

export default WordsPage;