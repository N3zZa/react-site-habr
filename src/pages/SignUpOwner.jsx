import React from 'react';
import Header from '../components/Header';
import SwitchButton from '../components/SwitchButton';
import styles from "../scss/App.module.scss"
import SignUpFormOwner from "../components/SignUpFormOwner"

const SignUpOwner = () => {
    return (
      <div className={styles.signUpPageOwner}>
        <div className={styles.signUpPageHeader}>
          <Header />
        </div>
        <div className={styles.signUpPage_container}>
          <h2>
            Регистрация нового
            <br /> аккаунта рекламодателя
          </h2>
          <SwitchButton />
          <SignUpFormOwner />
        </div>
      </div>
    );
}

export default SignUpOwner;
