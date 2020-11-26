import React from 'react'

import { MdCheckCircle, MdError } from 'react-icons/md'

import { Container, FileInfo, Preview } from './styles'

export default function FileList() {
  return (
    <Container>
      <li>
        <FileInfo>
          <Preview src='https://images.unsplash.com/photo-1579828898622-446b9d65ff73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'/>
          <div>
            <strong>Sneakers</strong>
              <span>
                <button onClick={() => {}}>Delete</button>
              </span>
          </div>
        </FileInfo>
  
        <div>
          <MdCheckCircle size={24} color='#78e5e5'/>
          <MdError size={24} color='#e57b7b'/>
        </div>
      </li>
  </Container>
  );
}

