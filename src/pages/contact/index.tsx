import { graphql, PageProps } from "gatsby";
import React from "react";
import { getCmsDocuments } from "../../cms";
import { ContactInfo, PageIntro as PageIntroType } from "../../cms/types";
import Layout from "../../components/Layout";
import PageIntro from "../../components/PageIntro";
import SEO from "../../components/Seo";
import Wrapper from "../../components/Wrapper";
import styles from "./index.module.css";
import Image from "gatsby-image";
import * as facebook from "../../utils/facebook";

const Page: React.FC<PageProps> = ({ data }) => {
  const cmsDocuments = getCmsDocuments(data);
  const [pageIntro] = cmsDocuments.filter(
    (doc) => doc.layout === "/contact/intro/",
  ) as PageIntroType[];
  const [contactInfo] = cmsDocuments.filter(
    (doc) => doc.layout === "/contact/contact/",
  ) as ContactInfo[];

  return (
    <Layout>
      <SEO title="Contact" />

      <Wrapper>
        <PageIntro
          pageName="Contact"
          title={pageIntro.title}
          description={pageIntro.description}
          image={pageIntro.thumbnail?.childImageSharp.fluid}
        />

        <div className={styles.contact}>
          <iframe
            className={styles.map}
            frameBorder="0"
            src="https://www.google.com/maps/embed/v1/place?q=NM%20Style%20Welden&key=AIzaSyA-RmQvUcaHqPyKDwrprfGiHxlTJsAfOV4"
            allowFullScreen
            title="messenger chat met ons knop"
          />
          <div className={styles.text}>
            <dl className={styles.item}>
              <dt className={styles.title}>Adres</dt>
              <dd className={styles.value}>{contactInfo.address_1}</dd>
              <dd className={styles.value}>{contactInfo.address_2}</dd>
            </dl>
            <dl className={styles.item}>
              <dt className={styles.title}>Telefoonnummer</dt>
              <dd className={styles.value}>{contactInfo.phone}</dd>
            </dl>
            <dl className={styles.item}>
              <dt className={styles.title}>E-mail</dt>
              <dd className={styles.value}>
                {/* Protection against crawling bots */}
                <span>{contactInfo.email.slice(0, 4)}</span>
                <span>
                  {contactInfo.email.slice(4, contactInfo.email.length)}
                </span>
              </dd>
            </dl>
            <dl className={styles.item}>
              <dt className={styles.title}>Chat</dt>
              <dd className={styles.value}>
                <div
                  className="fb-messengermessageus"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                  // @ts-ignore
                  messenger_app_id={facebook.appId}
                  page_id={facebook.pageId}
                  color="white"
                  size="standard"
                />
              </dd>
            </dl>
          </div>
        </div>
      </Wrapper>

      <Image
        fluid={contactInfo.thumbnail.childImageSharp.fluid}
        className={styles.banner}
        alt="foto van het kapsalon buiten"
      />
    </Layout>
  );
};

export default Page;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          filePath: { in: ["/contact/intro/", "/contact/contact/"] }
          sourceName: { eq: "content" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            address_1
            address_2
            email
            phone
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 1200) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
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
