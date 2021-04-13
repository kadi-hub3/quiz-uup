import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    height: 100%;
  }
  body {
    margin: 0;
    padding-top: 2rem;
    display: grid;
    place-items: center;
    background: #222;
    color: #fff;
    font-size: 1rem;
  }
  * {
    font-family: 'Kiwi Maru', serif;
    box-sizing: border-box;
  }
`
