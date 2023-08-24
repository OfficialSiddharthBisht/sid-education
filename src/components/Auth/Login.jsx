import { Box, Button, Container, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <Container h={'95vh'}>
            <VStack h={'full'} justifyContent={'center'} spacing={'16'}>
                <Heading children="Login Here" textTransform={'uppercase'} />
                <form style={{ width: "100%" }}>
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
                    <Box>
                        <Link to="/forgetPassword">
                            <Button fontSize={'sm'} variant='link'>
                                Forgot Password
                            </Button>
                        </Link>
                    </Box>
                    <Button marginY={'4'} colorScheme={'yellow'} type='submit'>
                        Login
                    </Button>
                    <Box marginY='4'>
                        New User? {' '}
                        <Link to='/register'>
                            <Button colorScheme={'yellow'} variant={'link'}>
                                Sign Up
                            </Button>
                        </Link> {" "}
                        here
                    </Box>
                </form>
            </VStack>
        </Container>
    )
}

export default Login