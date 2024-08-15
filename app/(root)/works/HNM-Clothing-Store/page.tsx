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
          HNM Clothing Store <Badge>2023</Badge>
        </Title>
      </Section>
      <Section delay={0.2}>
        <P>
        An e-commerce website where users can browse and purchase clothes, with Python and a focus on applying good relational database design practices for MySQL.
        </P>
      </Section>
      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Focus</Meta>
            <span>Applying good relational database design practices</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Nikhil-Naikar/HNM-Clothing-Store">
              Go to repo <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Python, Flask, SQLite, SQLAlchemy, Bootstrap, JavaScript, HTML, CSS, Monolith Architecture</span>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Views 🧐</Heading>
        <P>What a curious user who is not signed in would see:</P>
        <WorkImage src="/images/projects/HNM.png" alt="homepage" />
        <WorkImage src="/images/dump/categories.png" alt="categories" />
        <P>Sign Up or Log In:</P>
        <WorkImage src="/images/dump/hnm_signup.png" alt="hnm_signup" />
        <WorkImage src="/images/dump/hnm_login.png" alt="hnm_login" />
        <P>Logged in as customer:</P>
        <WorkImage src="/images/dump/shopper_homepage.png" alt="shopper_homepage" />
        <WorkImage src="/images/dump/shopper_cart.png" alt="shopper_cart" />
        <WorkImage src="/images/dump/billing.png" alt="billing" />
        <WorkImage src="/images/dump/ordercomplete.png" alt="ordercomplete" />
        <P>Logged in as owner:</P>
        <WorkImage src="/images/dump/owner_homepage.png" alt="owner_homepage" />
        <WorkImage src="/images/dump/owner_additem.png" alt="owner_additem" />
        <WorkImage src="/images/dump/owner_edititem.png" alt="owner_edititem" />
      </Section>
    </Container>
  );
};

export default Project;
