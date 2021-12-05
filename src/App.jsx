import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./containers/Home/Home";
import LeaderPage from "./components/LeaderPage/LeaderPage";
import { getLeaderData } from "./services/leaderDB";

const App = () => {
  const [leaders, setLeaders] = useState(null);

  const leadersURL = `https://jyre-engineering-recruitment.prismic.io/api/v2/documents/search?ref=YZfPZBIAACwAxBNJ&q=[[at(document.id,"YZfDNxIAACkAw9oa")]]&access_token=MC5ZWmZRVEJJQUFDMEF4QmVF.Me-_vUfvv71QJAoT77-9Pe-_ve-_vXLvv71j77-977-9TTzvv73vv73vv73vv73vv70OXhFpdlDvv73vv70`;

  useEffect(() => {
    const fetchLeaderData = async () => {
      const leaderData = await getLeaderData();
      setLeaders(leaderData)
    }

    fetchLeaderData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  console.log(leaders);

  return (
    <Router>
      <div className={styles.app}>
        <Routes>
          <Route exact path="/" element={<Home leaders={leaders} />} />

          <Route
            path="/:leaderName"
            element={<LeaderPage leaders={leaders} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
