import React, { useEffect } from "react";
import Button from "../../Button";
import { graphql, Link, useStaticQuery } from "gatsby";
import styles from "./index.module.css";
import clsx from "clsx";
import Image, { FixedObject } from "gatsby-image";

type QueryProps = {
  site: {
    siteMetadata: {
      navItems: {
        title: string;
        href: string;
      }[];
    };
  };
  file: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
};

const navItemsQuery = graphql`
  query {
    site {
      siteMetadata {
        navItems {
          title
          href
        }
      }
    }
    file(
      relativePath: { eq: "logo.png" }
      sourceInstanceName: { eq: "assets" }
    ) {
      childImageSharp {
        fixed(width: 150, height: 100) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }
      }
    }
  }
`;

const Header: React.FC = () => {
  const data = useStaticQuery<QueryProps>(navItemsQuery);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = data.site.siteMetadata.navItems;
  const logoFixedObject = data.file.childImageSharp.fixed;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "initial";
  }, [isMenuOpen]);

  const headerClassNames = clsx(styles.header, {
    [styles.isMobileMenuOpen]: isMenuOpen,
  });

  return (
    <header className={headerClassNames}>
      <Image
        className={styles.logo}
        fixed={logoFixedObject}
        alt="NM-Style logo"
      />

      <div className={styles.contact}>
        <span className={styles.phone}>0470 00 00 00</span>
        <Button to="/online-afspraak-maken">Online afspraak</Button>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            className={styles.navItem}
            activeClassName={styles.active}
            key={item.title}
            to={item.href}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      <div
        role="button"
        className={styles.mobileMenuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      />
    </header>
  );
};

export default Header;
