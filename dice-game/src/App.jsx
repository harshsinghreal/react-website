import styled from "styled-components";
import StartGame from "./components/StartGame";
import { useState } from "react";
import GamePlay from "./components/GamePlay";
const Button = styled.button`
  background-color:black;
  color:white;
  padding:10px;
`
function App() {
  const [isGameStarted,setIsGameStarted] = useState(false)
  const toggelGamePlay = ()=>{
    setIsGameStarted((prev)=>!prev);
  }
  return (
    <>
    { isGameStarted?<GamePlay></GamePlay> :<StartGame toggel={toggelGamePlay}></StartGame>}
     </>
  )
}

export default App
