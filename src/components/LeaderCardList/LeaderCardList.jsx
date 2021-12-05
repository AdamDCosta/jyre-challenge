import React from "react";
import styles from "./LeaderCardList.module.scss";
import LeaderCard from "../LeaderCard/LeaderCard";

const LeaderCardList = (props) => {
  const { leaders } = props;

  const leaderTypes = leaders.types;

  const leadersList = leaderTypes.map((leader) => {
    return <LeaderCard key={leader.name[0].text} leader={leader} />;
  });

  return (
    <section className={styles.leaders}>
      <div className={styles["leaders__grid"]}>{leadersList}</div>
    </section>
  );
};

export default LeaderCardList;
