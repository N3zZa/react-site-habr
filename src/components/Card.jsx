import React from "react";
import styles from "../scss/App.module.scss"

export default function Card({ title, price, viewers, cardInfoList}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.cardMain_info}>
          <h4>{title}</h4>
          <p>Охват от {viewers} просмотров</p>
          <h4 className={styles.cardPrice}>{price} ₽</h4>
        </div>
        <ul className={styles.cardInfoList}>
          {cardInfoList.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
