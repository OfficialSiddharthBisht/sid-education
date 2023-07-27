import React from 'react'
import '../styles/home.css'
import { Heading, Stack, VStack, Text, Button, Image, Box, HStack } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

// importing assets
import vg from '../assets/images/bg.png';
import introVideo from '../assets/videos/intro.mp4';

// React Icons Import 
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiCoursera, SiUdemy } from 'react-icons/si';
import { DiAws } from 'react-icons/di';

const Home = () => {
    return (
        <section className='home'>
            <div className="container">
                <Stack
                    // mobile view column , else row
                    direction={['column', 'row']}
                    height='100%'
                    justifyContent={['center', 'space-between']}
                    alignItems='center'
                    // 1 = 4px in chakra ui
                    spacing={['16', '56']}
                >
                    <VStack width={'full'} alignItems={['center', 'flex-end']}>
                        <Heading children='Learn From The MERN Developer' size={'2xl'} />
                        <Text children='Find the most interactive tutorial at pocket friendly price' />
                        <Link to="/courses">
                            <Button
                                size={'lg'}
                                colorScheme='yellow'
                            >
                                Explore Now
                            </Button>
                        </Link>
                    </VStack>
                    <Image
                        src={vg}
                        className='vector-graphics'
                        boxSize={'md'}
                        objectFit={'contain'}
                    />
                </Stack>
            </div>
            <Box
                padding={"8"}
                bg='blackAlpha.700'
            >
                <Heading
                    children="Places You Can Get Us"
                    textAlign={'center'}
                    fontFamily={'body'}
                    color={'yellow.300'}
                />
                <HStack
                    className='brandsBanner'
                    justifyContent='space-evenly'
                    marginTop='8'
                >
                    <CgGoogle />
                    <CgYoutube />
                    <SiCoursera />
                    <SiUdemy />
                </HStack>
            </Box>
            <div className="container2">
                <video
                    src={introVideo}
                    autoPlay={true}
                    controls
                    controlsList='nodownload nofullscreeen noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                >

                </video>
            </div>
        </section>
    )
}

export default Home
