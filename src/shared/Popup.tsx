import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .4);

  display: flex;
  justify-content: center;
`

const Content = styled.div`
  margin: 20px;
  padding: 10px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: auto;
`

interface PopupProps {
    active: boolean,
    setActive: (active: boolean) => void,
    children: React.ReactNode,
}

const Popup: React.FC<PopupProps> = ({ active, setActive, children }) => {
  return (
    <>
        {active ?
            <Container onClick={() => setActive(false)}>
            <Content onClick={e => e.stopPropagation()}>
                {children}
            </Content>
            </Container>
            : <></>
        }
    </>
  )
}

export default Popup;