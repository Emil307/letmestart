import React from 'react';
import { useThemesList } from '../entities/useThemesList';
import WordsCard from './WordsCard';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 50px auto 0;
  display: grid;
  grid-template-columns: repeat(4, 240px);
  gap: 40px;
`

const ThemesList: React.FC = () => {
  const { themes, loading, error } = useThemesList();

  return (
    <Container>
      {loading ? <p>Loading...</p>
      :
      <>
        {themes.length > 0 ?
          <>
            {error && <p>{error}</p>}
            {themes.map(theme => 
              <WordsCard title={theme.title} progress={theme.progress} count={theme.count} id={theme.id} key={theme.id}/>
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

export default ThemesList;