import React from 'react'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import { Container, Title, Subtitle, Text } from './styles'

function Thank() {
  return (
    <Container>
        <Header/>

        <Title>Your Order was successfully placed</Title>

        <Subtitle>Thanks for your request, soon you will arrive at your house.</Subtitle>

        <Text>
          Duis ullamcorper, neque eu rhoncus rutrum, neque eros auctor dui,
          et ultricies nibh lorem at nulla. Sed posuere, eros sed tempus tincidunt,
          metus magna iaculis odio, sed ornare nulla nibh quis sapien.
          Aenean nec neque volutpat, pulvinar libero non, pretium justo.
          Mauris et risus quis ex interdum laoreet.
          Quisque non massa a ante ullamcorper rhoncus id sed nisi.
          Mauris porttitor nunc a diam convallis commodo.
          Sed sodales consectetur fermentum. Nullam a ultricies ex.
          Fusce massa est, laoreet eget sagittis vitae, vulputate non mi.
          Nam porttitor velit magna, vitae posuere dolor condimentum at.
          Pellentesque eu urna sagittis, ultrices libero faucibus, aliquam lacus.
          Mauris id pulvinar tortor, sit amet vulputate velit. Curabitur nec lacinia est.
          Morbi ornare dictum dui non tempus.
        </Text>

        <Link to='/' className='link'>
            <FiArrowLeft/>
            Back to Home
        </Link>
    </Container>
  );
}

export default Thank;