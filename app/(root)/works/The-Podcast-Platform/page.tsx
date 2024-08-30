"use client"

import { Container, Badge, Link, List, ListItem, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/Work";
import P from "../../../../components/Paragraph";
import Section from "@/components/Section";

const Project = () => {
  return (
    <Container>
      <Section delay={0.1}>
        <Title>
          The Podcast Platform (In Progress) <Badge>2024</Badge>
        </Title>
      </Section>
      <Section delay={0.2}>
        <P>
        An app for hosting podcasts with AI-powered features, including text-to-multiple-voices functionality and AI-generated images, with OpenAI integration.
        </P>
      </Section>
      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Focus</Meta>
            <span>Integration with OpenAI’s generative AI models (TTS & DALL·E 3)</span>
          </ListItem>
          <ListItem>
            <Meta>Demo </Meta>
            <Link href="https://www.youtube.com/watch?v=XS7b3M92oP0">
              Go to video <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Nikhil-Naikar/The-Podcast-Platform">
              Go to repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TypeScript, React, Next.js, Node.js, OpenAI, Tailwind CSS, ShadCN, Clerk, Convex</span>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Views 🧐</Heading>
        <P>What a curious user who is not signed in would see:</P>
        <WorkImage src="/images/dump/pp_0.png" alt="podcase-platform-homepage" />
        <P>If the curious user tries to access any other page they will be prompted to sign in or sign up. This is the Sign In page:</P>
        <WorkImage src="/images/dump/login.png" alt="login-page" />
        <P>Sign Up page:</P>
        <WorkImage src="/images/dump/signup.png" alt="signup-page" />
        <P>Homepage:</P>
        <WorkImage src="/images/dump/pp_1.png" alt="homepage-dt" />
        <P>Podcast details:</P>
        <WorkImage src="/images/dump/pp_2.png" alt="podcastpage-dt" />
        <P>Create podcast:</P>
        <WorkImage src="/images/dump/pp_3.png" alt="createpodcastpage-dt" />
        <P>Profile page:</P>
        <WorkImage src="/images/dump/pp_4.png" alt="profilepage-dt" />
        <P>Search functionality:</P>
        <WorkImage src="/images/dump/pp_5.png" alt="searchpage-dt" />
        <WorkImage src="/images/dump/pp_6.png" alt="searchempty-dt" />
      </Section>
    </Container>
  );
};

export default Project;
