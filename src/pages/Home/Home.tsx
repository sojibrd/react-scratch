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
      <CardGrid data={[...cardData, ...cardDataRow2]} />
      {/* New Section/Row of Cards */}
      {/* <CardGrid data={cardDataRow2} rowKey="row2-" /> */}
      {/* Carousel Section */}
      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="Popular products in Wireless internationally"
          items={popularProductsInWirelessInternationally}
        />
      </div>
      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="New international customers purchased"
          items={newInternationalCustomersCarousel}
        />
      </div>

      {/* New Section/Row of Cards */}
      <CardGrid data={cardData} rowKey="row3-" />

      {/* Carousel Section */}
      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="Top picks for Bangladesh"
          items={topPicksBangladeshCarousel}
        />
      </div>

      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="Best Sellers in Clothing, Shoes & Jewelry"
          items={bestSellersClothingCarousel}
        />
      </div>

      {/* New Section/Row of Cards */}
      <CardGrid data={cardDataRow2} rowKey="row4-" />

      {/* Carousel Section */}
      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="International top sellers in Kitchen"
          items={internationalTopSellersKitchenCarousel}
        />
      </div>

      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="Popular products in Beauty internationally"
          items={popularProductsInWirelessInternationally}
        />
      </div>

      {/* New Section/Row of Cards */}
      <CardGrid data={cardData} rowKey="row5-" />

      {/* Carousel Section */}
      <div style={{ margin: "32px 0" }}>
        <Carousel
          title="Best Sellers in Sports & Outdoors"
          items={bestSellersSportsOutdoorsCarousel}
        />
      </div>
    </div>
  );
};

export default Home;
