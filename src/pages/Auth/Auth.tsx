import React from 'react';
import styled from 'styled-components';
// shared
import Copyright from '../../shared/Copyright';
// images
import logo from '../../images/uwords.svg';
import fon from './images/fon.jpg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 1170px;
  height: calc(100vh - 70px);
  padding: 42px 15px 28px;
  margin: 0 auto;
`

const Offer = styled.div``

const Image = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
`

const Auth: React.FC = () => {
  return (
    <Container>
      <div>
        <img src={logo} alt="uwords" />
      </div>
      <Offer></Offer>
      <div>
        <Copyright>© 2023, Bignose corporation</Copyright>
      </div>
      <Image src={fon} alt="" />
    </Container>
  )
}

export default Auth