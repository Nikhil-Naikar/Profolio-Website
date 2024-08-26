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
        <WorkImage src="/images/projects/the-podcast-platform.png" alt="podcase-platform-homepage" />
        <P>If the curious user tries to access any other page they will be prompted to log in or sign up, secure authentication is done by Clerk service. This is the Log In page:</P>
        <WorkImage src="/images/dump/login.png" alt="login-page" />
        <P>This is the Sign Up page:</P>
        <WorkImage src="/images/dump/signup.png" alt="signup-page" />
        <P>Stay tuned, more coming soon 🧑🏾‍💻</P>
      </Section>
    </Container>
  );
};

export default Project;
