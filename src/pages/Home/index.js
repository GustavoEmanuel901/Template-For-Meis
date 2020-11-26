import React, { useRef } from 'react'

import { Form } from '@unform/web'
import * as Yup from 'yup'
import { Link, useHistory } from 'react-router-dom'
import { FaFacebookSquare, FaWhatsapp, FaBook } from 'react-icons/fa'
import { MdEmail, MdPerson  } from 'react-icons/md'

import Slider from '../../components/Slides'
import Input from '../../components/Input'
import Select from '../../components/Select'
import Textarea from '../../components/Textarea'

import Logo from '../../assets/logo.png'

import { 
  Container,
  Order,
  Image,
  Header,
  Title,
  Main,
  Block,
  Label,
  Group, 
  Contacts, 
  Links } from './styles';

export default function Home() {
  const formRef = useRef(null)
  const history = useHistory()

  async function handleSubmit(data, { reset }) {
    try {
      const schema = Yup.object().shape({
        client_name: Yup.string().required('Name is Required'),
        client_email: Yup.string().email().required('Email is Required'),
        client_whatsapp: Yup.number().required('Whatsapp is required'),
        quantity: Yup.number().required('Quantity is Required'),
        zipcode: Yup.number().required('Zipcode is Required'),
        address: Yup.string().required('Address is Required'),
        observations: Yup.string().max(100)
      })

      await schema.validate(data, {
        abortEarly: false,
      })

      console.log(data)

      reset()

      history.push('/thank')
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
      <Slider/>

      <Order>
        <Header>
          <Image src={Logo}/>
        </Header>

        <Title>
          Make your wish or
          <Link to='/products' className='link'>know our Products</Link>
        </Title>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Main>
            <Block>
              <Label>Your Name</Label>
              <Input name='client_name' placeholder='Ex: Michael Evans'/>
            </Block>

            <Block>
              <Label>Your Email</Label>
              <Input name='client_email' placeholder='Ex: Youremail@email.com'/>
            </Block>

            <Block>
              <Label>Your Whatsapp</Label>
              <Input 
                name='client_whatsapp' 
                placeholder='Ex: 997676871' 
                type='number' 
                min={0}
              />
            </Block>

            <Group>
              <Block>
                <Label>Select a product</Label>
                <Select 
                  name='product_id'
                  options={[
                    { value: '1235479', label: 'Nike Sneakers'},
                    { value: '487887987', label: 'Adidas Sneakers'}
                  ]}
                />
              </Block>

              <Block>
                <Label>Quantity</Label>
                <Input 
                  name='quantity' 
                  placeholder='Ex: 2' 
                  type='number' 
                  min={1}
                />
              </Block>
            </Group>

            <Group>
              <Block>
                <Label>Select delivery city</Label>
                <Select 
                  name='delivery_city'
                  options={[
                    { value: 'Detroit', label: 'Detroit'},
                    { value: 'Atlanta', label: 'Atlanta'},
                    { value: 'New York City', label: 'New York City'},
                  ]}
                  />
              </Block>

              <Block>
                <Label>Zipcode</Label>
                <Input name='zipcode' placeholder='Ex: 83326789'type='number' min={0}/>
              </Block>
            </Group>
            
            <Block>
              <Label>Address</Label>
              <Input name='address' placeholder='Street 24, 306, Queens'/>
            </Block>

            <Block>
              <Label>Observations</Label>
              <Textarea name='observations' placeholder='Delivery time for those who deliver among others (Not Required)'/>
            </Block>

            <Block>
                <button type='submit' className='button'>Submit</button>
            </Block>
          </Main>
            
        </Form>

        <Contacts>
          <a href className="button whatsapp">
            <FaWhatsapp size={40}/>
            Whatsapp
          </a>
          
          <a href className="button gmail">
            <MdEmail size={40}/>
            Gmail
          </a>

          <a href className="button facebook">
            <FaFacebookSquare size={40}/>
            Facebook
          </a>
        </Contacts>

        <Links>
            <Link to='/login' className='link'>
              <MdPerson size={18}/>
              I´m Admin
            </Link>

            <Link to='/aboutUs' className='link'>
              <FaBook size={18}/>
              About Us
            </Link>
        </Links>
      </Order>
    </Container>
  )
}
