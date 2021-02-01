import Button from "../../components/Button";
import { graphql, useStaticQuery } from "gatsby";
import Image, { FixedObject } from "gatsby-image";
import React from "react";
import Modal from "react-modal";
import styles from "./index.module.css";

type Props = {
  isOpen: boolean;
  onRequestClose: () => void;
};

type QueryProps = {
  allFile: {
    edges: {
      node: {
        childImageSharp?: {
          fixed: FixedObject & { originalName: string };
        };
      };
    }[];
  };
};

const logosQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "assets" } }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 200) {
              originalName
              ...GatsbyImageSharpFixed_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`;

const RebrandingModal: React.FC<Props> = ({ isOpen, onRequestClose }) => {
  const data = useStaticQuery<QueryProps>(logosQuery);
  const bennaLogo = data.allFile.edges.find(
    ({ node }) => node.childImageSharp?.fixed.originalName === "benna-logo.jpg",
  )?.node.childImageSharp?.fixed as FixedObject;
  const nmStyleLogo = data.allFile.edges.find(
    ({ node }) => node.childImageSharp?.fixed.originalName === "logo.png",
  )?.node.childImageSharp?.fixed as FixedObject;

  return (
    <Modal
      isOpen={isOpen}
      contentLabel="Benna wordt nm style"
      className={styles.modal}
    >
      <div className={styles.content}>
        <Image
          className={styles.bennaLogo}
          fixed={bennaLogo}
          alt="benna logo"
        />
        <span className={styles.disappears}>verdwijnt</span>
        <span className={styles.becomes}>en verandert in</span>
        <Image
          className={styles.nmStyleLogo}
          fixed={nmStyleLogo}
          alt="nm style logo"
        />
        <Button
          to="/"
          onClick={() => onRequestClose()}
          className={styles.button}
        >
          Naar nm-style.be
        </Button>
        <span className={styles.note}>
          Deze doorverwijzing van benna.be naar nm-style.be zal niet meer werken
          vanaf 22-10-2021
        </span>
      </div>
    </Modal>
  );
};

export default RebrandingModal;
