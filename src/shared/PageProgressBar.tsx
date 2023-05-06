import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100px;
  height: 50px;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.05);
`

interface ProgressBarProps {
  progress?: number,
}

const PageProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <Container>
      <div style={{width: `${progress}%`, height: '100%', background: '#000', borderRadius: '10px'}}></div>
    </Container>
  )
}

export default PageProgressBar