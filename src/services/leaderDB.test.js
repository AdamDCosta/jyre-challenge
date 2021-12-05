import { getLeaderData } from "./leaderDB";
import { mockLeader } from "../data/mockLeaders";
import fetch from 'jest-fetch-mock'

const globalFetch = global.fetch

const leader = mockLeader;




describe("Testing getLeaderData()", () => {
  
  
  // it("Should return the correct data from API", async () => {
  //   global.fetch = jest.fn(() => {
  //       Promise.resolve({
  //         json: async () =>
  //            Promise.resolve({leader})
  //       });
  //     });
  //   const fetchData = await getLeaderData();
  //   expect(fetchData.title[0].type).toEqual("heading1");
  //   expect(fetch).toHaveBeenCalledTimes(1);
  // });


  it("Should return null when data is not found", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ data: null }) }));

    const fetchData = await getLeaderData();

    expect(fetchData).toBeNull();
  });

//   it("Should return the correct data from the API", async() => {
//     fetch.mockResponseOnce(JSON.stringify({ results: { data: "leader" }  }))

//     const leaderData = await getLeaderData();
//     expect(leaderData).toEqual({ data: "leader" })

//   })
});


afterAll(() => {
  global.fetch = globalFetch;
});
