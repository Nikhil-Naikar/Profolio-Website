"use client";

import { Box, Container, Heading } from "@chakra-ui/react";
import Image from "next/image";

const Home = () => {
  return (
    <Container>
      <Box bg="tomato" w="100%" p={3} mt={6} mb={6} borderRadius="lg" alignItems='center'>
        Hello, I'm a Software Engineer.
      </Box>
      
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikhil Naikar
          </Heading>
          <p>Software Engineer (Full-Stack Developer / Cloud Engineer / Data Engineer)</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          alignContent="center"
          >
            
          </Box>
      </Box>
    </Container>
  );
};

export default Home;
