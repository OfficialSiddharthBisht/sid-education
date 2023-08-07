import React from 'react'
import { Box, HStack, Heading, Stack, VStack } from '@chakra-ui/react'
import { TiSocialYoutubeCircular, TiSocialInstagramCircular } from 'react-icons/ti'
import { DiGithub } from 'react-icons/di'


const Footer = () => {
    return (
        <Box
            padding={4}
            bg={"blackAlpha.800"}
            minH={'15vh'}
        >
            <Stack
                direction={['column', 'row']}
            >
                <VStack
                    alignItems={['center', 'flex-start']}
                    width={'full'}
                >
                    <Heading children="All Rights Reserved" color={'white'} />
                    <Heading children="Siddharth Bisht" color={'yellow.500'} size={'sm'} fontFamily={'body'} />
                </VStack>
                <HStack
                    spacing={[2, 10]}
                    justifyContent={'center'}
                    color={'white'}
                    fontSize={'50'}
                >
                    <a href="https://www.youtube.com/@siddharthbisht" target='_blank'>
                        <TiSocialYoutubeCircular />
                    </a>
                    <a href="https://www.instagram.com/siddharthbisht_/" target='_blank'>
                        <TiSocialInstagramCircular />
                    </a>
                    <a href='https://github.com/OfficialSiddharthBisht' target='_blank'>
                        <DiGithub />
                    </a>
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer