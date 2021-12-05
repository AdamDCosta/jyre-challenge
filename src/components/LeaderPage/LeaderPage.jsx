import React from "react";
import { useParams } from "react-router-dom";
import styles from "./LeaderPage.module.scss";

const LeaderPage = (props) => {
  const { leaders } = props;

  const { leaderName } = useParams();

  const nameArray = leaders.types.filter((types) => {
    return types.name[0].text === leaderName;
  });

  console.log(nameArray);

  const leaderObject = nameArray[0];

  const leaderColour = leaderObject.colour;

  const leaderDescription = leaderObject.description;

  // -- need to split leaderDescription array into usable chunks --

  let descriptionTitle;
  let descriptionParagraph;
  let leaderBestTitle;
  let leaderDarkTitle;
  let leaderBestList = [];
  let leaderDarkList = [];

  // -- find index of last heading4, so that I can use this to split the two lists into seperate arrays --

  const descTypes = leaderDescription.map((desc) => {
    return desc.type;
  });

  const lastHeading4Index = descTypes.lastIndexOf("heading4");

  // -- loop through description array and add elements to relevant variable, to be rendered as JSX

  for (let i = 0; i < leaderDescription.length; i++) {
    switch (leaderDescription[i].type) {
      case "heading3":
        descriptionTitle = leaderDescription[i].text;
        break;
      case "paragraph":
        descriptionParagraph = leaderDescription[i].text;
        break;
      case "heading4":
        if (i < lastHeading4Index) {
          leaderBestTitle = leaderDescription[i].text;
        } else {
          leaderDarkTitle = leaderDescription[i].text;
        }
        break;
      case "list-item":
        if (i < lastHeading4Index) {
          let bestItem = leaderDescription[i].text;
          leaderBestList.push(bestItem);
        } else {
          let darkItem = leaderDescription[i].text;
          leaderDarkList.push(darkItem);
        }
        break;
      default:
        return;
    }
  }

  const bestListJSX = leaderBestList.map((listItem, index) => {
    return <li key={index + 1}>{listItem}</li>;
  });

  const darkListJSX = leaderDarkList.map((listItem, index) => {
    return <li key={index + 1}>{listItem}</li>;
  });

  console.log(leaderBestTitle);

  return (
    <section className={styles["leader-page"]}>
      <div className={styles["leader-page__heading"]}>
        <div className={styles["leader-page__heading--text"]}>
          <h1
            className={styles["leader-page__heading--text-title"]}
            style={{ color: leaderColour }}
          >
            {leaderObject.name[0].text}
          </h1>
          <h2 className={styles["leader-page__heading--text-quote"]}>
            {leaderObject.quote}
          </h2>
          <h3 className={styles["leader-page__heading--text-exemplar"]}>
            {leaderObject.exemplar}
          </h3>
        </div>
        <figure className={styles["leader-page__heading--image"]}>
          <img
            src={leaderObject.exemplar_image.url}
            alt={leaderObject.exemplar_image.alt}
          />
        </figure>
      </div>
      <article className={styles["leader-page__character"]}>
        <h3 className={styles["leader-page__character--title"]}>
          {descriptionTitle}
        </h3>
        <p className={styles["leader-page__character--desc"]}>
          {descriptionParagraph}
        </p>
      </article>
      <article className={styles["leader-page__lists"]}>
        <div
          className={styles["leader-page__lists--best"]}
          style={{ border: `1px solid ${leaderColour}` }}
        >
          <h4 style={{ color: leaderColour }}>{leaderBestTitle}</h4>
          <ul>{bestListJSX}</ul>
        </div>
        <div
          className={styles["leader-page__lists--dark"]}
          style={{ border: `1px solid ${leaderColour}` }}
        >
          <h4 style={{ color: leaderColour }}>{leaderDarkTitle}</h4>
          <ul>{darkListJSX}</ul>
        </div>
      </article>
    </section>
  );
};

export default LeaderPage;
