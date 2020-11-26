import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
`;

export const Title = styled.h1`
  font-size: 30px;
  color: var(--font);
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: var(--font);
  margin-top: 10px;
`;

export const Block = styled.div`
  width: 350px;
  margin: 20px 10px 0;

  > button {
    width: 100%;
    margin-top: 10px;
  } 

  @media (max-width: 370px) {
    width: 300px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 800px){
    display: inline;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  color: var(--font);
`;

export const Links = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  margin: 30px 0;
`;