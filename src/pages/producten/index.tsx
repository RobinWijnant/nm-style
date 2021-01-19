import { graphql, PageProps } from "gatsby";
import React from "react";
import {
  Banner,
  ProductPageSection,
  ProductPageSectionWithImage,
} from "../../cms/types";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import styles from "./index.module.css";
import { getCmsDocuments } from "../../cms";
import Image from "gatsby-image";
import BackgroundImage from "gatsby-background-image";
import TextBlock from "../../components/TextBlock";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const [banner] = (cmsDocuments.filter(
    (doc) => doc.layout === "products-banner",
  ) as any) as Banner[];
  const [section1] = cmsDocuments.filter(
    (doc) => doc.layout === "products-block1",
  ) as ProductPageSection[];
  const [section2] = cmsDocuments.filter(
    (doc) => doc.layout === "products-block2",
  ) as ProductPageSectionWithImage[];
  const [section3] = cmsDocuments.filter(
    (doc) => doc.layout === "products-block3",
  ) as ProductPageSectionWithImage[];

  return (
    <Layout location={location}>
      <SEO title="Prijslijst" />

      <BackgroundImage
        fluid={banner.thumbnail.childImageSharp.fluid}
        className={styles.banner}
      >
        <div className={styles.whitenImage}>
          <div className={styles.text}>
            <h1 className={styles.title}>{banner.title}</h1>
            <p className={styles.description}>{banner.description}</p>
          </div>
        </div>
      </BackgroundImage>

      <div className={styles.section}>
        <h3 className={styles.title}>{section1.title}</h3>
        <TextBlock paragraphs={section1.description} />
      </div>

      <div className={styles.textBlockWithImage}>
        <Image
          fluid={section2.thumbnail.childImageSharp.fluid}
          className={styles.image}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{section2.title}</h3>
          <TextBlock paragraphs={section2.description} />
        </div>
      </div>

      <div className={styles.textBlockWithImage}>
        <Image
          fluid={section3.thumbnail.childImageSharp.fluid}
          className={styles.image}
        />
        <div className={styles.text}>
          <h3 className={styles.title}>{section3.title}</h3>
          <TextBlock paragraphs={section3.description} />
        </div>
      </div>
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
            title
            description
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
