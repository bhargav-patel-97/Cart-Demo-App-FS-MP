import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text, Heading, Box, Image, Stack, Center, HStack, Tag, Divider, Button } from '@chakra-ui/react';

function cart() {
    return(
        <Box>
          <Center as="section" bg="gray.100" h="100vh">
      <Box maxW="420px" bg="white" p="6">
        <Image
          src="https://images.pexels.com/photos/14232429/pexels-photo-14232429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Svartifoss Waterfall"
          borderRadius="xl"
          objectFit="cover"
          mx="auto"
        />
        <HStack mt="5" spacing="3">
          {["Travel", "India"].map((item) => (
            <Tag key={item} variant="subtle" colorScheme="red">
              {item}
            </Tag>
          ))}
        </HStack>
        <Heading my="4" size="lg">
          Explore Mumbai
        </Heading>
        <Text>
        Visit the iconic business hub through exclusive Mumbai tour packages. Explore attractions like Gateway of India, Marine Drive, and more on your Mumbai trip.
        </Text>
        <Center my="6">
          <Button colorScheme="red">Learn more</Button>
        </Center>
      </Box>
    </Center>
        </Box>
    )
}

export default cart;