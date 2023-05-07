import React from 'react';
import { useThemesWords } from '../entities/useThemeWords';
import WordsItem from '../shared/WordsItem';

const WordsList: React.FC = () => {
  const { words, loading, error } = useThemesWords();

  return (
    <>
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
    </>
  )
}

export default WordsList;