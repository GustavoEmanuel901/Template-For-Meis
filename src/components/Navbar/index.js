import React from 'react'

import { Link, useHistory } from 'react-router-dom'

import { Container, Image, Links } from './styles'

import Logo from '../../assets/logo.png'

export default function Navbar({ go, textButton }) {

  const history = useHistory()

  function Logout() {
    history.push('/')
  }

  return(
    <Container>
      <Image src={Logo} alt='logo'/>

      <Link to={go} className='navButton'>
        {textButton}
      </Link>

      <Links>
        <Link to='/admin/initial' className='items'>Back to Home</Link>
        <button type='button' onClick={Logout} className='items'>Logout</button>
      </Links>
    </Container>
  )
}
