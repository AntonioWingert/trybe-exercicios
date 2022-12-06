import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  
  > section {
    background-color: #fff;
    width: 50vw;
    height: 12.5rem;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    border-radius: 1rem 1rem 0 0;

    > input {
      padding: 1.5625rem;
      border: none;
      border-radius: 1rem;
      background-color: #ccc;
      margin-top: 1rem;
      outline: none;
      font-size: 2rem;
      text-align: center;
    }

    > button {
      padding: 1.5625rem;
      border: none;
      border-radius: 1rem;
      font-weight: 700;
      margin-top: .5rem;
    }
  }
`;

export const CharactherContainer = styled.div`
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  background-color: #f2f7f2;
  border-radius: 0 0 1rem 1rem;
`;