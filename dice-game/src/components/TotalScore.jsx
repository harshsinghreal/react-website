import React from 'react'
import styled from 'styled-components'
const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
    <h1>{score}</h1>
    <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
// background-color:red;
max-width:200px;
text-align: center;
h1{
    font-size: 100px;
    line-height:150px;
}
p{
    font-size: 24px;
    font-weight:500px;
}

`