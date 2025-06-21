import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./carousel.module.scss";

interface CarouselItem {
  src: string;
  alt: string;
}

interface CarouselProps {
  title: string;
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ title, items }) => {
  const [startIdx, setStartIdx] = useState(0);
  const visibleCount = 8; // Number of items visible at once
  const maxIdx = Math.max(0, items.length - visibleCount);

  const handlePrev = () => {
    setStartIdx((prev) => Math.max(prev - visibleCount, 0));
  };

  const handleNext = () => {
    setStartIdx((prev) => Math.min(prev + visibleCount, maxIdx));
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselContainer}>
        <h2 className={styles.carouselTitle}>{title}</h2>
        {startIdx > 0 && (
          <button
            className={styles.navButton}
            onClick={handlePrev}
            aria-label="Previous"
          >
            <span className={styles.iconBox}>
              <FaChevronLeft />
            </span>
          </button>
        )}
        <div className={styles.itemsRow}>
          {items.slice(startIdx, startIdx + visibleCount).map((item, idx) => (
            <div className={styles.carouselItem} key={idx}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.carouselImg}
              />
            </div>
          ))}
        </div>
        {startIdx < maxIdx && (
          <button
            className={styles.navButton}
            onClick={handleNext}
            aria-label="Next"
          >
            <span className={styles.iconBox}>
              <FaChevronRight />
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;
