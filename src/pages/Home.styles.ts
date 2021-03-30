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
    align-items: center;
    background: #222;
    color: red;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }

`
export const Title = styled.h3`
    font-size: 3em;
    text-align: center;
    color: #fff;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;

    span{
      font-size: 1.5rem;
      padding-left: 2em;
      color: #db7093;
    }

`
export const AppWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 90vw;

    .card{
        position: relative;
        width: 320px;
        height: 320px;
        margin: 15px;
        color: #333;
        overflow: hidden;
        border-radius: 1rem;

    }

    .imgBx, . contentBx {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
    }

    img{
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .contentBx::before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #fff;
      transform: scalex(0);
      transition: transform 0.2s ease-in-out;
      transform-origin: right;
    }

      .card:hover .contentBx::before{
        transform: scaleX(1);
        transition: transform 0.2s ease-in-out;
        transform-origin: left;
      }

      .card .contentBx{
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .card .contentBx .content{
        position: relative;
        padding: 2rem;
        z-index: 1;
        transition: .2s;
        transform: translateX(-300px);
      }

      .card:hover .contentBx .content{
        transition: .2s;
        transform: translateX(0);
      }
`;
