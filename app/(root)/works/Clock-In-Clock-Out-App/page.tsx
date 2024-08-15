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
          Clock In Clock Out Web App <Badge>2024</Badge>
        </Title>
      </Section>
      <Section delay={0.2}>
        <P>
        A web app for restaurant businesses, allowing employees to easily clock in/out of their shifts and check their shift/pay history.
        </P>
      </Section>
      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Focus</Meta>
            <span>RESTful APIs developement and Layered Architecture design</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Nikhil-Naikar/Clock-In-Clock-Out">
              Go to repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Java, Spring Boot, Vue.js, MySQL, Docker, Pinia, JavaScript, HTML, CSS, Layered Architecture</span>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Views 🧐</Heading>
        <P>What an employee would see:</P>
        <WorkImage src="/images/projects/CICO.png" alt="homepage" />
        <WorkImage src="/images/dump/employee_homepg.png" alt="employee_homepg" />
        <WorkImage src="/images/dump/employee_clockedinpg.png" alt="employee_clockedinpg" />
        <WorkImage src="/images/dump/shifthistory.png" alt="shifthistory" />
        <WorkImage src="/images/dump/clockedin.png" alt="clockedin" />
        <WorkImage src="/images/dump/clockedout.png" alt="clockedout" />
        <P>RESTful APIs 🔎</P>
        <WorkImage src="/images/dump/apis.png" alt="apis" />
      </Section>
    </Container>
  );
};

export default Project;
