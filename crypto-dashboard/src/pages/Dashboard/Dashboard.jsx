import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'

const Dashboard = () => {
  return (
    <Box>
      <DashboardLayout title="Dashboard" >
        <Grid gridTemplateColumns={{
            base:"repeat(1,1fr)",
            sm:"repeat(2,1fr)",
        }} gap={6}>
            <GridItem colSpan={2}> <PortfolioSection/> </GridItem>
            <GridItem colSpan={1}> <PriceSection/> </GridItem>
        </Grid>
        
        
        </DashboardLayout>
       
        
    </Box>
  )
}

export default Dashboard