import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleCarousel from "../components/ArticleCarousel";
import styles from "./index.module.css";
import Article from "../components/Article";
import carouselImage1 from "../assets/1.png";
import carouselImage2 from "../assets/2.png";

export interface IndexPageProps {
  location: Location;
}

interface QueryProps extends IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
      };
    };
  };
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const IndexPage = ({ data, location }: QueryProps) => {
  return (
    <Layout location={location}>
      <SEO
        title="Kapsalon in Welden (Oudenaarde)"
        titleTemplate={`NM Style - %s`}
      />
      <ArticleCarousel>
        <Article
          key="slide1"
          className={styles.article}
          image={carouselImage1}
          title="Nieuwe kleuren van O'right"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor vestibulum rhoncus posuere nulla gravida fermentum."
          url="https://example.com"
        />
        <Article
          key="slide2"
          className={styles.article}
          image={carouselImage2}
          title="Nieuwe kleuren van O'right"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor vestibulum rhoncus posuere nulla gravida fermentum."
          url="https://example.com"
        />
      </ArticleCarousel>
    </Layout>
  );
};

export default IndexPage;
