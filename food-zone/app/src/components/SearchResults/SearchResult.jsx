import React from 'react'
import styled from 'styled-components'
const SearchResult = ({data }) => {
  return (
    <FoodCartContainer>
    <FoodCards>
    {
        data?.map((food)=>(
            <FoodCard key = {food.name} >
                {food.text}
            </FoodCard>
        ))
    }
    </FoodCards>
  </FoodCartContainer>
  )
}

export default SearchResult



const FoodCartContainer = styled.section`
  height:calc(100vh - 140px);
  background-image:url("/bg.png");
  background-size:cover;
  height:100vh;

`

const FoodCards = styled.section`


`
const FoodCard = styled.section`


`