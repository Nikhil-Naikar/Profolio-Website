"use client"

import { GridItem } from "@/components/GridItem";
import Section from "@/components/Section";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

const Works = () => {
  return (
    <Container>
     
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section>
          <GridItem id="the-podcast-platfrom-project" thumbnail="/images/projects/the-podcast-platform.png" title="The Podcast Platfrom">
            Currently building - An app for hosting podcasts with AI-powered features, including text-to-multiple-voices functionality and AI-generated images, with OpenAI integration.
          </GridItem>
        </Section>
        <Section>
          <GridItem id="Clock-In-Clock-Out-App" thumbnail="/images/projects/CICO.png" title="Clock In Clock Out App">
            Practiced API development by creating an application for restaurant businesses, allowing employees to easily clock in/out of their shifts and check their shift/pay history.
          </GridItem>
        </Section>
        <Section delay={0.1}>
          <GridItem id="HNM-Clothing-Store" thumbnail="/images/projects/HNM.png" title="HNM Clothing Store">
            An e-commerce website where users can browse and purchase clothes, with Python and a focus on applying good relational database design practices for MySQL.
          </GridItem>
        </Section>
        <Section delay={0.1}>
          <GridItem id="Airbnb-Price-Intelligence" thumbnail="/images/projects/Airbnb.png" title="Airbnb Price Intelligence">
            An AI model to assist Airbnb hosts in setting competitive prices and to help customers evaluate pricing fairness.
          </GridItem>
        </Section>
        <Section delay={0.2}>
          <GridItem id="IMDB-Sentiment-Analysis" thumbnail="/images/projects/NN.png" title="IMDB Sentiment Analysis">
            A deep-learning model using Neutral Networks algorithm to predict the correct sentiment for IMBD movie reviews with a dataset of 50000 rows.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
