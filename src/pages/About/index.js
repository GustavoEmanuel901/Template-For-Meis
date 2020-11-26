import React from 'react'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import { Container, Content, Block, Title, Text, Subtitle, Footer } from './styles'

export default function About() {
  return (
    <Container>
      <Header/>

      <Content>
        <Title>About Us</Title>
        <Block>
          <Subtitle>Who we are</Subtitle>
          <Text>In consequat lectus arcu, ut tincidunt risus pharetra ut. Curabitur vitae bibendum dui, rutrum euismod dolor. Nam eget turpis turpis. In maximus diam eu tellus mollis tincidunt. Duis tincidunt velit libero, eu ultricies ligula congue at. Aliquam erat volutpat. Nunc in sodales mauris, in tincidunt felis. Vestibulum a sollicitudin nunc. Vivamus et arcu in massa condimentum ultricies. Maecenas porttitor laoreet lectus at fringilla.</Text>
        </Block>

        <Block>
          <Subtitle>What we do</Subtitle>
          <Text>In consequat lectus arcu, ut tincidunt risus pharetra ut. Curabitur vitae bibendum dui, rutrum euismod dolor. Nam eget turpis turpis. In maximus diam eu tellus mollis tincidunt. Duis tincidunt velit libero, eu ultricies ligula congue at. Aliquam erat volutpat. Nunc in sodales mauris, in tincidunt felis. Vestibulum a sollicitudin nunc. Vivamus et arcu in massa condimentum ultricies. Maecenas porttitor laoreet lectus at fringilla.</Text>
        </Block>

        <Block>
          <Subtitle>Who we are</Subtitle>
          <Text>In consequat lectus arcu, ut tincidunt risus pharetra ut. Curabitur vitae bibendum dui, rutrum euismod dolor. Nam eget turpis turpis. In maximus diam eu tellus mollis tincidunt. Duis tincidunt velit libero, eu ultricies ligula congue at. Aliquam erat volutpat. Nunc in sodales mauris, in tincidunt felis. Vestibulum a sollicitudin nunc. Vivamus et arcu in massa condimentum ultricies. Maecenas porttitor laoreet lectus at fringilla.</Text>
        </Block>

        <Block>
          <Subtitle>Who we are</Subtitle>
          <Text>In consequat lectus arcu, ut tincidunt risus pharetra ut. Curabitur vitae bibendum dui, rutrum euismod dolor. Nam eget turpis turpis. In maximus diam eu tellus mollis tincidunt. Duis tincidunt velit libero, eu ultricies ligula congue at. Aliquam erat volutpat. Nunc in sodales mauris, in tincidunt felis. Vestibulum a sollicitudin nunc. Vivamus et arcu in massa condimentum ultricies. Maecenas porttitor laoreet lectus at fringilla.</Text>
        </Block>

        <Block>
          <Subtitle>Who we are</Subtitle>
          <Text>In consequat lectus arcu, ut tincidunt risus pharetra ut. Curabitur vitae bibendum dui, rutrum euismod dolor. Nam eget turpis turpis. In maximus diam eu tellus mollis tincidunt. Duis tincidunt velit libero, eu ultricies ligula congue at. Aliquam erat volutpat. Nunc in sodales mauris, in tincidunt felis. Vestibulum a sollicitudin nunc. Vivamus et arcu in massa condimentum ultricies. Maecenas porttitor laoreet lectus at fringilla.</Text>
        </Block>

        <Block>
          <Subtitle>Who we are</Subtitle>
          <Text>In consequat lectus arcu, ut tincidunt risus pharetra ut. Curabitur vitae bibendum dui, rutrum euismod dolor. Nam eget turpis turpis. In maximus diam eu tellus mollis tincidunt. Duis tincidunt velit libero, eu ultricies ligula congue at. Aliquam erat volutpat. Nunc in sodales mauris, in tincidunt felis. Vestibulum a sollicitudin nunc. Vivamus et arcu in massa condimentum ultricies. Maecenas porttitor laoreet lectus at fringilla.</Text>
        </Block>
      </Content>

      <Footer>
        <Link to='/' className='link'>
            <FiArrowLeft/>
            Back to Home
        </Link>
      </Footer>
    </Container>
  );
}
