import React from 'react';

import { Container, PaginationItem, PaginationButton } from './styles'

export default function Pagination() {
  return (
    <Container>
      <PaginationButton>
        <PaginationItem>Previous</PaginationItem>
        <PaginationItem className='select'>1</PaginationItem>
        <PaginationItem>2</PaginationItem>
        <PaginationItem>3</PaginationItem>
        <PaginationItem>Next</PaginationItem>
      </PaginationButton>
    </Container>
  );
}

