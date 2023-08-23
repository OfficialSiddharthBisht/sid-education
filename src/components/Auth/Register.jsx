import { Avatar, Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const fileUploadCSS = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "black",
    backgroundColor: "white"
}
const fileUploadStyle = {
    "&::file-selector-button": fileUploadCSS,
}

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    // for temporary show in the frontend
    const [imagePrev, setImagePrev] = useState("");
    // for sending the data into the backend 
    const [image, setImage] = useState("");

    const changeImageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }
    }
    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children="Sign Up Here" textTransform={'uppercase'} />

                <form style={{ width: "100%" }}>
                    <Box my={'4'} display={'flex'} justifyContent={'center'}>
                        <Avatar src={imagePrev} size={'2xl'} />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='name' children="Name" />
                        <Input
                            required
                            id='name'
                            value={name}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='sid@email.com'
                            type='text'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='email' children="Email" />
                        <Input
                            required
                            id='email'
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder='sid@email.com'
                            type='email'
                            focusBorderColor='yellow.500'

                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='password' children="Password" />
                        <Input
                            required
                            id='password'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder='********'
                            type='password'
                            focusBorderColor='yellow.500'
                        />
                    </Box>
                    <Box marginY={'4'}>
                        <FormLabel htmlFor='chooseAvatar' children="Choose Avatar" />
                        <Input
                            accept='image/*'
                            required
                            id='chooseAvatar'
                            type={'file'}
                            focusBorderColor='yellow.500'
                            css={fileUploadStyle}
                            onChange={changeImageHandler}
                        />
                    </Box>

                    <Button marginY={'4'} colorScheme={'yellow'} type='submit'>
                        Sign Up
                    </Button>
                    <Box marginY='4'>
                        Already a member {' '}
                        <Link to='/login'>
                            <Button colorScheme={'yellow'} variant={'link'}>
                                Login
                            </Button>
                        </Link> {" "}
                        here
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Register