import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import introVideo from '../../assets/videos/intro.mp4';
import { useState } from 'react';


const CoursePage = ({ lectureTitle = "Siddharth Web Dev Intro", lectureDescription = "this is a sample discription for the UI of the lecture" }) => {

    const [lectureNumber, setLectureNumber] = useState(0);

    const lectures = [
        {
            _id: 1,
            title: "Web Development Intro Video",
            description: "This is the sample discription for the lecture video and this seems good",
            video: {
                url: introVideo,
            },
        },
        {
            _id: 2,
            title: "Installation Of VS Code",
            description: "This is the sample discription 2 for the lecture video and this seems good",
            video: {
                url: introVideo,
            },
        },
        {
            _id: 2,
            title: "What is Web Development",
            description: "This is the sample discription 2 for the lecture video and this seems good",
            video: {
                url: introVideo,
            },
        }
    ]

    return (
        <Grid minH={'90vh'} templateColumns={["1fr", "3fr 1fr"]}>
            <Box>
                <video
                    width={"100%"}
                    src={lectures[lectureNumber].video.url}
                    autoPlay={true}
                    controls
                    controlsList='nodownload noremoteplayback'
                    disablePictureInPicture
                    disableRemotePlayback
                >
                </video>
                <Heading m={"4"} children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`} />
                <Heading m={"4"} children="Desciption" />
                <Text m={'4'} children={`${lectures[lectureNumber].description}`} />
            </Box>
            <VStack>
                {lectures.map((item, index) => (
                    <button
                        onClick={() => { setLectureNumber(index) }}
                        key={item._id}
                        style={{
                            width: "100%",
                            padding: "1rem",
                            textAlign: "center",
                            margin: "0",
                            borderBottom: "1px solid rgba(0,0,0,0.3)"
                        }}
                    >
                        <Text>
                            #{index + 1} {item.title}
                        </Text>
                    </button>
                ))}
            </VStack>
        </Grid>
    )
}

export default CoursePage