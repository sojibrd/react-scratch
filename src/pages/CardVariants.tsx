import React from "react";
import styles from "./home.module.css";

// Variant 1: Large image, title, and row of small images
export const CardVariant1 = ({ title, mainImg, items, link, linkText }) => (
  <div className={styles.homeCard}>
    <div className={styles.cardTitle}>{title}</div>
    <img className={styles.cardMainImg} src={mainImg.src} alt={mainImg.alt} />
    <div className={styles.cardGrid}>
      {items.map((img) => (
        <div className={styles.cardGridItem} key={img.alt}>
          <img className={styles.cardImg} src={img.src} alt={img.alt} />
          <div>{img.alt}</div>
        </div>
      ))}
    </div>
    <a className={styles.cardLink} href={link}>
      {linkText}
    </a>
  </div>
);

// Variant 2: 2x2 grid of images with captions
export const CardVariant2 = ({ title, items, link, linkText }) => (
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

// Variant 3: Large image, title, and single link
export const CardVariant3 = ({ title, mainImg, link, linkText }) => (
  <div className={styles.homeCard}>
    <div className={styles.cardTitle}>{title}</div>
    <img className={styles.cardMainImg} src={mainImg.src} alt={mainImg.alt} />
    <a className={styles.cardLink} href={link}>
      {linkText}
    </a>
  </div>
);
