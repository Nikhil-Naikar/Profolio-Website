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
        Airbnb Price Intelligence <Badge>2023</Badge>
        </Title>
      </Section>
      <Section delay={0.2}>
        <P>
        An AI model to assist Airbnb hosts in setting competitive prices and to help customers evaluate pricing fairness.
        </P>
      </Section>
      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Focus</Meta>
            <span>Utilizing distributed computing to perfrom big data analysis </span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Nikhil-Naikar/Airbnb-Pricing-Intelligence">
              More details <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Databricks, PySpark, ChatGPT, Python, Pandas</span>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Steps taken 🪜</Heading>
        <WorkImage src="/images/dump/a_1.png" alt="a_1" />
        <Heading as="h3" variant="section-subtitle">Step 1: Collecting Data</Heading>
        <WorkImage src="/images/dump/a_2.png" alt="a_2" />
        <Heading as="h3" variant="section-subtitle">Step 2: Preprocessing the reviews</Heading>
        <WorkImage src="/images/dump/a_3.png" alt="a_3" />
        <Heading as="h3" variant="section-subtitle">Step 3: Reviews Sentiment Labeling</Heading>
        <WorkImage src="/images/dump/a_4.png" alt="a_4" />
        <Heading as="h3" variant="section-subtitle">Step 4: Creating Natural Language Processing Model</Heading>
        <WorkImage src="/images/dump/a_5.png" alt="a_5" />
        <Heading as="h3" variant="section-subtitle">Step 5: Used Natural Language Processing Model to label all the unlabelled reviews</Heading>
        <WorkImage src="/images/dump/a_6.png" alt="a_6" />
        <Heading as="h3" variant="section-subtitle">Step 6: Creating Price Prediction Model</Heading>
        <WorkImage src="/images/dump/a_7.png" alt="a_7" />
        <Heading as="h3" variant="section-subtitle">Step 7: Fine Tuning of HyperParameters to optimize model performance</Heading>
        <WorkImage src="/images/dump/a_8.png" alt="a_8" />
      </Section>
    </Container>
  );
};

export default Project;
