import React from "react";
import styles from "./LeaderCard.module.scss";

const LeaderCard = (props) => {
  const { leader } = props;



  // const leaderImgURLs = leaders.types[0].exemplar_image.map(image => {
  //   return <img src={image.url} alt={image.alt} />
  // })

  // const leaderTypes = leaders.types;

  // const leaderImgURLs = leaderTypes.map((type) => {
  //   return (
  //     <img
  //       key={type.exemplar_image.alt}
  //       src={type.exemplar_image.url}
  //       alt={type.exemplar_image.alt}
  //     />
  //   );
  // });

  return (
  <article>
    <img src={leader.exemplar_image.url} alt={leader.exemplar_image.alt} />
    <h1>{leader.name[0].text}</h1>
  </article>);
};

export default LeaderCard;
