import PageIntro from "../../components/PageIntro";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { PageIntro as PageIntroType, ServiceCategory } from "../../cms/types";
import Layout from "../../components/Layout";
import SEO from "../../components/Seo";
import styles from "./index.module.css";
import { getCmsDocuments } from "../../cms";

const IndexPage: React.FC<PageProps> = ({ data, location }) => {
  const cmsDocuments = getCmsDocuments(data);
  const services = cmsDocuments.filter(
    (doc) => doc.layout === "service-categories",
  ) as ServiceCategory[];
  const [pageIntro] = cmsDocuments.filter(
    (doc) => doc.layout === "prices-intro",
  ) as PageIntroType[];

  return (
    <Layout location={location}>
      <SEO title="Prijslijst" />

      {/* <PageIntro
        pageName="Prijslijst"
        title={pageIntro.title}
        description={pageIntro.description}
      /> */}

      <div className={styles.serviceCategories}></div>
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
          }
        }
      }
    }
  }
`;
