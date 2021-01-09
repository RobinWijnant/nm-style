import React, { useEffect } from "react";
import Button from "../../Button";
import { graphql, Link, useStaticQuery } from "gatsby";
import logo from "../../../assets/logo.jpg";
import styles from "./index.module.css";
import clsx from "clsx";

type QueryProps = {
  site: {
    siteMetadata: {
      navItems: {
        title: string;
        href: string;
      }[];
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
  }
`;

const Header: React.FC = () => {
  const data = useStaticQuery<QueryProps>(navItemsQuery);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = data.site.siteMetadata.navItems;

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "initial";
  }, [isMenuOpen]);

  const headerClassNames = clsx(styles.header, {
    [styles.isMobileMenuOpen]: isMenuOpen,
  });

  return (
    <header className={headerClassNames}>
      <img className={styles.logo} src={logo} alt="NM-Style logo" />

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
