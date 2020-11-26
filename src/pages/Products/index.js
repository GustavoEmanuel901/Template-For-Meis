import React from 'react';

import { FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import ProductCard from '../../components/ProductCard'
import SearchForm from '../../components/SearchForm'
import Pagination from '../../components/Pagination'

import { Container, Main, Footer } from './styles'

export default function Products() {
  return (
    <Container>
      <Header/>

      <SearchForm
        InputName='search'
      />

      <Main>
          <ProductCard 
            name='Sneakers'
            image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
            value='$ 200.00'
          />

          <ProductCard 
            name='Sneakers'
            image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
            value='$ 200.00'
          />

          <ProductCard 
            name='Sneakers'
            image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
            value='$ 200.00'
          />

          <ProductCard 
            name='Sneakers'
            image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
            value='$ 200.00'
          />

          <ProductCard 
            name='Sneakers'
            image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
            value='$ 200.00'
          />

        <ProductCard 
            name='Sneakers'
            image='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
            description='Vestibulum accumsan leo ligula, et pellentesque eros hendrerit vitae. Nulla quis tempus lectus. Nulla dapibus dolor a est luctus fringilla.'
            value='$ 200.00'
          />
         
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
