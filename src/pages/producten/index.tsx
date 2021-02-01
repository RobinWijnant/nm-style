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
import Wrapper from "../../components/Wrapper";
import clsx from "clsx";
import { Fade } from "react-awesome-reveal";

const Page: React.FC<PageProps> = ({ data }) => {
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
    <Layout>
      <SEO title="Producten" />

      <BackgroundImage
        fluid={banner.thumbnail.childImageSharp.fluid}
        className={styles.banner}
        alt="Banner van producten"
      >
        <div className={styles.whitenImage}>
          <div className={styles.text}>
            <h1 className={styles.title}>{banner.title}</h1>
            <p className={styles.description}>{banner.description}</p>
          </div>
        </div>
      </BackgroundImage>

      <Wrapper>
        <div className={styles.section}>
          <Fade direction="up" triggerOnce>
            <h3 className={styles.title}>{section1.title}</h3>
          </Fade>
          <Fade direction="up" triggerOnce>
            <TextBlock
              paragraphs={section1.description}
              className={styles.description}
            />
          </Fade>
        </div>

        <div className={clsx(styles.section, styles.sectionWithImage)}>
          <Image
            fluid={section2.thumbnail.childImageSharp.fluid}
            className={styles.image}
            alt="Producten overzicht"
          />
          <div className={styles.text}>
            <h3 className={styles.title}>{section2.title}</h3>
            <TextBlock
              paragraphs={section2.description}
              className={styles.description}
            />
          </div>
        </div>

        <div className={clsx(styles.section, styles.sectionWithImage)}>
          <Image
            fluid={section3.thumbnail.childImageSharp.fluid}
            className={styles.image}
            alt="Producten overzicht"
          />
          <div className={styles.text}>
            <h3 className={styles.title}>{section3.title}</h3>
            <TextBlock
              paragraphs={section3.description}
              className={styles.description}
            />
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default Page;

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
