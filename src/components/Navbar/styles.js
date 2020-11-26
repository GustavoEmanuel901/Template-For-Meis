import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 30px;

  border-bottom: 1px solid var(--scroll);

  .navButton {
    background: var(--secondary);
    width: 320px;
    height: 60px;
    color: var(--font);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 840px){
    flex-direction: column;
    padding: 24px;
  }
`;

export const Image = styled.img`
  width: 150px;
  height: 150px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

  .items {
    margin: 0 40px;
    color: var(--secondary);
    font-size: 16px;
    font-weight: bold;
  }

  > button {
    background: none;

    &:hover {
      opacity: 0.7;
    }
  }

  @media(max-width: 415px){
    flex-direction: column;

    > .items:nth-child(2) {
      margin-top: 20px;
    }
  }

  @media(max-width: 840px){
    margin-top: 25px;
  }
`;
