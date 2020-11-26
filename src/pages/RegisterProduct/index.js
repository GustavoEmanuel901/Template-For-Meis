import React from 'react';

import { Form } from '@unform/web'
import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Upload from '../../components/Upload';
import FileList from '../../components/FileList';

import Logo from '../../assets/logo.png'

import { Container, Dashboard, Block, Label, Content, Image, Subtitle, Title, UploadContainer } from './styles';

export default function RegisterProduct() {
  return (
    <Container>
      <Dashboard>
        <Image src={Logo} className='image' alt='logo'/>

        <Title>Add new product in your list</Title>
        <Subtitle>The more the better, add more products to your list</Subtitle>
        <Link className='link' to='/admin/products'>
          <FiArrowLeft/>
          Back for previous page
        </Link>
      </Dashboard>

      <Content>
        <Form>
          <UploadContainer>
            <Upload/>
            <FileList/>
          </UploadContainer>

          <Block>
            <Label>Product Name</Label>
            <Input name='name' placeholder='Name of your product'/>
          </Block>

          <Block>
            <Label>Short Description</Label>
            <Textarea name='description' placeholder='Do one a short description about yout product'/>
          </Block>

          <Block>
            <Label>Value</Label>
            <Input name='value' type='number' placeholder='What value of your product'/>
          </Block>
            
          <Block>
            <button className="button">Add Product</button>
          </Block>
        </Form>
      </Content>
    </Container>
  );
}

