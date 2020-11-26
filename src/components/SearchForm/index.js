import React from 'react';

import Input from '../Input'
import { Form } from '@unform/web'
import { BiSearch } from 'react-icons/bi'

import { Block, Button } from './styles'

export default function SearchForm({ InputName }) {
  return (
    <Form>
        <Block>
            <Input name={InputName} type="text" placeholder='Search for items here'/>
            <Button>
              <BiSearch color='#fff'/>
            </Button>
        </Block>
      </Form>
  )
}

