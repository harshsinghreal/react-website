import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { useState } from 'react'
import Rules from './Rules'
const GamePlay = () => {
  const[score, setScore] = useState(0);
  const[selectedNumber, setSelectedNumber] = useState();
  const[currentDice, setCurrentDice] = useState(2);
  const[error, setError] = useState("");
  const[showRules,setShowRules] = useState(false);
  const generateRandom =  (min,max)=>{
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

const rollDice = ()=>{
  if(!selectedNumber){
    setError("You have Not selected a number");
    return;
  }
  setError("");
    const randomNum = generateRandom(1,6); 
    setCurrentDice((prev) => randomNum);
    if(selectedNumber===randomNum){
      setScore ((prev)=> prev+randomNum);
    }
    else{
      setScore((prev)=>prev-2);
    }

    setSelectedNumber(undefined);
}

  const resetScore=()=>{
    setScore(0);
  }



  return (
    <MainContainer>
      <div className='top_section'>
       <TotalScore score={score}></TotalScore>
       <NumberSelector 
        error = {error}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
        />

       </div>
       <RollDice
        currentDice={currentDice}
        rollDice = {rollDice}
        />
        <div className='btns'>
          <button onClick={resetScore} className='button-19'>reset</button>
          <button onClick={()=>setShowRules((prev)=>!prev)} className='button-19'>{showRules?"Hide":"Show"} Rules</button>
        </div>
       {showRules&& <Rules></Rules>}
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.main` 
padding-top:1 vw; 
display:flex;
flex-direction:column; 
.top_section{
  display:flex;
  justify-content:space-around;
  align-items:end;
}

.btns{
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:10px;
  align-items:center;
}


  .button-19 {
    max-width:160px;
    
    appearance: button;
    background-color: #1899D6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    box-sizing: border-box;
    color: #FFFFFF;
    cursor: pointer;
    display: inline-block;
    font-family: din-round,sans-serif;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    line-height: 20px;
    margin: 0;
    outline: none;
    overflow: visible;
    padding: 13px 16px;
    text-align: center;
    text-transform: uppercase;
    touch-action: manipulation;
    transform: translateZ(0);
    transition: filter .2s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
    white-space: nowrap;
    width: 100%;
  }
  
  .button-19:after {
    background-clip: padding-box;
    background-color: #1CB0F6;
    border: solid transparent;
    border-radius: 16px;
    border-width: 0 0 4px;
    bottom: -4px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
  
  .button-19:main,
  .button-19:focus {
    user-select: auto;
  }
  
  .button-19:hover:not(:disabled) {
    filter: brightness(1.1);
    -webkit-filter: brightness(1.1);
  }
  
  .button-19:disabled {
    cursor: auto;
  }
  
  .button-19:active {
    border-width: 4px 0 0;
    background: none;
  }







`