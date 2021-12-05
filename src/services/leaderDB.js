export const getLeaderData = async () => {
  const leadersURL = `https://jyre-engineering-recruitment.prismic.io/api/v2/documents/search?ref=YZfPZBIAACwAxBNJ&q=[[at(document.id,"YZfDNxIAACkAw9oa")]]&access_token=MC5ZWmZRVEJJQUFDMEF4QmVF.Me-_vUfvv71QJAoT77-9Pe-_ve-_vXLvv71j77-977-9TTzvv73vv73vv73vv73vv70OXhFpdlDvv73vv70`;

  try {
    const response = await fetch(leadersURL)
    const leaderData = await response.json()
    return leaderData.results[0].data
      
  } catch (error) {
    return null;
  }
};
