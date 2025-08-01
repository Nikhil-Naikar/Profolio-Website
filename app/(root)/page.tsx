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
      <Section delay={0.1}>
        <Box display="flex" justifyContent="center" bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")} w="100%" p={3} mt={6} mb={6} borderRadius="lg" alignItems='center'>
        Hello 👋🏾, welcome to my website! Happy exploring - feel free to reach out.
        </Box>     
        <Box display={{md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Nikhil Naikar, MEng, EIT
            </Heading>
            <Flex>
              <p>AWS Certified | Skilled in Full-Stack Development and Machine Learning</p>
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
      </Section>
      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">About Me</Heading>
        <Paragraph>
          Detail-oriented and driven engineering professional with strong communication, 
          problem-solving, and teamwork skills. 

          Skilled with Cloud Platforms (AWS, Digital 
          Ocean), Full Stack Development (OOP, SOLID), and Machine Learning (Python, 
          Databricks). 

          Experienced in web development, project management, client relations,
          and detailed engineering across Oil & Gas (Vista Projects), Energy Infrastructure
          (Siemens Energy), and SaaS web applications (Benevity, Somnivet).
        </Paragraph>
        <br/>
        <Paragraph>
          Currently seeking an opportunity to apply my skills,
          collaborate with experienced professionals to solve business challenges,
          and grow within a dynamic team. 🚀
        </Paragraph>
        <Flex align="center" justify="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">My Portfolio</Button>
          </NextLink>
        </Flex>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">Bio</Heading>
        <BioSection>
          <BioYear>1999</BioYear>
          Born in Kuwait
        </BioSection>
        <BioSection>
          <BioYear>2011</BioYear>
          Moved to Calgary, AB, Canada
        </BioSection>
        <BioSection>
          <BioYear>2017</BioYear>
          Enrolled into Schulich School of Engineering, University of Calgary
        </BioSection>
        <BioSection>
          <BioYear>2021</BioYear>
          Project Manager Intern, Siemens Energy
        </BioSection>
        <BioSection>
          <BioYear>2022</BioYear>
          Graduated from Bachelor of Science in Electrical Engineering, specialization in Power Engineering
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Full-Stack Developer Intern, Benevity
        </BioSection>
        <BioSection>
          <BioYear>2023</BioYear>
          Graduated from Master of Engineering, specialization in Software Engineering
        </BioSection>
        <BioSection>
          <BioYear>2024</BioYear>
          Full-Stack Developer, Somnivet
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Electrical EIT, Vista Projects
        </BioSection>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">I ♡</Heading>
        <Paragraph>Reading 📚, Video Games 🎮, Music 🎧, Travel ✈️, Sushi 🍣</Paragraph>
      </Section>
      <Section delay={0.5}>
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
            <Link href="/nikhil's_software_resume.pdf">
              <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={LiaScrollSolid} />} >my-latest-resume</Button>
            </Link>
          </ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default Home;
