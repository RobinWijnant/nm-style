import { graphql, PageProps } from "gatsby";
import Image from "gatsby-image";
import React from "react";
import { getCmsDocuments } from "../../cms";
import { AboutInfo, TimeLineItem } from "../../cms/types";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import TextBlock from "../../components/TextBlock";
import Wrapper from "../../components/Wrapper";
import styles from "./index.module.css";
import { Fade } from "react-awesome-reveal";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const [about] = (cmsDocuments.filter(
    (doc) => doc.layout === "about-about",
  ) as any) as AboutInfo[];
  const timelineItems = (cmsDocuments.filter(
    (doc) => doc.layout === "about-timeline",
  ) as any)[0].timeline as TimeLineItem[];

  const currentYear = new Date().getFullYear();

  return (
    <Layout location={location}>
      <SEO title="Over" />

      <Wrapper>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <div className={styles.header}>
              <Image
                className={styles.image}
                fluid={about.thumbnail.childImageSharp.fluid}
              />
              <h1 className={styles.title}>
                {about.title.split(" ").map((word, index) => (
                  <span className={styles.word} key={index}>
                    {word}
                  </span>
                ))}
              </h1>
            </div>
            <Fade direction="up" triggerOnce>
              <TextBlock
                paragraphs={about.description}
                className={styles.description}
              />
            </Fade>
          </div>

          <div className={styles.timeline}>
            <Fade direction="up" triggerOnce>
              <span className={styles.time}>{currentYear}</span>
            </Fade>
            {timelineItems.map((item) => (
              <div className={styles.item} key={item.time}>
                <Fade direction="up" triggerOnce>
                  <dl className={styles.text}>
                    <dt className={styles.title}>{item.title}</dt>
                    <dd className={styles.description}>{item.description}</dd>
                  </dl>
                </Fade>
                <Fade direction="up" triggerOnce>
                  <span className={styles.time}>{item.time}</span>
                </Fade>
              </div>
            ))}
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
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            title
            description
            timeline {
              time
              title
              description
            }
          }
        }
      }
    }
  }
`;
