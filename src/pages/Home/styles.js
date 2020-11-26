import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 600px) {
    grid-template-columns: 1fr;

    .carousel {
      display: none;
    }
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--scroll);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--primary);

  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 150px;
  height: 130px;
`;

export const Title = styled.p`
  color: var(--font);
  font-size: 22px;
  margin-top: 15px;
  text-decoration: none;
  line-height: 30px;

  padding: 10px 20px;
`;

export const Main = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 10px 20px;
`;

export const Label = styled.label`
  font-size: 16px;
  color: var(--font);
`;

export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 100%
  }

  @media (max-width: 815px){
    display: inline;
  }
`;

export const Contacts = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    padding: 10px 20px;

    > .whatsapp {
      background: var(--whatsapp);
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 20px;

      > svg {
        margin-right: 20px;
      }
    }

    > .facebook {
      background: var(--facebook);
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 20px;

      > svg {
        margin-right: 20px;
      }
    }

    > .gmail {
      background: var(--gmail);
      display: flex;
      align-items: center;
      justify-content:center;
      margin-bottom: 20px;

      > svg {
        margin-right: 40px;
      }
    }
`

export const Links = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 20px;
`;