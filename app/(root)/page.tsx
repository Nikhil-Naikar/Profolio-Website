"use client";

import Section from "@/components/Section";
import { Box, Container, Heading, Image, useColorModeValue } from "@chakra-ui/react";

const Home = () => {
  return (
    <Container>
      <Box bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} w="100%" p={3} mt={6} mb={6} borderRadius="lg" alignItems='center'>
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
          display="flex"
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          justifyContent="center"
          >
           <Image 
            alt="profile-image" 
            display="inline-block" 
            boxSize='100px' 
            borderRadius='full' 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            objectFit='cover'
            src="/images/nikhil.jpg"/> 
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">About Me</Heading>
        <p>Paragraph</p>
      </Section>
    </Container>
  );
};

export default Home;
