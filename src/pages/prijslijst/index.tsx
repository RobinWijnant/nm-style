import PageIntro from "../../components/PageIntro";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { PageIntro as PageIntroType, ServiceCategory } from "../../cms/types";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import styles from "./index.module.css";
import { getCmsDocuments } from "../../cms";
import Image from "gatsby-image";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const serviceCategories = (cmsDocuments.filter(
    (doc) => doc.layout === "prices-categories",
  ) as any)[0].categories as ServiceCategory[];
  const [pageIntro] = cmsDocuments.filter(
    (doc) => doc.layout === "prices-intro",
  ) as PageIntroType[];

  return (
    <Layout location={location}>
      <SEO title="Prijslijst" />

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
            />
            <div className={styles.categoryText}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <ul className={styles.services}>
                {category.services.map((service) => (
                  <li className={styles.service} key={service.name}>
                    <span className={styles.serviceName}>{service.name}</span>
                    <span className={styles.servicePrice}>{service.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
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
        }
      }
    }
  }
`;
