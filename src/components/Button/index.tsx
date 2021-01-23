import { Link } from "gatsby";
import React from "react";
import styles from "./index.module.css";

type Props = {
  to: string;
  onClick: () => void;
};

const Button: React.FC<Props> = ({ children, to, onClick }) => (
  <span className={styles.button}>
    {children}
    <Link to={to} className={styles.text} onClick={onClick}>
      {children}
    </Link>
  </span>
);

export default Button;
