import Button from "../../components/Button";
import { graphql, useStaticQuery } from "gatsby";
import Image, { FixedObject } from "gatsby-image";
import React from "react";
import Modal from "react-modal";
import styles from "./index.module.css";
import { Fade } from "react-awesome-reveal";

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
      contentLabel="Benna wordt nm-style"
      className={styles.modal}
    >
      <div className={styles.content}>
        <div className={styles.brands}>
          <div className={styles.brand}>
            <Fade direction="left" triggerOnce>
              <Image fixed={bennaLogo} alt="benna logo" />
            </Fade>
            <Fade triggerOnce delay={500}>
              <span className={styles.url}>benna.be</span>
            </Fade>
          </div>
          <Fade direction="up" triggerOnce delay={1500}>
            <span className={styles.becomes}>verandert in</span>
          </Fade>
          <div className={styles.brand}>
            <Fade direction="right" triggerOnce delay={2500}>
              <Image fixed={nmStyleLogo} alt="nm-style logo" />
            </Fade>
            <Fade triggerOnce delay={3000}>
              <span className={styles.url}>nm-style.be</span>
            </Fade>
          </div>
        </div>
        <Fade triggerOnce delay={4000}>
          <Button to="/" onClick={() => onRequestClose()}>
            Naar nm-style.be
          </Button>
        </Fade>
      </div>
    </Modal>
  );
};

export default RebrandingModal;
