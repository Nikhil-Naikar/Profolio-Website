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
          Budget Tracker 
        </Title>
      </Section>
      <Section delay={0.2}>
        <P>
         A full-stack web app to help you stay on budget.
        </P>
      </Section>
      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Focus</Meta>
            <span>Learning C# and ASP.NET Core</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Nikhil-Naikar/Budget-Tracker">
              Go to repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TypeScript, React, Next.js, Node.js, Tailwind CSS, ShadCN, ASP.NET Core, C#, PostgreSQL</span>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Views 🧐</Heading>
        <P>HomePage:</P>
        <WorkImage src="/images/dump/bt_0.png" alt="budget-tracker-homepage" />
        <P>More coming soon, currently building 🏗️</P>
      </Section>
    </Container>
  );
};

export default Project;
