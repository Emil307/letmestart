import React from 'react';
import Title from '../shared/Title';
import ProgressBar from '../shared/ProgressBar';
import styled from 'styled-components';

const Link = styled.a``

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px;
  height: 160px;
  padding: 30px;
  background: #fff;
  box-shadow: 0px 0px 10px 2px rgba(60, 238, 181, 0.5);
  border-radius: 40px;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 47px;
`

const CountWords = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  color: #06407E;
`

interface WordsCardProps {
  title: string,
  progress: number,
  count: number,
  id: number,
}

const WordsCard: React.FC<WordsCardProps> = ({ title, progress, count, id }) => {
  return (
    <Link href={`/wordset/${id}`}>
      <Container>
        <Top>
          <Title fontSize={24}>{title}</Title>
          <CountWords>{count} words</CountWords>
        </Top>
        <ProgressBar progress={progress} height='15px' width='120px'/>
      </Container>
    </Link>
  )
}

export default WordsCard;