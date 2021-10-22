import React from 'react'
import SawoLogin from 'sawo-react'
import { ChakraProvider, Flex, Stack, Heading, Box, Text, Container } from '@chakra-ui/react'
import { useHistory } from "react-router-dom";
import './Login.css'


function Login() {

    let history = useHistory();

    function sawoLoginCallback(payload) {
        history.push("/home");
        console.log(payload)

    }

    const sawoConfig = {
        onSuccess: sawoLoginCallback,
        identifierType: 'email',
        apiKey: process.env.REACT_APP_SAWO_API,
        containerHeight: '300px',
    }

    return (
        <ChakraProvider>
            <Box className='login' height='100vh' width='100%'>
                <Container >
                    <Stack
                        textAlign={'center'}
                        align={'center'}
                        spacing={{ base: 8, md: 10 }}
                        py={{ base: 20, md: 28 }}>
                        <Heading
                            fontWeight={600}
                            fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
                            lineHeight={'110%'} color={'#00A19D'}>
                            Welcome to{' '}
                            <Text as={'span'} color='#E05D5D'>
                                Spaces
                            </Text> </Heading>
                        <Box border='1px solid black'>
                            <div className='main-ctn'>
                                <SawoLogin config={sawoConfig} />
                            </div>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </ChakraProvider>
    )
}

export default Login
