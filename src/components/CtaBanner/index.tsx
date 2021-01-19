import Button from "../Button";
import React from "react";
import styles from "./index.module.css";
import Wrapper from "../Wrapper";
import clsx from "clsx";

type Props = {
  title: string;
  description: string;
  className?: string;
};

const CtaBanner: React.FC<Props> = ({ title, description, className }) => (
  <div className={clsx(styles.banner, className)}>
    <Wrapper>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      <Button to="/online-afspraak-maken">Online afspraak</Button>
    </Wrapper>
  </div>
);

export default CtaBanner;
