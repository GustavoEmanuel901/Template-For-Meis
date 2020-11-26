import styled from 'styled-components';

export const Container = styled.li`
  background: #F5F5F5;
  border-radius: 8px;
  position: relative;
  padding: 24px;

  margin-top: 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  display: block;  
  font-size: 16px;
  color: #41414d;
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Text = styled.span`
  color: #737388;
  line-height: 21px;
  font-size: 16px; 
  margin-bottom: 10px;
`;

export const Dates = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  > div:nth-child(2) {
    margin-right: 50px;
  }
`

export const Button = styled.button`
  height: 50px;
  width: 100%;
  margin-top: 15px;
  border-radius: 20px;
  background: var(--secondary);
  color: var(--font);
  font-weight: bold;
  transition: 400ms;

  &:hover {
    cursor: pointer;
    color: var(--font);
    opacity: 0.8;
  }
`;

export const Icons = styled.div`
  position: absolute;
  right: 24px;
  top: 24px;

  > a {
    margin-right: 5px;
  }
`