import React from 'react'
import "./Card.scss";

const Card = (props) => {

  const styles = "card " + props.className

  return (
    <div className={styles}>
      {props.children}
    </div>
  )
}

export default Card
