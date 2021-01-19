import PageIntro from "../../components/PageIntro";
import { graphql, PageProps } from "gatsby";
import React from "react";
import {
  Article as ArticleType,
  PageIntro as PageIntroType,
} from "../../cms/types";
import Article from "../../components/Article";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import styles from "./index.module.css";
import { getCmsDocuments } from "../../cms";
import Wrapper from "../../components/Wrapper";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const articles = cmsDocuments.filter(
    (doc) => doc.layout === "article",
  ) as ArticleType[];
  const [pageIntro] = cmsDocuments.filter(
    (doc) => doc.layout === "blog-intro",
  ) as PageIntroType[];

  return (
    <Layout location={location}>
      <SEO title="Nieuws" />

      <Wrapper>
        <PageIntro
          pageName="Nieuws"
          title={pageIntro.title}
          description={pageIntro.description}
          image={pageIntro.thumbnail?.childImageSharp.fluid}
        />

        <div className={styles.articles}>
          {articles.map((article) => (
            <Article
              key={`${article.date}-${article.title}`}
              className={styles.article}
              image={article.thumbnail.childImageSharp.fluid}
              title={article.title}
              description={article.description}
              date={new Date(article.date)}
              url={article.facebookUrl}
            />
          ))}
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
