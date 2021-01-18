import React from "react";
import Image from "gatsby-image";
import styles from "./index.module.css";
import { FluidObject } from "gatsby-image";

type Props = {
  pageName: string;
  title: string;
  description?: string;
  image?: FluidObject;
};

const PageIntro: React.FC<Props> = ({
  pageName,
  title,
  description,
  image,
}) => (
  <div className={styles.intro}>
    <div className={styles.text}>
      <h1 className={styles.pageName}>{pageName}</h1>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
    </div>
    {image && <Image fluid={image} className={styles.image} />}
  </div>
);

export default PageIntro;
