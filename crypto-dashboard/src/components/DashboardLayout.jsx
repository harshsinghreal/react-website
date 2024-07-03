import { Box, color, Container, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({title,children,fat}) => {
  const {isOpen,onClose,onOpen} = useDisclosure();
    return (
    <div>
    <Flex>
        <Box display={{
            base:"none",
            lg:"block"
            }}>
                <SideNav />

        </Box>
    
    <SideDrawer isOpen={isOpen} onClose={onClose} />
    <Box flexGrow="1">
    <TopNav onOpen={onOpen} title={title}/>
    <Container mt={5} maxW={1200} bg="red">{children}</Container>
    </Box>
    </Flex>
      
  </div>
  )
}

export default DashboardLayout