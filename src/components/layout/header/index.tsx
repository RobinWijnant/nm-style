import React from "react";
import Button from "../../Button";
import { graphql, Link, useStaticQuery } from "gatsby";
import logo from "../../../assets/logo.jpg";
import styles from "./index.module.css";

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

const Header = () => {
  const data = useStaticQuery<QueryProps>(navItemsQuery);
  const navItems = data.site.siteMetadata.navItems;

  return (
    <header className={styles.header}>
      <img className={styles.logo} src={logo} alt="NM-Style logo" />

      <nav className={styles.right}>
        <div className={styles.contact}>
          <span className={styles.phone}>0470 00 00 00</span>
          <Button to="/online-afspraak-maken">Online afspraak</Button>
        </div>
        <ul className={styles.nav}>
          {navItems.map((item) => (
            <Link
              className={styles.navItem}
              activeClassName={styles.active}
              key={item.title}
              to={item.href}
            >
              <li>{item.title}</li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
