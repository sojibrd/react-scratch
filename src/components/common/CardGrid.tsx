import React, { Suspense } from "react";
import styles from "../../pages/Home/home.module.scss";
import { CardVariant1, CardVariant2, CardVariant3 } from "../cards";

interface CardGridProps {
  data: any[];
  rowKey?: string;
}

const CardGrid: React.FC<CardGridProps> = ({ data, rowKey = "" }) => (
  <div className={styles.homeGrid}>
    <Suspense fallback={<div>Loading cards...</div>}>
      {data.map((card, idx) => {
        if (card.variant === 1 && card.mainImg) {
          return <CardVariant1 key={rowKey + idx} {...card} />;
        }
        if (card.variant === 2 && card.items) {
          return <CardVariant2 key={rowKey + idx} {...card} />;
        }
        if (card.variant === 3 && card.mainImg && card.items) {
          return <CardVariant3 key={rowKey + idx} {...card} />;
        }
        return null;
      })}
    </Suspense>
  </div>
);

export default CardGrid;
