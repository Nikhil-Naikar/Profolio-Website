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
        IMDB Sentiment Analysis <Badge>2024</Badge>
        </Title>
      </Section>
      <Section delay={0.2}>
        <P>
          A deep-learning model using Neutral Networks algorithm to predict the correct sentiment for IMBD movie reviews with a dataset of 50000 rows.
        </P>
      </Section>
      <Section delay={0.3}>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Focus</Meta>
            <span>Netural Networks algorithm and building its architecture</span>
          </ListItem>
          <ListItem>
            <Meta>GitHub</Meta>
            <Link href="https://github.com/Nikhil-Naikar/IMDB-Sentiment-Analysis">
              More details <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TensorFlow, Scikit-learn, Python, Pandas, Matplotlib, Seaborn, BeautifulSoup</span>
          </ListItem>
        </List>
      </Section>
      <Section delay={0.4}>
        <Heading as="h3" variant="section-title">Steps taken 🪜</Heading>
        <P>Model's final result = training score of 88% and testing score of 87%:</P>
        <WorkImage src="/images/projects/NN.png" alt="homepage" />
        <Heading as="h3" variant="section-subtitle">Step 1: Collecting Data</Heading>
        <WorkImage src="/images/dump/nn_1.png" alt="nn_1" />
        <WorkImage src="/images/dump/nn_2.png" alt="nn_2" />
        <WorkImage src="/images/dump/nn_3.png" alt="nn_3" />
        <Heading as="h3" variant="section-subtitle">Step 2: Preprocessing the reviews</Heading>
        <WorkImage src="/images/dump/nn_4.png" alt="nn_4" />
        <Heading as="h3" variant="section-subtitle">Step 3: Apply Feature Extraction Techniques</Heading>
        <WorkImage src="/images/dump/nn_5.png" alt="nn_5" />
        <Heading as="h3" variant="section-subtitle">Step 4: Neutral Networks Time!</Heading>
        <WorkImage src="/images/dump/nn_6.png" alt="nn_6" />
        <WorkImage src="/images/dump/nn_7.png" alt="nn_7" />
        <WorkImage src="/images/dump/nn_8.png" alt="nn_8" />
        <WorkImage src="/images/dump/nn_9.png" alt="nn_9" />

      </Section>
    </Container>
  );
};

export default Project;
