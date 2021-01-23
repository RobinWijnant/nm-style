import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import styles from "./index.module.css";

type Props = {
  to: string;
  onClick: () => void;
  className?: string;
};

const Button: React.FC<Props> = ({ children, to, onClick, className }) => (
  <span className={clsx(styles.button, className)}>
    {children}
    <Link to={to} className={styles.text} onClick={onClick}>
      {children}
    </Link>
  </span>
);

export default Button;
