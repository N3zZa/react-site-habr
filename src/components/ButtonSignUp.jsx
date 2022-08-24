import React from 'react'
import { Link } from 'react-router-dom';
import styles from "../scss/App.module.scss"

export default function ButtonSignUp() {
  return (
    <Link to={"signUp"}>
      <button className={styles.buttonSignUp}>Регистрация</button>
    </Link>
  );
}
