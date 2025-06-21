import React from "react";
import styles from "./cardVariant2.module.scss";

interface CardVariant2Props {
  title: string;
  items: { src: string; alt: string }[];
  link: string;
  linkText: string;
}

const CardVariant2: React.FC<CardVariant2Props> = ({
  title,
  items,
  link,
  linkText,
}) => (
  <div className={styles.homeCard}>
    <div className={styles.cardTitle}>{title}</div>
    <div className={styles.cardGrid}>
      {items.map((item) => (
        <div className={styles.cardGridItem} key={item.alt}>
          <img className={styles.cardImg} src={item.src} alt={item.alt} />
          <div>{item.alt}</div>
        </div>
      ))}
    </div>
    <a className={styles.cardLink} href={link}>
      {linkText}
    </a>
  </div>
);

export default CardVariant2;
