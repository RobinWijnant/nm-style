import clsx from "clsx";
import React from "react";
import styles from "./index.module.css";

type Props = {
  className?: string;
};

const Wrapper: React.FC<Props> = ({ className, children }) => (
  <div className={clsx(styles.wrapper, className)}>{children}</div>
);

export default Wrapper;
