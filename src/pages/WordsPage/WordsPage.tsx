import React from 'react';
//widgets
import Navbar from '../../widgets/Navbar';
import ThemesList from '../../widgets/ThemesList';
//shared
import Title from '../../shared/Title';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(112.15deg, #3CEEB5 -30.82%, #051E73 173.73%);
`

const Container = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 42px 15px 28px;
`

const WordsPage: React.FC = () => {
  return (
    <Page>
      <Container>
        <Navbar/>
        <Title fontSize={38} color='#fff'>Words</Title>
        <ThemesList/>
      </Container>
    </Page>
  )
}

export default WordsPage;