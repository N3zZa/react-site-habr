import React from 'react';
import styles from "../scss/App.module.scss"

const Footer = () => {
    return (
      <footer>
        <h2>Контакты</h2>
        <div className={styles.footerInfo}>
          <h2 className={styles.footerPlace}>
            Москва, Краснопресненская набережная 12,
            <br /> Технологии Х
          </h2>
          <h2>+79777771210</h2>
          <h2>info@telegramlab.space</h2>
        </div>
      </footer>
    );
}

export default Footer;
