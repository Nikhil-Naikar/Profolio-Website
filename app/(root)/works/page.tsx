"use client"

import { GridItem } from "@/components/GridItem";
import Section from "@/components/Section";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

const Works = () => {
  return (
    <Container>
        <Section delay={0.1}>
          <Heading as="h3" fontSize={20} mb={4} variant="section-title">
            Works
          </Heading>
        </Section>
      <SimpleGrid columns={[1,1,2]} gap={6}>
        <Section delay={0.2}>
          <GridItem id="Budget-Tracker" thumbnail="/images/dump/bt_0.png" title="Budget Tracker">
            Budget Tracker helps you stay on top of your finances by tracking spending and setting limits to avoid going broke—so you don’t end up eating instant noodles for a week (like I almost did).
          </GridItem>
        </Section>
        <Section delay={0.2}>
          <GridItem id="The-Podcast-Platform" thumbnail="/images/dump/pp_0.png" title="The Podcast Platfrom">
          A web app for podcast lovers and aspiring hosts! With AI-powered features, you can listen to all your favorite podcasts and easily host your own.
          </GridItem>
        </Section>
        <Section delay={0.2}>
          <GridItem id="HNM-Clothing-Store" thumbnail="/images/projects/HNM.png" title="HNM Clothing Store">
            An e-commerce website enabling users to browse and purchase clothing, while also allowing admin users to manage the inventory by adding, editing, or deleting items.
          </GridItem>
        </Section>
        <Section delay={0.3}>
          <GridItem id="Clock-In-Clock-Out-App" thumbnail="/images/projects/CICO.png" title="Clock In Clock Out App">
            A web app for restaurant businesses, allowing employees to easily clock in/out of their shifts and check their shift/pay history.
          </GridItem>
        </Section>
        <Section delay={0.3}>
          <GridItem id="IMDB-Sentiment-Analysis" thumbnail="/images/projects/NN.png" title="IMDB Sentiment Analysis">
            A deep-learning model using Neutral Networks algorithm to predict the correct sentiment for IMBD movie reviews with a dataset of 50000 rows.
          </GridItem>
        </Section>
        <Section delay={0.4}>
          <GridItem id="Airbnb-Price-Intelligence" thumbnail="/images/projects/Airbnb.png" title="Airbnb Price Intelligence">
            An AI model to assist Airbnb hosts in setting competitive prices and to help customers evaluate pricing fairness.
          </GridItem>
        </Section>
      </SimpleGrid>
    </Container>
  );
};

export default Works;
