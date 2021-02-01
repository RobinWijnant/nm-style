import React from "react";
import Image from "gatsby-image";
import styles from "./index.module.css";
import fbIcon from "../../assets/icons/fb-icon.png";
import { FluidObject } from "gatsby-image";
import { formatDate } from "../../utils/date";
import clsx from "clsx";
import { OutboundLink } from "gatsby-plugin-google-gtag";

type Props = {
  title: string;
  description: string;
  image: FluidObject;
  url: string;
  date?: Date;
  className?: string;
  imageClassName?: string;
};

const Article: React.FC<Props> = ({
  title,
  description,
  image,
  url,
  date,
  className,
  imageClassName,
  children,
}) => (
  <article className={className}>
    <div className={styles.left}>
      <Image
        fluid={image}
        className={clsx(styles.cover, imageClassName)}
        alt={title}
      />
      {Boolean(date) && (
        <span className={styles.date}>{formatDate(date as Date)}</span>
      )}
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <OutboundLink
        href={url}
        className={styles.fbLink}
        target="_blank"
        rel="noreferrer"
      >
        <span className={styles.text}>Lezen op</span>
        <img src={fbIcon} alt="Facebook icon" />
      </OutboundLink>
    </div>
    <div className={styles.right}>{children}</div>
  </article>
);

export default Article;
