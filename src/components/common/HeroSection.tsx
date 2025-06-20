import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../../pages/Home/home.module.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  img: string;
  bg: string;
  onPrev: () => void;
  onNext: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  img,
  bg,
  onPrev,
  onNext,
}) => (
  <section
    className={styles.homeHero}
    style={{
      background: `linear-gradient(90deg, #fff 0%, ${bg} 100%)`,
    }}
  >
    <button
      className={styles.carouselBtn}
      onClick={onPrev}
      aria-label="Previous"
      type="button"
    >
      <FaChevronLeft />
    </button>
    <div className={styles.heroContent}>
      <div>
        <div className={styles.heroText}>{title}</div>
        <div className={styles.heroSub}>{subtitle}</div>
      </div>
      <img className={styles.heroImg} src={img} alt={title} />
    </div>
    <button
      className={styles.carouselBtn}
      onClick={onNext}
      aria-label="Next"
      type="button"
    >
      <FaChevronRight />
    </button>
  </section>
);

export default HeroSection;
