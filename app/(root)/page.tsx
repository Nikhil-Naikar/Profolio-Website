"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <Container>
      <Box bg="tomato" w="100%" p={3} mt={6} mt={6} borderRadius="lg" alignItems='center'>
        <h1>Hello, I'm a Software Engineer.</h1>
      </Box>
      
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikhil Naikar
          </Heading>
          <p>Software Engineer (Full-Stack Developer / Cloud Engineer / Data Engineer)</p>
        </Box>
      </Box>


    </Container>
  );
};

export default Home;
