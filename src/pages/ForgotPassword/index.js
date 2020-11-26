import React, { useRef } from 'react'

import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import Input from '../../components/Input'

import { Container, Title, Subtitle, Block, Label, Links } from './styles';

import Logo from '../../assets/logo.png'

export default function ForgotPassword() {
  const formRef = useRef(null)
  const history = useHistory()

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Invalid Email'),
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data)

      reset()

      history.push('/reset_password')
    } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errorMessages = {}

          err.inner.forEach(error => {
              errorMessages[error.path] = error.message;
          })

          formRef.current.setErrors(errorMessages)
      }
    }
  }

  return (
    <Container>
      <img className='image' src={Logo} alt='Logo'/>

      <Title>Forgot Password</Title>
      <Subtitle>No problem, enter your registered email</Subtitle>

      <Form ref={formRef} onSubmit={handleSubmit}>
        <Block>
            <Label>E-mail</Label>
            <Input name='email' type='email' placeholder='Your Email Registered'/>

            <button type='submit' className="button">Submit</button>
        </Block>
      </Form>

      <Links>
        <Link to='/login' className='link'>
            <FiArrowLeft/>
            Back to Login
        </Link>
      </Links>
    </Container>
  );
}

