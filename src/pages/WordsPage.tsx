import React from 'react';
import H1 from '../shared/H1';
import PageProgressBar from '../shared/PageProgressBar';

const WordsPage: React.FC = () => {
  return (
    <>
      <H1>Words</H1>
      <PageProgressBar progress={80} />
    </>
  )
}

export default WordsPage;