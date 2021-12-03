import React from "react";
import { useParams } from 'react-router-dom';
import styles from "./LeaderPage.module.scss";

const LeaderPage = (props) => {
  const { leaders } = props;

  const { leaderName } = useParams();

  const nameArray = leaders.types.filter(types => {
    return types.name[0].text === leaderName;
  })

  console.log(nameArray)

  const leaderObject = nameArray[0];

  const leaderColour = leaderObject.colour;

  const leaderDescription = nameArray[0].description.map((desc, index) => {
    switch(desc.type) {
      // case "heading3":
      //     return <h3>{desc.text}</h3>
      case "heading4":
          return <h4>{desc.text}</h4>
      // case "paragraph":
      //     return <p>{desc.text}</p>
      case "list-item":
          return <li>{desc.text}</li>
      default:
          return "";        
    }
  })

  



  return (
    <section className={styles["leader-page"]}>
      <div className={styles["leader-page__heading"]}>
        <div className={styles["leader-page__heading--text"]}>
          <h1 className={styles["leader-page__heading--text-title"]} style={{color: leaderColour}}>{leaderObject.name[0].text}</h1>
          <h2 className={styles["leader-page__heading--text-quote"]}>{leaderObject.quote}</h2>
          <h3>{leaderObject.exemplar}</h3>
        </div>
        <div className={styles["leader-page__heading--image"]}>
          <img src={leaderObject.exemplar_image.url} alt={leaderObject.exemplar_image.alt} />
        </div>
      </div>
      <article className={styles["leader-page__character"]}>
        <h3>{leaderObject.description[0].text}</h3>
        <p>{leaderObject.description[1].text}</p>
      </article>
      <div className={styles["leader-page__lists"]} style={{border: `1px solid ${leaderColour}`}}>
        {leaderDescription}
      </div>
    </section>
  );
};

export default LeaderPage;
