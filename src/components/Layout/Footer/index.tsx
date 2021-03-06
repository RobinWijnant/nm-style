import { getCmsDocuments } from "../../../cms";
import { ContactInfo, OpenHours } from "../../../cms/types";
import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";
import styles from "./index.module.css";
import { OutboundLink } from "gatsby-plugin-google-gtag";

const query = graphql`
  query {
    allMarkdownRemark(
      filter: {
        fields: {
          sourceName: { eq: "content" }
          filePath: { in: ["/contact/contact/", "/contact/openHours/"] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            address_1
            address_2
            email
            friday
            monday
            phone
            saturday
            sunday
            thursday
            tuesday
            wednesday
          }
          fields {
            filePath
          }
        }
      }
    }
  }
`;

const Footer: React.FC = () => {
  const data = useStaticQuery(query);
  const cmsDocuments = getCmsDocuments(data);
  const [contactInfo] = cmsDocuments.filter(
    (doc) => doc.layout === "/contact/contact/",
  ) as ContactInfo[];
  const [openHours] = cmsDocuments.filter(
    (doc) => doc.layout === "/contact/openHours/",
  ) as OpenHours[];

  return (
    <footer className={styles.footer}>
      <div className={styles.connect}>
        <h3 className={styles.title}>Connecteer met NM Style</h3>
        <iframe
          title="facebook like knop"
          className={styles.likeButton}
          src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2FNm.Style.Welden%2F&width=300&layout=standard&action=like&size=small&share=false&height=35&appId"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
        <p className={styles.contact}>
          {contactInfo.address_1}
          <br />
          {contactInfo.address_2}
        </p>
        <span className={styles.contact}>{contactInfo.phone}</span>
        <span className={styles.contact}>
          {/* Protection against crawling bots */}
          <span>{contactInfo.email.slice(0, 4)}</span>
          <span>{contactInfo.email.slice(4, contactInfo.email.length)}</span>
        </span>
      </div>

      <p className={styles.credits}>
        Website door{" "}
        <OutboundLink href="https://robinwijnant.me">
          Robin Wijnant
        </OutboundLink>
        <br />
        &copy; 2021 NM-Style. <Link to="/admin">Beheer</Link>
        <img
          src="https://api.netlify.com/api/v1/badges/00cc2e3a-1a2b-4240-996d-4f4fe0bbf0a5/deploy-status"
          alt="developer build status"
          className={styles.buildStatus}
        />
      </p>

      <div className={styles.right}>
        <h4 className={styles.title}>Openingsuren</h4>
        <ul className={styles.openingHours}>
          <li>Maandag: {openHours.monday}</li>
          <li>Dinsdag: {openHours.tuesday}</li>
          <li>Woensdag: {openHours.wednesday}</li>
          <li>Donderdag: {openHours.thursday}</li>
          <li>Vrijdag: {openHours.friday}</li>
          <li>Zaterdag: {openHours.saturday}</li>
          <li>Zondag: {openHours.sunday}</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
