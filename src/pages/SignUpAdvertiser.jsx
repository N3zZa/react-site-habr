import React from "react";
import Header from "../components/Header";
import SignUpFormAdvertiser from "../components/SignUpFormAdvertiser";
import SwitchButton from "../components/SwitchButton";
import styles from "../scss/App.module.scss";

const SignUp = () => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.signUpPageHeader}>
        <Header />
      </div>
      <div className={styles.signUpPage_container}>
        <h2>
          Регистрация нового
          <br /> аккаунта рекламодателя
        </h2>
        <SwitchButton />
        <SignUpFormAdvertiser />
      </div>
    </div>
  );
};

export default SignUp;
