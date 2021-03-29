import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    margin: 0;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    background: rgba(19, 28, 41, 0.8);
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`
export const Title = styled.h3`
    font-size: 2.5em;
    text-align: center;
    color: #fff;
    text-transform: capitalize;

`
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  margin: 4em 0;

  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffe53b, #ff2525);
    box-shadow: 0 1rem 2rem .5rem rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    padding: 0 4rem;
  }
  .start {
    width: 25vw;
    height:25vh;
    margin: 2em 1rem;
    font-size: 1.5em;
    font-weight: 700;
    color: #fff;
  }

  .start:hover{
      transform: translateY(-20px);
      transition: .5s ease-in-out;
  }
`;
