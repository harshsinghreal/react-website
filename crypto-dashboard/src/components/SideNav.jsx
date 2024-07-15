import { Box, color, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { LuArrowDownUp } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import { Link } from 'react-router-dom';
const SideNav = () => {
    const navLinks = [
        {
        icon:RxDashboard,
        text:"Dashboard",
        link:"/",
      },

      {
        icon:LuArrowDownUp,
        text:"Transactions",
        link:"/transaction",
      }


]
  return <Stack bg="white" boxShadow={{base:"none", lg:"lg"}} 
   h="100vh" 
   justify="space-between" >
    <Box>
    <Heading textAlign="center" fontSize="20px" as="h1" pt="56px">@CryptoRaj</Heading>
   <Box mt="6" mx="3">
   {
    navLinks.map((nav)=>(
      <Link to={nav.link} key={nav.text}>
        <HStack  key={nav.text} px="4" py="12px"  borderRadius="10px" cursor="pointer" _hover={{
            bg:"#F3F3F7",
            color:"#171717"
        }} color="#797E82">
            <Icon as={nav.icon}  />
            <Text fontSize="14px" fontWeight="bold">{nav.text} </Text>
        </HStack>
        </Link>
    ))
  }
   </Box>
    </Box>
  <Box mt="6" mx="3" mb="6">
    <Link to={'/support'}>
   <HStack   px="4" py="12px"  borderRadius="10px" cursor="pointer" _hover={{
            bg:"#F3F3F7",
            color:"#171717"
        }} color="#797E82">
            <Icon as={BiSupport}  />
            <Text fontSize="14px" fontWeight="bold">Support </Text>
        </HStack>
        </Link>
     </Box>
   </Stack>
  
};

export default SideNav