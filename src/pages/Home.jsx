import React from "react";
import styles from "../scss/App.module.scss";
import logoImg from "../img/star-dynamic-premium.svg";
import SwitchButton from "../components/SwitchButton";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardsBlock from "../components/CardsBlock";
import MainList from "../components/MainList";
import ButtonSignUp from "../components/ButtonSignUp";
import '../scss/fonts.scss'

const Home = () => {

  return (
    <div className={styles.wrapper}>
      <Header />
      <main>
        <div className={styles.mainContainer}>
          <div className={styles.Selectpersonblock}>
            <h2>
              Биржа рекламы в<br /> Телеграм и ВКонтакте
            </h2>
            <SwitchButton />
          </div>
          <div className={styles.header_icon}>
            <img src={logoImg} alt="logo" />
          </div>
          <div className={styles.signUp}>
            <div className={styles.signUpInfo}>
              <p>Подключено каналов: 1245</p>
              <p>Рекламодателей: 2</p>
            </div>
            <ButtonSignUp />
          </div>
        </div>
        <div className={styles.mainList}>
          <h3>Как работает биржа для рекламодателей?</h3>
          <MainList />
        </div>
        <div>
          <CardsBlock />
          <h2 className={styles.mainLastText}>
            В каждом тарифе дадим вам
            <br /> копирайтера бесплатно!
          </h2>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
