import { Card, HStack, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const InfoCard = ({imgUrl, texts, titles , bgcol}) => {

  return (
    <Card   bg={bgcol} bgImage={imgUrl} bgSize={'cover'} bgRepeat={'no-repeat'} h={'full'} >
        <Stack m={2}>
        <Tag borderRadius={'full'} w={'fit-content'}>{titles}</Tag>
        <Text textStyle={'h5'} mt={2} fontWeight={'medium'}>
            {texts}
        </Text>
        </Stack>
    </Card>
  )
}

export default InfoCard