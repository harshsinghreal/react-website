import { Card } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import SupportCard from './components/SupportCard'

const Support = () => {
  return (
    <DashboardLayout title="Support">
      
      <SupportCard/>
    </DashboardLayout>
  )
}

export default Support