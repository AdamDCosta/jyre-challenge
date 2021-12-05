import React from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";

const Header = (props) => {
  const { leaders } = props;

  const headerTitle = leaders.title[0].text;

  return (
    <header className={styles.header}>
      <div className={styles.header__text}>
        <h1 className={styles["header__text--title"]}>{headerTitle.toUpperCase()}</h1>
        <p className={styles["header__text--desc"]}>
          Bringing character to life, the 9 Leader types show the diversity of
          effective leadership styles.
        </p>
        <p className={styles["header__text--desc"]}>
          Each one is underpinned by a unique combination of character
          strengths.
        </p>
      <a href="#leaders"><Button buttonText="Explore"/></a>
      </div>
    </header>
  );
};

export default Header;
