import React from 'react'

import { Container } from './styles'

import Logo from '../../assets/logo.png'

export default function Header() {
  return (
    <Container>
      <img src={Logo} alt='Logo'/>
    </Container>
  );
}

