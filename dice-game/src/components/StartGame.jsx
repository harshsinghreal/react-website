import React from 'react'
import styled from 'styled-components'

const StartGame = ({toggel}) => {
  return (
    <Container>
      <div>
      <img src="/images/dices.png" alt="dice" />

      </div>
      <div className='content'>
        <h1>Dice Game</h1>
         <Button onClick={toggel}>Play Now</Button>
      </div>
    </Container>
    
  )
}

export default StartGame;

const Container = styled.div`
max-width:1180px;
display:flex;
height:100vh;
margin:0 auto;
align-items:center;
img{
  width:40vw;
}
.content {
  h1{
     font-size:7vw;
    white-space:nowrap;
  }
}
`


const Button = styled.button`
 
padding:1vw 1vw;  
background:black;
color:white;
border-radius:5px;
min-width:4vw;
border:none;
cursor:pointer;
font-size:1.7vw;

&: hover{
  background-color:#383838;
  transition:0.3s;
}

`