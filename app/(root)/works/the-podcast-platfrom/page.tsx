"use client"

import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "@/components/Work";
import P from "../../../../components/Paragraph";

const Project = () => {
  return (
    <Container>
      <Title>
        The Podcast Platform <Badge>2024</Badge>
      </Title>
      <P>
      An app for hosting podcasts with AI-powered features, including text-to-multiple-voices functionality and AI-generated images, with OpenAI integration.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>GitHub</Meta>
          <Link href="https://github.com/Nikhil-Naikar/The-Podcast-Platform">
            Go to repo <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>TypeScript, React, Next.js, Node.js, Tailwind CSS </span>
        </ListItem>
      </List>
      <WorkImage src="/images/projects/the-podcast-platform.png" alt="podcase-platform-homepage" />
      <WorkImage src="/images/projects/the-podcast-platform.png" alt="podcase-platform-homepage" />
      <WorkImage src="/images/projects/the-podcast-platform.png" alt="podcase-platform-homepage" />
    </Container>
  );
};

export default Project;
