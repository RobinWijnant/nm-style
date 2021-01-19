import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleCarousel from "../components/ArticleCarousel";
import styles from "./index.module.css";
import Article from "../components/Article";
import Button from "../components/Button";
import { graphql, PageProps } from "gatsby";
import { Article as ArticleType, AppointmentInfo } from "../cms/types";
import Image from "gatsby-image";
import { getCmsDocuments } from "../cms";
import Wrapper from "../components/Wrapper";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const articles = cmsDocuments.filter(
    (doc) => doc.layout === "article",
  ) as ArticleType[];
  const [appointment] = cmsDocuments.filter(
    (doc) => doc.layout === "home-appointment",
  ) as AppointmentInfo[];

  return (
    <Layout location={location}>
      <SEO
        title="Kapsalon in Welden (Oudenaarde)"
        titleTemplate={`NM Style - %s`}
      />
      <Wrapper>
        <ArticleCarousel>
          {articles.map((article) => (
            <Article
              key={`${article.date}-${article.title}`}
              imageClassName={styles.articleImage}
              className={styles.article}
              image={article.thumbnail.childImageSharp.fluid}
              title={article.title}
              description={article.description}
              url={article.facebookUrl}
            />
          ))}
        </ArticleCarousel>
        <div className={styles.promote}>
          <Image
            className={styles.promoteImage}
            fluid={appointment.thumbnail.childImageSharp.fluid}
            alt="Afspraak maken teaser"
          />
          <div className={styles.text}>
            <h2>{appointment.title}</h2>
            <p>{appointment.description}</p>
            <Button to="/online-afspraak-maken">Online afspraak</Button>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            layout
            date
            description
            title
            facebookUrl
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;
