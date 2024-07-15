import { Button, Card, Flex, HStack, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react'
import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { AiOutlineCloudDownload } from 'react-icons/ai'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TransactionTable from './components/TransactionTable'
import { Input } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
const Transaction = () => {
  const tabs = [
    {
      name:"All",
      count:349,
    },
    {
      name:"Deposit",
      count:114,
    },
    {
      name:"Withdraw",
      count:55,
    },
    {
      name:"Trade",
      count:50,
    },
  ]
  return (

    <DashboardLayout title="Transactions" >
      <Flex justify={'end'} m={2}>
        <Button leftIcon={<AiOutlineCloudDownload/>}>Export Csv</Button>
      </Flex>
    <Card borderRadius={'1rem'}>
            <Tabs>
          <TabList py={4} display={'flex'} justifyContent={'space-between'} px={1}>
           <HStack>
           {
              tabs.map((tab)=>(
                <Tab key={tab.name} display={'flex'} gap={2}>
                  {tab.name} 
                  <Tag colorScheme='gray' borderRadius={'full'}>{tab.count}</Tag>
                </Tab>
              ))
            }
           </HStack>
            
                      <InputGroup maxW={'300px'} >
              <InputLeftElement pointerEvents='none'>
                <BiSearch color='gray.300' />
              </InputLeftElement>
              <Input type='tel' placeholder='Search....' />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
                <TransactionTable/>
            </TabPanel>
            <TabPanel>
                <TransactionTable/>
            </TabPanel>
            <TabPanel>
                <TransactionTable/>
            </TabPanel>
          </TabPanels>
        </Tabs>
    </Card>
    </DashboardLayout>
  )
}

export default Transaction