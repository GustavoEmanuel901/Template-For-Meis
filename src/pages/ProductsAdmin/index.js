import React from 'react'

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Navbar from '../../components/Navbar'
import Pagination from '../../components/Pagination'
import ProductCard from '../../components/ProductCard'
import SearchForm from '../../components/SearchForm'

import { Container, Main, Footer, DeleteButton } from './styles'

export default function ProductsAdmin() {
  return(
    <Container>
      <Navbar go='/admin/add' textButton='Add a new Product'/>

      <SearchForm
        InputName='search'
      />

      <Main>
        <ProductCard 
          name='Sneakers'
          image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
          value='$ 200.00'
        >
          <DeleteButton>Delete this Product</DeleteButton>
        </ProductCard>

        <ProductCard 
          name='Sneakers'
          image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
          value='$ 200.00'
        >
          <DeleteButton>Delete this Product</DeleteButton>
        </ProductCard>

        <ProductCard 
          name='Sneakers'
          image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
          value='$ 200.00'
        >
          <DeleteButton>Delete this Product</DeleteButton>
        </ProductCard>

        <ProductCard 
          name='Sneakers'
          image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
          value='$ 200.00'
        >
          <DeleteButton>Delete this Product</DeleteButton>
        </ProductCard>

        <ProductCard 
          name='Sneakers'
          image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
          value='$ 200.00'
        >
          <DeleteButton>Delete this Product</DeleteButton>
        </ProductCard>

        <ProductCard 
          name='Sneakers'
          image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
          description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
          value='$ 200.00'
        >
          <DeleteButton>Delete this Product</DeleteButton>
        </ProductCard>
      </Main>

      <Footer>
        <Link to='/' className='link'>
          <FiArrowLeft/>
          Back to Home
        </Link>

        <Pagination/>
      </Footer>
    </Container>
    
  );
}
