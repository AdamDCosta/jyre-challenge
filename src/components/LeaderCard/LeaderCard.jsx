import React from "react";
import styles from "./LeaderCard.module.scss";

const LeaderCard = (props) => {
  const { leader } = props;

  return (
    <article className={styles["leader-card"]}>
      <div className={styles["leader-card__image"]}>
        <img src={leader.exemplar_image.url} alt={leader.exemplar_image.alt} />
      </div>
      <h1>{leader.name[0].text}</h1>
    </article>
  );
};

export default LeaderCard;
