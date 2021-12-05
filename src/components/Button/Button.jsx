import React from 'react'
import styles from "./Button.module.scss";

const Button = (props) => {

  const { buttonText } = props;

  return (
    <button className={styles.button}>{buttonText}</button>
  )
}

export default Button
