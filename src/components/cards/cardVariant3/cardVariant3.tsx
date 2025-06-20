import React from "react";
import styles from "./cardVariant3.module.css";

interface CardVariant3Props {
  title: string;
  mainImg: { src: string; alt: string };
  items: { src: string; alt: string }[];
  link: string;
  linkText: string;
}

const CardVariant3: React.FC<CardVariant3Props> = ({
  title,
  mainImg,
  items,
  link,
  linkText,
}) => (
  <div className={styles.homeCard}>
    <div className={styles.cardTitle}>{title}</div>
    <img className={styles.cardMainImg} src={mainImg.src} alt={mainImg.alt} />
    <div className={styles.cardGrid}>
      {items.map((img) => (
        <div className={styles.cardGridItem} key={img.alt}>
          <img className={styles.cardImg} src={img.src} alt={img.alt} />
          <div
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {img.alt}
          </div>
        </div>
      ))}
    </div>
    <a className={styles.cardLink} href={link}>
      {linkText}
    </a>
  </div>
);

export default CardVariant3;
