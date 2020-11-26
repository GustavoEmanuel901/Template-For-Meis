import React from 'react'

import { Container, Content, Block, Title, Subtitle, Text } from './styles'

export default function ProductCard({ image, name, description, value, children }) {
  return (
    <Container>
      <img src={image} alt='image_product'/>

      <Content>
        <Title>{name}</Title>

        <Block>
          <Subtitle>Description:</Subtitle>
          <Text>{description}</Text>
        </Block>

        <Block>
          <Subtitle>Value:</Subtitle>
          <Text>{value}</Text>
        </Block>

        <Block>
          {children}
        </Block>
      </Content>
    </Container>
  );
}
