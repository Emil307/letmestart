import React from 'react';
// widgets
import WordsList from '../../widgets/WordsList';
// shared
import BackArrow from '../../shared/BackArrow';
import ProgressBar from '../../shared/ProgressBar';
// styles
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  display: flex;
  justify-content: end;
  width: 70px;
  height: calc(100vh - 50px);
  padding-top: 50px;
`

const Right = styled.div`
  width: 270px;
`

const WordsSetPage: React.FC = () => {
  
  return (
    <Container>
      <Left><BackArrow href='/words'/></Left>
      <WordsList/>
      <Right>
        <ProgressBar progress={70} height='20px' width='270px'/>
      </Right>
    </Container>
  )
}

export default WordsSetPage;