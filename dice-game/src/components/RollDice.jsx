import React, { useState } from 'react'
import styled from 'styled-components'

const RollDice = ({currentDice,rollDice}) => {
  

  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            
            <img src={`/images/dice/dice_${currentDice}.png`} alt='dice1'/>

        </div>
        <p>Click on the dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice

const DiceContainer = styled.div`
margin-top:48px;
display:flex;
flex-direction:column;
align-items:center;

p{
    font-size:24px;
}
.dice{
    cursor:pointer;

}
`