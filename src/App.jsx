import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Home from "./containers/Home/Home";
import LeaderPage from "./components/LeaderPage/LeaderPage";
import { getLeaderData } from "./services/leaderDB";
import { mockLeader } from "./data/mockLeaders";

const App = () => {
  const [leaders, setLeaders] = useState(mockLeader);

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
          <Route exact path="/jyre-challenge" element={<Home leaders={leaders} />} />

          <Route
            path="/jyre-challenge/:leaderName"
            element={<LeaderPage leaders={leaders} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
