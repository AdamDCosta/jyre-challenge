import React from "react";
import { Link } from 'react-router-dom';
import styles from "./LeaderCard.module.scss";

const LeaderCard = (props) => {
  const { leader } = props;

  return (
    <Link to={`/${leader.name[0].text}`} style={{textDecoration: "none"}}>
      <article className={styles["leader-card"]}>
        <div className={styles["leader-card__image"]}>
          <img src={leader.exemplar_image.url} alt={leader.exemplar_image.alt} />
        </div>
        <h1>{leader.name[0].text}</h1>
      </article>
    </Link>
  );
};

export default LeaderCard;
