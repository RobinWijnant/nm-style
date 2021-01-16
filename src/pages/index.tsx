import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import ArticleCarousel from "../components/ArticleCarousel";
import styles from "./index.module.css";
import Article from "../components/Article";
import Button from "../components/Button";
import { graphql, PageProps } from "gatsby";
import { FluidObject } from "gatsby-image";

interface Props extends PageProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            date: string;
            title: string;
            description: string;
            facebookUrl: string;
            thumbnail: {
              childImageSharp: {
                fluid: FluidObject;
              };
            };
          };
        };
      }[];
    };
  };
}

const IndexPage: React.FC<Props> = ({ data, location }) => {
  const articles = data.allMarkdownRemark.edges.map(
    ({ node }) => node.frontmatter,
  );

  return (
    <Layout location={location}>
      <SEO
        title="Kapsalon in Welden (Oudenaarde)"
        titleTemplate={`NM Style - %s`}
      />
      <ArticleCarousel>
        {articles.map((article) => (
          <Article
            key={`${article.date}-${article.title}`}
            className={styles.article}
            image={article.thumbnail.childImageSharp.fluid}
            title={article.title}
            description={article.description}
            url={article.facebookUrl}
          />
        ))}
      </ArticleCarousel>
      <div className={styles.promote}>
        <img src={""} alt="hair image" />
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

export const pageQuery = graphql`
  query PageQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
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
