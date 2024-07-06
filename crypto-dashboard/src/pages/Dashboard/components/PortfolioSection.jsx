import { Button, Center, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaArrowDown , FaArrowUp} from "react-icons/fa";
const PortfolioSection = () => {
  return (
   <HStack justifyContent={"space-between"} bg={'white'} borderRadius='xl' p={6} flexDir={{
            base:"column",  
            xl:"row"
   }}  align={{
          base:"flex-start",
          xl:"center"
   }}    >
   <HStack spacing={{
        base:6,
        xl:16,
   }} flexDir={{
            base:"column",
            md:"row",
            lg:"row"
   }}  align={{
    base:"flex-start",
    xl:"center"
}}   >
   <Stack>
      <HStack  color="black.80">
         <Text fontSize={"sm"}>Total portfolio value</Text>
       <Icon as = {AiOutlineInfoCircle}/>
      </HStack>
      <Text  textStyle="h2">$ 112,312.24</Text>
    </Stack>
    <Stack>
      <HStack  color="black.80">
         <Text fontSize={"sm"}>Wallet Balance</Text> 
      </HStack>

     <HStack spacing={6}  flexDir={{
            base:"column", 
            sm:"row"
   }}  align={{
    base:"flex-start",
    sm:"center"
}}  >
        <HStack>
          <Text  textStyle="h2">22.391000</Text>
          <Tag colorScheme='gray'>BTC</Tag>
          </HStack>

          <HStack>
          <Text  textStyle="h2">$ 1,300.00</Text>
          <Tag colorScheme='gray'>INR</Tag>
          </HStack>
     </HStack>
    </Stack>
    
   </HStack>
    <HStack>
      <Button leftIcon={<FaArrowDown/>}>Deposite</Button>
      <Button rightIcon={<FaArrowUp/>}>Withdraw</Button>
    </HStack>
   </HStack>
  )
}

export default PortfolioSection