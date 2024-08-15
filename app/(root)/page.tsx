"use client";

import NextLink from "next/link";
import Paragraph from "@/components/Paragraph";
import Section from "@/components/Section";
import { Box, Button, Container, Flex, Heading, Image, useColorModeValue, SimpleGrid, ListItem, List, Link, IconButton, Icon } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "@/components/Bio";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5"
import { LiaScrollSolid } from "react-icons/lia";

const Home = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} w="100%" p={3} mt={6} mb={6} borderRadius="lg" alignItems='center'>
        Hello, I'm a Software Engineer.
      </Box>     
      <Box display={{md: 'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikhil Naikar, MEng
          </Heading>
          <Flex>
            <p>Full-Stack Developer | Cloud Engineer | Data Engineer</p>
          </Flex>
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
          <BioYear>2017</BioYear>
           Enrolled at the University of Calgary
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Worked for Siemens Energy as Project Manager Intern
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Completed Bachelor of Science Degree, major in Electrical Engineering
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Worked for Benevity as Software Engineer Intern
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Completed Master of Engineering Degree, specalized in Software Engineering
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Seeking entry level/ junior software engineering roles 
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">I ♡</Heading>
        <Paragraph>Reading 📚, Video Games 🎮, Music 🎧, Travel ✈️, Sushi 🍣, Coding 🧑🏾‍💻</Paragraph>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Some Links</Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/Nikhil-Naikar">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>} >@Nikhil-Naikar</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/nikhil-naikar-a22313181/">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>} >@nikhil-naikar</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/nikhil's_software_ resume.pdf">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={LiaScrollSolid} />} >my-latest-resume</Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Home;
