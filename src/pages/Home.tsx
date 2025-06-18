import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./home.module.css";
import { CardVariant1, CardVariant2, CardVariant3 } from "./CardVariants";

const carouselData = [
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    title: "Kitchen essentials",
    subtitle: "Under $50",
    bg: "#e6c6fa",
  },
  {
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80",
    title: "Upgrade your workspace",
    subtitle: "Best deals on tech",
    bg: "#c6e6fa",
  },
  {
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1200&q=80",
    title: "Home decor picks",
    subtitle: "Refresh your space",
    bg: "#fae6c6",
  },
];

const cardData = [
  {
    variant: 1,
    title: "Top categories in Kitchen appliances",
    mainImg: {
      src: "https://m.media-amazon.com/images/I/81O%2BGNdkzKL._AC_UL320_.jpg",
      alt: "Cooker",
    },
    items: [
      {
        src: "https://m.media-amazon.com/images/I/71U-Q+N7PXL._AC_UL320_.jpg",
        alt: "Coffee",
      },
      {
        src: "https://m.media-amazon.com/images/I/81t6Av5DvXL._AC_UL320_.jpg",
        alt: "Pots and Pans",
      },
      {
        src: "https://m.media-amazon.com/images/I/71p2LkQ1xkL._AC_UL320_.jpg",
        alt: "Kettles",
      },
    ],
    link: "#",
    linkText: "Explore all products in Kitchen",
  },
  {
    variant: 2,
    title: "Shop for your home essentials",
    items: [
      {
        src: "https://m.media-amazon.com/images/I/81QpkIctqPL._AC_UL320_.jpg",
        alt: "Cleaning Tools",
      },
      {
        src: "https://m.media-amazon.com/images/I/81cJ5hQ1kGL._AC_UL320_.jpg",
        alt: "Home Storage",
      },
      {
        src: "https://m.media-amazon.com/images/I/81WcnNQ-TBL._AC_UL320_.jpg",
        alt: "Home Decor",
      },
      {
        src: "https://m.media-amazon.com/images/I/81mLxF1e6KL._AC_UL320_.jpg",
        alt: "Bedding",
      },
    ],
    link: "#",
    linkText: "Discover more in Home",
  },
  {
    variant: 3,
    title: "Get your game on",
    mainImg: {
      src: "https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UL320_.jpg",
      alt: "Gaming",
    },
    link: "#",
    linkText: "Shop gaming",
  },
  {
    variant: 2,
    title: "Shop Fashion for less",
    items: [
      {
        src: "https://m.media-amazon.com/images/I/81p7L5G2QdL._AC_UL320_.jpg",
        alt: "Jeans under $50",
      },
      {
        src: "https://m.media-amazon.com/images/I/81Zt42ioCgL._AC_UL320_.jpg",
        alt: "Tops under $25",
      },
      {
        src: "https://m.media-amazon.com/images/I/81nCqY1k9LL._AC_UL320_.jpg",
        alt: "Dresses under $30",
      },
      {
        src: "https://m.media-amazon.com/images/I/81r1A4l3Q-L._AC_UL320_.jpg",
        alt: "Shoes under $50",
      },
    ],
    link: "#",
    linkText: "See all deals",
  },
];

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
      </div>
    </div>
  );
};

export default Home;
