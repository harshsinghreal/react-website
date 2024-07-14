import { Box, Button, Card, Center, Divider, Flex, Grid, HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import React, { Fragment } from 'react'

const Transactions = () => {
    const transactions = [{
        id:"1",
        icon:BsCurrencyRupee,
        text:"INR Deposite",
        amount:"+ $81,123.10",
        timestamp:"2022-06-09 7:06 PM",
    },{
        id:"2",
        icon:FaBtc,
        text:"BTC Sell",
        amount:"- 12.48756 BTC",
        timestamp:"2022-05-22 12:06 AM",
    },{
        id:"3",
        icon:BsCurrencyRupee,
        text:"INR Deposite",
        amount:"+ $81,123.10",
        timestamp:"2022-06-09 7:06 PM",
    },]
  return (
    <Card p={4} h={'full'}>
        <Text mb={5} fontSize={'sm'} color={'black.80'}>Recent Transactions</Text>
        <Stack>
            {transactions.map((t,i)=>(
                   <Fragment key={t.id}>
                     {i!==0  && <Divider/>}
                         <Flex key={t.id} gap={2} >   {/*  grren for deposite red for sell */ }
                       
                          <Grid placeItems='center' boxSize={10} bg={'black.5'} borderRadius="full">
                            <Icon as={t.icon}/>
                          </Grid>
                    <Flex justify='space-between' w={'full'}   px={1}>
                        <Stack spacing={0}>
                            <Text textStyle={'h6'} >
                                {t.text}
                            </Text>
                            <Text fontSize={"sm"} color={'black.40'}>
                                {t.timestamp}
                            </Text>
                        </Stack>
                        <Text textStyle={'h6'}>{t.amount}</Text>
                    </Flex>
                    </Flex>
                   </Fragment>
            ))}
        </Stack>
        
        <Button colorScheme='gray'>View All</Button>
        
    </Card>
  )
}

export default Transactions