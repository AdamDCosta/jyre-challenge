import React, { Fragment } from "react";
import styles from "./Home.module.scss";
import LeaderCardList from "../../components/LeaderCardList/LeaderCardList";
import Header from "../../components/Header/Header";

const Home = (props) => {
  const { leaders } = props;

  return (
    <Fragment>
      {leaders ? <Header leaders={leaders} /> : null}
      <main className={styles.main}>
        {leaders ? <LeaderCardList leaders={leaders} /> : null}
      </main>
    </Fragment>
  );
};

export default Home;
