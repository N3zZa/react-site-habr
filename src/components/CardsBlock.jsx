import React from 'react';
import Card from './Card';
import styles from "../scss/App.module.scss"

const CardsBlock = () => {
  const CardInfo = [
    {
      title: "Начальный",
      price: "52 000",
      viewers: "51 000",
      cardInfoList: [
        "Ручной подбор каналов",
        "Индивидуальный план продвижения",
        "Оповещения о публикациях",
        "Согласование пакета",
      ],
    },
    {
      title: "Стандарт",
      price: "120 000",
      viewers: "134 000",
      cardInfoList: [
        "+Прогноз результатов Ручной подбор каналов",
        "Индивидуальный план продвижения",
        "Оповещения о публикациях",
        "Отчетность",
      ],
    },
    {
      title: "Эксперт",
      price: "320 000",
      viewers: "260 000",
      cardInfoList: [
        "+Прогноз результатов Ручной подбор каналов",
        "Индивидуальный план продвижения",
        "Оповещения о публикациях",
        "+ Копирайтеры",
      ],
    },
    {
      title: "Профессионал",
      price: "2 000 000",
      viewers: "1 700 000",
      cardInfoList: [
        "+Прогноз результатов Ручной подбор каналов",
        "Индивидуальный план продвижения",
        "Оповещения о публикациях",
        "+ Копирайтеры",
      ],
    },
  ];

    return (
      <div className={styles.cardsContainer}>
        <h3>
          Делаем запуск рекламы
          <br /> под ключ
        </h3>
        <div className={styles.cardsBlock}>
          {CardInfo.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </div>
    );
}

export default CardsBlock;
