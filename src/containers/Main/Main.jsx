import React, { useState, useEffect } from 'react'
import LeaderCardList from '../../components/LeaderCardList/LeaderCardList'
import axios from 'axios'

const Main = () => {

  const [ leaders, setLeaders ] = useState({})

  const leadersURL = `https://jyre-engineering-recruitment.prismic.io/api/v2/documents/search?ref=YZfPZBIAACwAxBNJ&q=[[at(document.id,"YZfDNxIAACkAw9oa")]]&access_token=MC5ZWmZRVEJJQUFDMEF4QmVF.Me-_vUfvv71QJAoT77-9Pe-_ve-_vXLvv71j77-977-9TTzvv73vv73vv73vv73vv70OXhFpdlDvv73vv70`

  // const fetchData = () => {
  //   axios.get(leadersURL).then(response => {
  //     return response;
  //   })
  //   .then(leaderData => {
  //     if (leaderData) {
  //       setLeaders(leaderData) 
  //     } else {
  //       setLeaders({})
  //     }
  //   })
  // } 

  // const fetchData = () => {

  //   fetch(leadersURL).then(response => {
  //     return response.json();
  //   })
  //   .then(leaderData => {
  //     // (console.log(leaderData))
  //     if (leaderData) {
  //       setLeaders(leaderData)
  //     } else {
  //       setLeaders({})
  //     }
      
  //   })
    
  // }

  useEffect(() => {
    fetch(leadersURL).then(response => {
      return response.json();
    })
    .then(leaderData => {
      // (console.log(leaderData))
      if (leaderData) {
        setLeaders(leaderData.results[0].data)
      } else {
        setLeaders({})
      }
      
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  console.log(leaders)

  

  return (
    <main>
      <LeaderCardList leaders={leaders}/>
    </main>
  )
}

export default Main

