import React from "react";
import styles from "./LeaderPage.module.scss";

const LeaderPage = (props) => {
  const { leaders } = props;

  

  const leaderColour = "props....color";

  return (
    <section>
      <div>
        <div>
          <h1>Title</h1>
          <h2>Quote</h2>
          <h3> - "Leader"</h3>
        </div>
        <div>
          <img src="#" alt="leader" />
        </div>
      </div>
      <article>
        <h2>The Character of the Innovator</h2>
        <p>Description</p>
      </article>
      <aside>
        <ul>
          <li>Leader Person</li>
        </ul>
      </aside>
      <div>
        <div>
          <h3>At their best</h3>
          <ul>
            <li>etc</li>
          </ul>
        </div>
        <div>
          <h3>Dark side</h3>
          <ul>
            <li>
              etc...
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LeaderPage;
