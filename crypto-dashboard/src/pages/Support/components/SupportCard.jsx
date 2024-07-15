import { Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { IoMdMail } from 'react-icons/io'

const SupportCard = () => {
  return (
    <Flex>
        <Stack>
            <Icon as={IoMdMail}/>
            <Text as='h2' textStyle='h2'>Contact Us</Text>
            <Text textStyle='h6'>Have a question or just want to know more contact us at - technostory07@gmail.com</Text>
        </Stack>
    </Flex>
  )
}

export default SupportCard