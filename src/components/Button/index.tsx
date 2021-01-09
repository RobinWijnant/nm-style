import { Link } from "gatsby";
import React from "react";
import styles from "./index.module.css";

type Props = {
  to: string;
};

const Layout: React.FC<Props> = ({ children, to }) => (
  <span className={styles.button}>
    {children}
    <Link to={to} className={styles.text}>
      {children}
    </Link>
  </span>
);

export default Layout;
