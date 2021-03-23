import PageIntro from "../../components/PageIntro";
import { graphql, PageProps } from "gatsby";
import React from "react";
import {
  CallToAction,
  PageIntro as PageIntroType,
  ServiceCategory,
} from "../../cms/types";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import styles from "./index.module.css";
import { getCmsDocuments } from "../../cms";
import Image from "gatsby-image";
import Wrapper from "../../components/Wrapper";
import CtaBanner from "../../components/CtaBanner";
import { Fade } from "react-awesome-reveal";

const Page: React.FC<PageProps> = ({ data }) => {
  const cmsDocuments = getCmsDocuments(data);
  const serviceCategories = (cmsDocuments.filter(
    (doc) => doc.layout === "/prices/services/",
  ) as any)[0].categories as ServiceCategory[];
  const [pageIntro] = cmsDocuments.filter(
    (doc) => doc.layout === "/prices/intro/",
  ) as PageIntroType[];
  const [cta] = cmsDocuments.filter(
    (doc) => doc.layout === "/prices/cta/",
  ) as CallToAction[];

  return (
    <Layout>
      <SEO title="Prijslijst" />

      <Wrapper>
        <PageIntro
          pageName="Prijslijst"
          title={pageIntro.title}
          description={pageIntro.description}
          image={pageIntro.thumbnail?.childImageSharp.fluid}
        />

        <div className={styles.serviceCategories}>
          {serviceCategories.map((category) => (
            <div className={styles.category} key={category.title}>
              <Image
                fluid={category.thumbnail.childImageSharp.fluid}
                className={styles.image}
                alt={`${category.title} thumbnail`}
              />
              <div className={styles.categoryText}>
                <Fade direction="up" triggerOnce>
                  <h3 className={styles.categoryTitle}>{category.title}</h3>
                </Fade>
                <ul className={styles.services}>
                  {(category.services ?? []).map((service) => (
                    <Fade direction="up" triggerOnce key={service.name}>
                      <li className={styles.service}>
                        <span className={styles.serviceName}>
                          {service.name}
                        </span>
                        <span className={styles.servicePrice}>
                          {service.price}
                        </span>
                      </li>
                    </Fade>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>

      <CtaBanner title={cta.title} description={cta.description} />
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          filePath: {
            in: ["/prices/services/", "/prices/intro/", "/prices/cta/"]
          }
          sourceName: { eq: "content" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            categories {
              services {
                name
                price
              }
              thumbnail {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
              title
            }
          }
          fields {
            filePath
          }
        }
      }
    }
  }
`;
