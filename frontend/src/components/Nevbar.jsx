import { Button, Container, Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link} from 'react-router-dom'
import { FiPlus } from "react-icons/fi";

const Nevbar = () => {

  return (
    <nav>
    <Container px={'-10'}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"} flexDir={{
            base:"column",
            sm:"row"
        }}>
            <Text>
                <Link to={"/"}>Product store</Link>
            </Text>

            <HStack spacing={2} alignContent={'conter'}>
                <Link to={"/about"}>
                    <Button>
                        <FiPlus/>
                    </Button>
                </Link>

            </HStack>
        </Flex>
    </Container>
    </nav>
  )
}

export default Nevbar