import { getLeaderData } from "./leaderDB";
import { mockLeader } from "../data/mockLeaders";

const unmockedFetch = global.fetch

const leader = mockLeader;


  global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve({leader})
      });
    });


describe("Testing getLeaderData()", () => {

  // 

  // it("Should return the correct data from API", async () => {

  //   const fetchData = await getLeaderData();
  //   expect(fetchData.types[0].name[0].text).toEqual("the Entrepreneurial leader");
  //   expect(fetch).toHaveBeenCalledTimes(1);
  // });


  it("Should return null when data is not found", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ data: null }) }));

    const fetchData = await getLeaderData();

    expect(fetchData).toBeNull();
  });
});


afterAll(() => {
  global.fetch = unmockedFetch;
});
