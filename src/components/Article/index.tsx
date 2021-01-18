import React from "react";
import Image from "gatsby-image";
import styles from "./index.module.css";
import fbIcon from "../../assets/icons/fb-icon.png";
import { FluidObject } from "gatsby-image";

type Props = {
  title: string;
  description: string;
  image: FluidObject;
  url: string;
  date?: Date;
  imageHeight?: number;
  className?: string;
};

const Article: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  className,
  date,
  imageHeight = 300,
  children,
}) => (
  <article className={className}>
    <div className={styles.left}>
      {Boolean(date) && <span className={styles.date}>{date}</span>}
      <Image
        fluid={image}
        className={styles.cover}
        style={{ height: `${imageHeight}px` }}
      />
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <a href={url} className={styles.fbLink}>
        <span className={styles.text}>Lezen op</span>
        <img src={fbIcon} alt="Facebook icon" />
      </a>
    </div>
    <div className={styles.right}>{children}</div>
  </article>
);

export default Article;
