import React from 'react';
import styles from "../scss/App.module.scss"

const MainList = () => {
    return (
        <div className={styles.mainlistBlock}>
          <ul>
            <div className={styles.firstListBlock}>
              <li>
                <h2>1</h2>
                <span>Регистрируйте аккаунт</span>
              </li>
              <li>
                <h2>2</h2>
                <span>Пополните баланс удобным способом</span>
              </li>
              <li>
                <h2>3</h2>
                <span>Создайте рекламный пост с картинкой и ссылкой</span>
              </li>
            </div>
            <div className={styles.SecondListBlock}>
              <li>
                <h2>4</h2>
                <span>
                  Выберите подходящие каналы в каталоге или воспользуйтесь
                  подбором
                </span>
              </li>
              <li>
                <h2>5</h2>
                <span>
                  Владелец канала публикует пост и присылает ссылку на проверку
                </span>
              </li>
            </div>
          </ul>
        </div>
    );
}

export default MainList;
