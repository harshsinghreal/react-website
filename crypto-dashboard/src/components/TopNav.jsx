import { Box, Button, Heading, HStack, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
const TopNav = ({title, onOpen}) => {
  return (
    
        <HStack boxShadow="xl" bg={'white'} h={16} justify={'space-between'} padding={25}>
            <Icon as={IoMdMenu} fontSize={24} onClick={onOpen} display={{
                 base:"block",
                 lg:"none"

             }}/>
    <Heading>{title}</Heading>
     <Menu>
                <MenuButton as={Button}  > 
                    <Icon as={FaRegUserCircle} fontSize={24}/>
                </MenuButton>
                <MenuList>
                    <MenuItem>Logout</MenuItem>
                    <MenuItem>Support</MenuItem>
                </MenuList>
     </Menu> 
    </HStack >
   
  )
}

export default TopNav