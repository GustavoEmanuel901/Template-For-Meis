import React from 'react';

import { MdEmail } from 'react-icons/md'
import { FaWhatsapp } from 'react-icons/fa'

import { Container, Content, Block, Title, Text, Dates, Icons, Button } from './styles'

export default function OrderCard({
  name,
  email,
  telephone,
  product,
  quantity,
  city,
  zipcode,
  address,
  observations,
  dateRequest,
  sendDate,
  buttonAction,
  textButton
}) {
  return (
    <Container>
      <Content>
          <Block>
            <Title>Client Name:</Title>
            <Text>{name}</Text>
          </Block>

          <Block>
            <Title>Product:</Title>
            <Text>{`${quantity}X ${product}`}</Text>
          </Block>

          <Block>
            <Title>Address:</Title>
            <Text>{`${address}, ${city}, ${zipcode}`}</Text>
          </Block>

          <Block>
            <Title>Observations:</Title>
            <Text>{observations ? observations : 'Not observations'}</Text>
          </Block>

          <Dates>
          <Block>
            <Title>Date Request:</Title>
            <Text>{dateRequest}</Text>
          </Block>

          <Block>
            <Title>Send Date:</Title>
            <Text>{sendDate ? sendDate : 'Not Send'}</Text>
          </Block>
          </Dates>
      </Content>

      <Button onClick={buttonAction}>{textButton}</Button>

      <Icons>
          <a target='_blanck' href={`https://wa.me/${telephone}`} >
              <FaWhatsapp size={25} color='#1A1D1A'/>
          </a>

          <a target='_blanck' href={`mailto:${email}`}>
              <MdEmail size={25} color='#1A1D1A'/>
          </a>
      </Icons>
    </Container>
  );
}
