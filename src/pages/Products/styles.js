import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  height: 100vh;

  margin: auto;

  @media(max-width: 1250px){
    display: flex;
    flex-direction: column;
    align-items: center;

    > div {
      align-items: center;
      justify-content: center;
    }

    > footer {
      width: 90%;
    }
  }
`;

export const Main = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  margin: 30px 0;
  grid-gap: 20px;

  @media(max-width: 950px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 630px) {
    grid-template-columns: 1fr ;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 35px 0;

  max-width: 1110px;

  @media(max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -5px;

    > a {
      margin-bottom: 30px;
    }
  }
`;
