import PageIntro from "../../components/PageIntro";
import { graphql, PageProps } from "gatsby";
import React from "react";
import {
  CallToAction,
  PageIntro as PageIntroType,
  Review,
} from "../../cms/types";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import styles from "./index.module.css";
import { getCmsDocuments } from "../../cms";
import Image from "gatsby-image";
import Wrapper from "../../components/Wrapper";
import CtaBanner from "../../components/CtaBanner";
import TextBlock from "../../components/TextBlock";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const reviews = (cmsDocuments.filter(
    (doc) => doc.layout === "reviews-reviews",
  ) as any)[0].reviews as Review[];
  const [pageIntro] = cmsDocuments.filter(
    (doc) => doc.layout === "reviews-intro",
  ) as PageIntroType[];
  const [cta] = cmsDocuments.filter(
    (doc) => doc.layout === "reviews-cta",
  ) as CallToAction[];

  return (
    <Layout location={location}>
      <SEO title="Reviews" />

      <Wrapper>
        <PageIntro
          pageName="Reviews"
          title={pageIntro.title}
          description={pageIntro.description}
          image={pageIntro.thumbnail?.childImageSharp.fluid}
        />

        <div className={styles.reviews}>
          {reviews.map((review) => (
            <div className={styles.review} key={review.title}>
              <div className={styles.images}>
                {review.images.map((image) => (
                  <Image
                    key={image.childImageSharp.fluid.src}
                    fluid={image.childImageSharp.fluid}
                    className={styles.image}
                  />
                ))}
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{review.title}</h3>
                <TextBlock
                  paragraphs={review.description}
                  className={styles.description}
                />
              </div>
            </div>
          ))}
        </div>
      </Wrapper>

      <CtaBanner title={cta.title} description={cta.description} />
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
            reviews {
              title
              description
              images {
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
