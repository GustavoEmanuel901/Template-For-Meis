import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 100vh;

  margin: auto;

  @media(max-width: 1180px) {
    margin: 0 20px;
  }
`;

export const Main = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;

  @media(max-width: 823px){
    grid-template-columns: 1fr;
    margin-right: 10px;
  }
`;

export const Footer = styled.footer`
  margin: 32px 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  @media(max-width: 823px){
    align-items: center;
    justify-content: center;
  }
`