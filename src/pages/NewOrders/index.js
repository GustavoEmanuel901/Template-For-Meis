import React from 'react';

import Navbar from '../../components/Navbar'
import OrderCard from '../../components/OrderCard'
import Pagination from '../../components/Pagination'
import SearchForm from '../../components/SearchForm'

import { Container, Main, Footer } from './styles'

function NewOrders() {
  return (
    <Container>
      <Navbar
        go='/admin/orders/sent'
        textButton='Orders already shipped'
      />

      <SearchForm
        InputName='search'
      />

      <Main>
          <OrderCard
            name='João da Silva'
            email='joaosilva@email.com'
            telephone='9976676871'
            address='26th Street, 456, Brooklyn'
            city='New York'
            zipcode='488946'
            observations='Deliver during the morning'
            product='Sneackes'
            quantity='2'
            dateRequest='02/12/2020'
            sendDate=''
            textButton='Order dispatched'
          />

          <OrderCard
            name='João da Silva'
            email='joaosilva@email.com'
            telephone='9976676871'
            address='26th Street, 456, Brooklyn'
            city='New York'
            zipcode='488946'
            observations='Deliver during the morning'
            product='Sneackes'
            quantity='2'
            dateRequest='02/12/2020'
            sendDate=''
            textButton='Order dispatched'
          />

          <OrderCard
            name='João da Silva'
            email='joaosilva@email.com'
            telephone='9976676871'
            address='26th Street, 456, Brooklyn'
            city='New York'
            zipcode='488946'
            observations='Deliver during the morning'
            product='Sneackes'
            quantity='2'
            dateRequest='02/12/2020'
            sendDate=''
            textButton='Order dispatched'
          />

          <OrderCard
            name='João da Silva'
            email='joaosilva@email.com'
            telephone='041995932085'
            address='26th Street, 456, Brooklyn'
            city='New York'
            zipcode='488946'
            observations='Deliver during the morning'
            product='Sneackes'
            quantity='2'
            dateRequest='02/12/2020'
            sendDate=''
            textButton='Order dispatched'
          />
      </Main>

      <Footer>
        <Pagination/>
      </Footer>
    
    </Container>
  );
}

export default NewOrders;