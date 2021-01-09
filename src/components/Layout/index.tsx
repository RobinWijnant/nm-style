import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../reset.css";
import "../../index.css";
import styles from "./index.module.css";

type Props = {
  location: Location;
};

const Layout: React.FC<Props> = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
