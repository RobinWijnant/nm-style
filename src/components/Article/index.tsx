import React from "react";
import styles from "./index.module.css";
import fbIcon from "../../assets/fb-icon.png";

type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
  date?: Date;
  className?: string;
};

const Article: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  className,
  date,
  children,
}) => (
  <article className={className}>
    <div className={styles.left}>
      {Boolean(date) && <span className={styles.date}>{date}</span>}
      <img
        className={styles.cover}
        src={image}
        alt={`Article image for ${title}`}
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
