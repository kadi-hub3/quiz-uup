import styled from 'styled-components'
import GeneralImg from '../images/general-img.jpg'

export const Container = styled.div`
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
      transition: transform 0.5s ease-in-out;
      transform-origin: right;
    }

      .card:hover .contentBx::before{
        transform: scaleX(1);
        transition: transform 0.5s ease-in-out;
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
        transition: .5s;
        transform: translateX(-300px);
      }

      .card:hover .contentBx .content{
        transition: .5s;
        transform: translateX(0);
      }

  `