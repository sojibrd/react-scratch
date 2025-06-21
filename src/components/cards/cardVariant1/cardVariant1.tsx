import React from "react";
import styles from "./cardVariant1.module.scss";

interface CardVariant1Props {
  title: string;
  mainImg: { src: string; alt: string };
  link: string;
  linkText: string;
}

const CardVariant1: React.FC<CardVariant1Props> = ({
  title,
  mainImg,
  link,
  linkText,
}) => (
  <div className={styles.homeCard}>
    <div className={styles.cardTitle}>{title}</div>
    <img className={styles.cardMainImg} src={mainImg.src} alt={mainImg.alt} />
    <a className={styles.cardLink} href={link}>
      {linkText}
    </a>
  </div>
);

export default CardVariant1;
