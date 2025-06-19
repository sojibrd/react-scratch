import React, { useState, Suspense } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "../Home/home.module.css";
import { carouselData, cardData } from "../../constants";
import {
  CardVariant1,
  CardVariant2,
  CardVariant3,
} from "../../components/cards";

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % carouselData.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + carouselData.length) % carouselData.length);

  return (
    <div>
      <section
        className={styles.homeHero}
        style={{
          background: `linear-gradient(90deg, #fff 0%, ${carouselData[current].bg} 100%)`,
        }}
      >
        <button
          className={styles.carouselBtn}
          onClick={prev}
          aria-label="Previous"
          type="button"
        >
          <FaChevronLeft />
        </button>
        <div className={styles.heroContent}>
          <div>
            <div className={styles.heroText}>{carouselData[current].title}</div>
            <div className={styles.heroSub}>
              {carouselData[current].subtitle}
            </div>
          </div>
          <img
            className={styles.heroImg}
            src={carouselData[current].img}
            alt={carouselData[current].title}
          />
        </div>
        <button
          className={styles.carouselBtn}
          onClick={next}
          aria-label="Next"
          type="button"
        >
          <FaChevronRight />
        </button>
      </section>

      <div className={styles.homeGrid}>
        <Suspense fallback={<div>Loading cards...</div>}>
          {cardData.map((card, idx) => {
            if (card.variant === 1) {
              return <CardVariant1 key={idx} {...card} />;
            }
            if (card.variant === 2) {
              return <CardVariant2 key={idx} {...card} />;
            }
            if (card.variant === 3) {
              return <CardVariant3 key={idx} {...card} />;
            }
            return null;
          })}
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
