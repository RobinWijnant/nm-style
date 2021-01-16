import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleCarousel from "../components/ArticleCarousel";
import styles from "./index.module.css";
import Article from "../components/Article";
import carouselImage1 from "../assets/1.png";
import carouselImage2 from "../assets/2.png";
import hairImage from "../assets/3.png";
import Button from "../components/Button";

type PageProps = {
  location: Location;
};

const IndexPage: React.FC<PageProps> = ({ location }) => {
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
      <div className={styles.promote}>
        <img src={hairImage} alt="hair image" />
        <div className={styles.text}>
          <h2>Maak een afspraak op een datum die voor u past</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio
            faucibus etiam nec, non. Lectus turpis duis vehicula pretium nulla
            auctor. Volutpat vehicula sit integer ipsum.
          </p>
          <Button to="/online-afspraak-maken">Online afspraak</Button>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
