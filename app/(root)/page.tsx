"use client";

import NextLink from "next/link";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { Box, Button, Container, Flex, Heading, Image, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/Bio";

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
        <Paragraph>I enjoy tackling complex problems and collaborating with others to build innovative solutions. 
          My passion lies in AI, cloud computing, and software architecture. I am committed to continuous learning 
          and to ongoing professional development by staying updated with the latest tech trends and advancing my coding skills. 📈</Paragraph>
        <Flex align="center" justify="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Profolio</Button>
          </NextLink>
        </Flex>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">Bio</Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Kuwait
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked for Siemens Energy as Project Manager Intern
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed my Bachelor of Science Degree, majored in Electrical Engineering
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Worked for Benevity as Software Engineer Intern
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed my Master of Engineering Degree, specalized in Software Engineering
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Seeking entry level/ junior software engineering roles 
        </BioSection>
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">I ♡</Heading>
        <Paragraph>Reading, Video Games, Music, Bloudering, Sushi, Coding, Travel</Paragraph>
      </Section>

    </Container>
  );
};

export default Home;
