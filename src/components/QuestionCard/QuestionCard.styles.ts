import styled from 'styled-components'


export const Wrapper = styled.div` 
width: 80vw;
min-height: 60vh;
max-height:80vh;
background: #333;
border-radius: 10px;
border: 1em solid #555;
padding: 2rem;
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
text-align: center;
display: grid;
place-items: center;
margin: 4rem 0;

`

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const Button = styled.div<ButtonWrapperProps>`
  background: transparent;
  :hover {
    opacity: 0.8;
  }
  button {
    cursor: pointer;
    font-size: 1rem;
    font-weight: 700;
    width: 40vw;
    max-height: 5rem;
    min-height:1rem;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
    correct
      ? 'linear-gradient(90deg, #5aff15, #00b712)'
      : !correct && userClicked
        ? 'linear-gradient(90deg, #a71d31, #3f0d12)'
        : 'linear-gradient(90deg, #fc575e, #f7b42c)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: #fff;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
  @media (max-width: 425px) {
    font-size: .5rem;

    button{
      font-size: .7rem;
    }
  
  }
  `