import React, { useState } from "react";
import { carouselData, cardData, cardDataRow2 } from "../../constants";
import CardGrid from "../../components/common/CardGrid";
import { Carousel } from "../../components/common";
import HeroSection from "../../components/common/HeroSection";
import {
  popularProductsInWirelessInternationally,
  newInternationalCustomersCarousel,
  topPicksBangladeshCarousel,
  bestSellersClothingCarousel,
  internationalTopSellersKitchenCarousel,
  popularBeautyInternationalCarousel,
  bestSellersSportsOutdoorsCarousel,
} from "../../constants/carousels";

const Home: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => (c + 1) % carouselData.length);
  const prev = () =>
    setCurrent((c) => (c - 1 + carouselData.length) % carouselData.length);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title={carouselData[current].title}
        subtitle={carouselData[current].subtitle}
        img={carouselData[current].img}
        bg={carouselData[current].bg}
        onPrev={prev}
        onNext={next}
      />
      {/* Main Cards Grid */}
      <CardGrid data={cardData} />
      {/* New Section/Row of Cards */}
      <CardGrid data={cardDataRow2} rowKey="row2-" />
      {/* Carousel Section */}
      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="Popular products in Wireless internationally"
          items={popularProductsInWirelessInternationally}
        />
      </div>
    </div>
  );
};

export default Home;
