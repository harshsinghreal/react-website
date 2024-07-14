import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'

const Dashboard = () => {
  return (
    <Box>
      <DashboardLayout title="Dashboard" >
        <Grid gridTemplateColumns={{
            base:"repeat(1,1fr)",
            lg:"repeat(2,1fr)",
        }} gap={6}>
            <GridItem colSpan={{
             
                base:1,  
                lg:2, 
       
            }}> <PortfolioSection/> </GridItem>
            <GridItem colSpan={1}> <PriceSection/> </GridItem>
            <GridItem><Transactions/></GridItem>
            <GridItem colSpan={1}> <InfoCard imgUrl='/dot_bg.svg' titles='Loan' texts='Learn More about Loan and bitcoins , acess the value without selling it.'/> </GridItem>
            <GridItem colSpan={1}> <InfoCard imgUrl='/grid_bg.svg' bgcol='p.purple' titles='Contact Us' texts='Have a question, comment, or feedback? We would love to hear from you! Our 
                                                                         dedicated team is here to assist you with any inquiries or concerns.'/> </GridItem>
        </Grid>
        
        
        </DashboardLayout>
       
        
    </Box>
  )
}

export default Dashboard