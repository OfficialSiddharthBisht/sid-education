import {
    Button,
    Container,
    HStack,
    Heading,
    Input,
    Stack,
    Text,
    VStack,
    Image,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./course.css";


const CourseCard = ({
    views,
    title,
    imageSrc,
    addToPlaylistHandler,
    creator,
    description,
    lectureCount,
}) => {
    return (
        <VStack className="course" alignItems={['center', 'flex-start']}>
            <Image src={imageSrc} boxSize={'60'} objectFit={'contain'} />
            <Heading
                textAlign={['center', 'left']}
                maxWidth={'200px'}
                fontFamily={'sans-serif'}
                noOfLines={3}
                size={'sm'}
                children={title}
            />
            <Text noOfLines={2} children={description} />
            <HStack>
                <Text
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    children={'Creator'}
                />
                <Text
                    fontFamily={'body'}
                    textTransform={'uppercase'}
                    children={creator}
                />
            </HStack>
            <Heading
                textAlign={'center'}
                size={'xs'}
                children={`Lectures -${lectureCount}`}
                textTransform={'uppercase'}
            />
            <Heading
                size={'xs'}
                children={`Views -${views}`}
                textTransform={'uppercase'}
            />
            <Stack direction={['column', 'row']} alignItems={'center'}>
                <Link to={`/courses/${id}`}>
                    <Button colorScheme={'yellow'}>Watch Now</Button>
                </Link>
                <Link to={`/courses/${id}`}>
                    <Button colorScheme={'yellow'} variant={'ghost'}
                        onClick={() => {
                            addToPlaylistHandler(id);
                        }}
                    >
                        Add To Playlist
                    </Button>
                </Link>
            </Stack>
        </VStack>
    );
};
var id;
const Courses = () => {
    const [keyword, setKeyword] = useState('');
    const categories = [
        'FrontEnd Dev',
        'BackEnd Dev',
        'React Native',
        'DSA JS',
        'Vanilla JS',
        'Vanilla JS Projects',
        'React Projects',
        'FullStack Projects',
    ];
    const addToPlaylistHandler = (id) => {
        console.log("Added To Playlist");
    }
    return (
        <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
            <Heading children="All Courses" m={'8'} />
            <Input
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
                placeholder="Search Courses"
                type="text"
                focusBorderColor="yellow.400"
            />
            <HStack
                overflowX={'auto'}
                paddingY={'8'}
                flex={1}
                flexWrap={'wrap'}
                css={{
                    '&::webkit-scrollbar': {
                        display: 'none',
                    },
                }}
            >
                {categories.map((c, index) => (
                    <Button key={index}>
                        <Text children={c} />
                    </Button>
                ))}
            </HStack>
            <Stack
                direction={['column', 'row']}
                flexWrap={'wrap'}
                justifyContent={['flex-start', 'space-evenly']}
                alignItems={['center', 'flex-start']}
            >
                <CourseCard
                    views={100}
                    title={'Web Dev'}
                    imageSrc={'https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg'}
                    addToPlaylistHandler={addToPlaylistHandler}
                    creator={'Siddharth Bisht'}
                    description={'Full Stack Web Development With Siddharth Bisht'}
                    lectureCount={50}
                    id={Math.random()}
                />
            </Stack>
        </Container>
    );
};

export default Courses;
