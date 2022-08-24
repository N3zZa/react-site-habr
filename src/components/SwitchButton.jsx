import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../scss/App.module.scss"

const SwitchButton = () => {
    return (
      <ul className={styles.switchPerson_block}>
        <Link to={"/signUpOwner"}>
          <li className={styles.ChannelOwner}>Владелец канала</li>
        </Link>
        <Link to={"/signUp"}>
          <li className={styles.advertiser}>Рекламодатель</li>
        </Link>
      </ul>
    );
}

export default SwitchButton;
