"use client";

import NextLink from 'next/link';
import VoxelDog from "../components/voxel-dog";
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button,
  Flex
} from '@chakra-ui/react'

const NotFound = () => {
  return (
    <Container>
      <VoxelDog />
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      <Flex my={6} alignContent="center">
        <Button as={NextLink} href="/" colorScheme="teal">
          Return to home
        </Button>
      </Flex>
    </Container>
  )
}

export default NotFound