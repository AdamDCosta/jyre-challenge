import React from 'react'
import styles from "./Header.module.scss";

const Header = (props) => {

  const { leaders } = props

  const headerTitle = leaders.title[0].text;

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{headerTitle}</h1>
      <p>Bringing character to life, the 9 Leader types show the diversity of effective leadership styles. Each one is underpinned by a unique combination of character strengths.</p>
    </header>
  )
}

export default Header
