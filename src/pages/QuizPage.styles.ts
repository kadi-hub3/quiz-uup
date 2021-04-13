import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    margin: 0;
    padding-top: 2rem;
    background: #222;
    color: #fff;
    font-size: 1rem;
    display: grid;
    place-items: center;
  }
  * {
    font-family: 'Kiwi Maru', serif;
    box-sizing: border-box;
  }

  .log-out{
    position: absolute;
    right: 5%;
    background: #777;
    padding: .5rem 2rem;
    border-radius: 1rem;
  }

  .log-icon{
    font-size: 1rem;

}
`
