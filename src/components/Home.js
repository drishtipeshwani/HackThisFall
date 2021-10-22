import { ChakraProvider, Box } from '@chakra-ui/react'
import React from 'react'

function Home() {
    return (
        <ChakraProvider>
            <Box className='home' height='100vh' width='100%' bgColor='#E8F6EF'></Box>
        </ChakraProvider>
    )
}

export default Home
