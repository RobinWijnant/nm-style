import React from "react";
import Wrapper from "../../components/Wrapper";
import SEO from "../../components/Seo";
import { Link, PageProps } from "gatsby";
import styles from "./index.module.css";

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <Wrapper>
      <SEO title="Online afspraak maken" />

      <div className={styles.content}>
        <Link className={styles.backLink} to="/">
          Terug naar NM Style
        </Link>

        <iframe
          className={styles.iframe}
          src="https://hair-en-beauty-benna.salonized.com/bookings/new/?layout=embed"
        />
      </div>
    </Wrapper>
  );
};

export default NotFoundPage;
