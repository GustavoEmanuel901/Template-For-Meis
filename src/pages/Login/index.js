import React, { useRef } from 'react';

import { Form } from '@unform/web'
import { Link, useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { MdLiveHelp } from 'react-icons/md'
import { FiArrowLeft } from 'react-icons/fi'

import Input from '../../components/Input'

import { Container, Title, Label, Block, Links } from './styles';

import Logo from '../../assets/logo.png'

export default function Login() {
  const formRef = useRef(null)
  const history = useHistory()

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required('Invalid Email'),
        password: Yup.string().required('Password Incorrect')
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data)

      reset()

      history.push('/admin/initial')
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
      <img src={Logo} className='image' alt="Logo"/>

      <Title>Login Admin</Title>

      <Form ref={formRef} onSubmit={handleSubmit}>
          <Block>
            <Label>Email</Label>
            <Input name='email' type='email' placeholder='Your Email Registered'/>
          </Block>

          <Block>
            <Label>Password</Label>
            <Input name='password' type='password' placeholder='Your Password Registered'/>
          </Block>

          <Block>
            <button type='submit' className="button">
              Login
            </button>
          </Block>
      </Form>

      <Links>
        <Link to='/forgot_password' className='link'>
          <MdLiveHelp/>
          Forgot Password
        </Link>

          <Link to='/' className='link'>
            <FiArrowLeft/>
            Back to Home
          </Link>
      </Links>
    </Container>
  );
}
