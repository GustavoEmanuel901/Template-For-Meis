import React from 'react';

import { Form } from '@unform/web'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import Input from '../../components/Input'

import { Container, Title, Subtitle, Block, Label, Links, Group } from './styles';

import Logo from '../../assets/logo.png'

export default function ResetPassword() {
  return (
    <Container>
        <img src={Logo} className='image' alt="logo"/>

        <Title>Reset password</Title>
        <Subtitle>Choose your new password</Subtitle>
        
        <Form>
          <Group>
           <Block>
              <Label>Your E-mail</Label>
              <Input name='email' placeholder='Your Email Registered' type='email'/>
            </Block>

            <Block>
              <Label>Security Token</Label>
              <Input name='token' placeholder='Token sent by email'/>
            </Block>
          </Group>

          <Group>
            <Block>
              <Label>Your New Password</Label>
              <Input name='password' placeholder='6 or more characters' type='password'/>
            </Block>

            <Block>
              <Label>Confirm Your New Password</Label>
              <Input name='password' placeholder='New Password' type='password'/>
            </Block>
          </Group>

          <Block>
            <button className="button" type='submit'>
              Submit
            </button>
          </Block>
        </Form>

        <Links>
          <Link to='/login' className='link'>
            <FiArrowLeft/>
            Back to Login
          </Link>
      </Links>
    </Container>
  )
}