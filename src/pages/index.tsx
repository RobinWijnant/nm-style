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
import { Fade } from "react-awesome-reveal";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const articles = ((cmsDocuments.filter(
    (doc) => doc.layout === "blog-articles",
  ) as any)[0].articles as ArticleType[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
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
            <Fade direction="up" triggerOnce>
              <h2>{appointment.title}</h2>
            </Fade>
            <Fade direction="up" triggerOnce>
              <p>{appointment.description}</p>
            </Fade>
            <Fade direction="up" triggerOnce>
              <Button to="/online-afspraak-maken">Online afspraak</Button>
            </Fade>
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
            description
            title
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            articles {
              date
              facebookUrl
              description
              title
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
  }
`;
