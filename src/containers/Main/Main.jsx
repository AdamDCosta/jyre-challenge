import React, { useState, useEffect, Fragment } from "react";
import styles from "./Main.module.scss";
import LeaderCardList from "../../components/LeaderCardList/LeaderCardList";
import Header from "../../components/Header/Header";

const Main = () => {
  const [leaders, setLeaders] = useState(null);

  const leadersURL = `https://jyre-engineering-recruitment.prismic.io/api/v2/documents/search?ref=YZfPZBIAACwAxBNJ&q=[[at(document.id,"YZfDNxIAACkAw9oa")]]&access_token=MC5ZWmZRVEJJQUFDMEF4QmVF.Me-_vUfvv71QJAoT77-9Pe-_ve-_vXLvv71j77-977-9TTzvv73vv73vv73vv73vv70OXhFpdlDvv73vv70`;

  useEffect(() => {
    fetch(leadersURL)
      .then((response) => {
        return response.json();
      })
      .then((leaderData) => {
        if (leaderData) {
          setLeaders(leaderData.results[0].data);
        } else {
          setLeaders({});
        }
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(leaders);

  return (
    <Fragment>
      {leaders ? <Header leaders={leaders} /> : null}
      <main className={styles.main}>{leaders ? <LeaderCardList leaders={leaders} /> : null}</main>
    </Fragment>
  );
};

export default Main;
