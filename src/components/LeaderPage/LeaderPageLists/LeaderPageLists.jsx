import React from 'react'
import styles from "./LeaderPageLists.module.scss"

const LeaderPageLists = (props) => {

  const { leaderBestTitle, leaderDarkTitle, leaderBestList, leaderDarkList, leaderColour } = props

  const bestListJSX = leaderBestList.map((listItem, index) => {
    return <li key={index + 1}>{listItem}</li>;
  });

  const darkListJSX = leaderDarkList.map((listItem, index) => {
    return <li key={index + 1}>{listItem}</li>;
  });



  return (
    <article className={styles.lists}>
          <div
            className={styles.lists__best}
            style={{ border: `1px solid ${leaderColour}` }}
          >
            <h4 style={{ backgroundColor: leaderColour }}>{leaderBestTitle}</h4>
            <ul>{bestListJSX}</ul>
          </div>
          <div
            className={styles.lists__dark}
            style={{ border: `1px solid ${leaderColour}` }}
          >
            <h4 style={{ backgroundColor: leaderColour }}>{leaderDarkTitle}</h4>
            <ul>{darkListJSX}</ul>
          </div>
        </article>
  )
}

export default LeaderPageLists
