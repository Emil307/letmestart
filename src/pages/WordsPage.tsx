import React from 'react';
import H1 from '../shared/H1';
import ProgressBar from '../shared/ProgressBar';

const WordsPage: React.FC = () => {
  return (
    <>
      <H1>Words</H1>
      <ProgressBar progress={80} />
    </>
  )
}

export default WordsPage;