import { React } from "react";
import {
  Card,
  Text,
  Heading,
  Box,
  Image,
  Center,
  HStack,
  Tag,
  Button
} from "@chakra-ui/react";
import { MdCall } from "react-icons/md"
import { useFsFlag, HitType, useFlagship, EventCategory } from "@flagship.io/react-sdk";
import mixpanel from 'mixpanel-browser';

import { flagForBtnValue } from '../config/Config';
import Loader from './Loader';

function Cart(props) {
    
    let fsCall = useFsFlag(flagForBtnValue,"More Info");
    let btnValue = fsCall.getValue();

    console.log("Flag value returned from Flagship.io: " + btnValue);

    const { hit: fsHit } = useFlagship();

    const handleClick = (btnValue) => {
        fsHit.send({
            type: HitType.EVENT, //or "EVENT"
            category: EventCategory.USER_ENGAGEMENT, // or EventCategory.ACTION_TRACKING
            action: "Tour Inquiry",
            label: "Tour Inquiry Button Click",
            value: 1,
          });
          
        mixpanel.track('Tour Inquiry Click', {
            "Button Text": btnValue,
            "City": props.city,
            "Name": props.userId
        });
          
    }

    if(btnValue != null) {
        return (
          <Box>
            <Center as="section" bg="gray.100" h="100vh">
              <Card maxW="420px" bg="white" p="6">
                <Image
                  src="https://images.pexels.com/photos/14232429/pexels-photo-14232429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Mumbai, India"
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
                  Explore {props.city}
                </Heading>
                <Text>
                  Visit the iconic business hub through exclusive Mumbai tour
                  packages. Explore attractions like Gateway of India, Marine Drive,
                  and more on your Mumbai trip.
                </Text>
                <Center my="6">
                  <Button colorScheme="red" rightIcon={<MdCall />} onClick={handleClick(btnValue)}>{btnValue}</Button>
                </Center>
              </Card>
            </Center>
          </Box>
        );
    } else {
        return(
            <Loader />
        )
    }
}

export default Cart;