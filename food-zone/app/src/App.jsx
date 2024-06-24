import { useEffect, useState } from 'react';
import styled from 'styled-components'
import SearchResult from './components/SearchResults/SearchResult';

export const BASE_URL = "http://127.0.0.1:9000";
const App = () => {

  const [data,setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading,setLoading] = useState(false);
  const[error,setError] = useState(null);


  useEffect(()=>{

    const fetchFoodData = async()=>{
      setLoading(true);
     try {
  
      const resp = await fetch(BASE_URL);
      const json = await resp.json();
      setData(json);
      setFilteredData(json);
      setLoading(false);
     } catch (error) {
        setError("unable to fetch data");
     }
    };
    fetchFoodData();

  },[]);

  const searchFood = (e)=>{
    const searchVal = e.target.value;
    if(searchVal===""){
      setFilteredData(null);
    }
    const filter = data?.filter((food)=> food.name.toLowerCase().includes(searchVal.toLowerCase()));
    setFilteredData(filter);
  }
  const filterFood = (type)=>{
    if(type==="all"){
      setFilteredData(Data);
      return;
    }
    const filter = data?.filter((food)=> food.type.toLowerCase().includes(type.toLowerCase()));
    setFilteredData(filter);
    


  }
    if(error) return <div>{error}</div>
    if(loading) return <div>loading..</div>
  return (
    <>
  <Container>
    <TopContainer>
      <div className='logo'>
        <img src='/logo.svg'/>
      </div>
      <div className='search'>
        <input onChange={searchFood} placeholder='Search Food'></input>
      </div>
    </TopContainer>
    <FilterContainer>
      <Button onClick={()=> filterFood("all")}>All</Button>
      <Button  onClick={()=> filterFood("breakfast")}>BreakFast</Button>
      <Button  onClick={()=> filterFood("lunch")}>Lunch</Button>
      <Button  onClick={()=> filterFood("dinner")}>Dinner</Button>
    </FilterContainer>
  
  </Container>
  
  <SearchResult data={filteredData}/>
  </>
  )
};

export default App;

export const Container = styled.div`
  max-width:1200px;
  margin:0 auto;
`;

const TopContainer = styled.section`
  min-height: 140px;
  display:flex;
  justify-content:space-between;
  padding:16px;
  align-items:center;

  .search{
    input{
      background-color:transparent;
      border:1px solid red;
      color:white;
      border-radius:5px;
      height:40px;
      font-size:16px;
      padding:0 10px;
    }
  }
`;

const FilterContainer = styled.section`
  display:flex;
  justify-content:center;
  gap:12px;
  // padding-bottom:40px;
`

export const Button = styled.button`
  background:#ff4343;
  border-radius:5px;
  padding:6px 12px;
  border:none;

`
