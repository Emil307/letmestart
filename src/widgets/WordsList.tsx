import React from 'react';
import { useThemesWords } from '../entities/useThemeWords';
import WordsItem from '../shared/WordsItem';
import styled from 'styled-components';

const Container = styled.div``

const WordsList: React.FC = () => {
  const { words, loading, error } = useThemesWords();

  return (
    <Container>
      {loading ? <p>Loading...</p>
      :
      <>
        {words.length > 0 ?
          <>
            {error && <p>{error}</p>}
            {words.map(word => 
              <WordsItem key={word.id}/>
            )}
          </>
          :
          <p>недостаточно данных</p>
        }
      </>
      }
    </Container>
  )
}

export default WordsList;