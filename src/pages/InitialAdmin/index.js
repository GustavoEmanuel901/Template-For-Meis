import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Container, Title, Content, Button } from './styles'

import Logo from '../../assets/logo.png'

export default function InitialAdmin() {

  const history = useHistory()

  function Logout() {
    history.push('/')
  }

  return (
    <Container>
      <img src={Logo} className='image' alt="Logo"/>

      <Title>What do you want to see now?</Title>

      <Content>
        <Link to='/admin/products' className='button'>
          My Products
        </Link>

        <Link to='/admin/orders/notsent' className='button'>
          My Requests
        </Link>

        <Button type='button' onClick={Logout}>
          Logout
        </Button>
        
      </Content>
    </Container>
  );
}
