import { Box, Center, Spinner } from "@chakra-ui/react";

function loader() {

    return (
        <Box>
            <Center as="section" bg="gray.100" h="100vh">
                <Spinner 
                thickness='10px'
                speed='1s'
                emptyColor='red'
                color='white'
                size='xl' />
            </Center>
        </Box>
    )

}

export default loader;