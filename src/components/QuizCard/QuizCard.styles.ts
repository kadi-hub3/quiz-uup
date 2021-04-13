import styled from 'styled-components'

export const CardWrapper = styled.div`
position: relative;
display: flex;
max-width: 80vw;
flex-direction: row;

.card{
    position: relative;
    max-width: 600px;
    max-height: 800px;
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
  transform: scaleX(0);
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
    padding: 3rem;
    z-index: 1;
    transition: .2s;
    transform: translateX(-600px);
  }

  .card .contentBx .content h3{
    font-weight: bolder;
  }

  .card:hover .contentBx .content{
    transition: .2s;
    transform: translateX(0);
  }

  .card .contentBx .content .start{
    margin: .5rem 0;
    padding: .5rem 2rem;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
    background: #32CD32;
    border-radius: 1rem;
    cursor: pointer;
  }

  .card .contentBx .content .start:hover{
    background: orange;
  }

  `
