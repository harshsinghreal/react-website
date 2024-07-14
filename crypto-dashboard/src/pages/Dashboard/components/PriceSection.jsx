import { Button, Card, Flex, HStack, Icon, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import React from "react";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";

const PriceSection = () => {
  const timeStamps = ["7:55 PM","8:55 PM","9:55 PM","10:55 PM","11:55 PM"]

  return (
    <Card p={6}>
      <Flex justifyContent={"space-between"} align={"start"}>
        <Stack>
          <HStack>
          <HStack color="black.80">
            <Text fontSize={"sm"}>Wallet Balance</Text>
          </HStack>

          <HStack
            spacing={6}
            flexDir={{
              base: "column",
              sm: "row",
            }}
            align={{
              base: "flex-start",
              sm: "center",
            }}
          >
            <HStack>
              <Text textStyle="h2">22.391000</Text>
              <HStack color={"green.500"}>
                <Icon fontSize={"small"} as={BsArrowUpRight} />
                <Text fontSize={"sm"}>22%</Text>
              </HStack>
            </HStack>

           
          </HStack>
          
          <HStack >
            <Button leftIcon={<FaPlusCircle />}>Buy</Button>
              <Button rightIcon={<FaMinusCircle />}>Sell</Button>
              </HStack>

          </HStack>

          
        </Stack>
 
      </Flex>
          <Tabs variant='soft-rounded'>
      <Flex justify="end" mt={3} >
      <TabList bg={"black.5"} p="3px" gap={1}>
        
        <Tab fontSize={"small"} p="3px" borderRadius={1}>1H</Tab>
        <Tab fontSize={"small"} p="3px" borderRadius={1}>1W</Tab>
        <Tab fontSize={"small"} p="3px" borderRadius={1}>1M</Tab>
        <Tab fontSize={"small"} p="3px" borderRadius={1}>1Y</Tab>
      </TabList>
      </Flex>
      <TabPanels>
        <TabPanel>
          <Stack>
        <Image  src="graph.svg" mt={12}></Image>
      
      <HStack justifyContent={"space-between"}>
        { 
         timeStamps.map((ts)=>(
            <Text key={ts} fontSize={"sm"} color={"black.80"}>{ts}</Text>
        ))}
      
      </HStack>
      </Stack>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    

 
    </Card>
  );
};

export default PriceSection;
