import { getLeaderData } from "./leaderDB";
import { mockLeader } from "../data/mockLeaders";

const unmockedFetch = global.fetch

const leader = mockLeader;


  global.fetch = jest.fn(() => {
      Promise.resolve({
        json: () =>
          Promise.resolve(leader)
      });
    });


describe("Testing getLeaderData()", () => {
  it("Should return the correct data from API", async () => {
    // global.fetch = jest.fn(() => {
    //   Promise.resolve({
    //     json: () =>
    //       Promise.resolve({results: {data : "leader"}})
    //   });
    // });

    // fetch.mockResponseOnce(JSON.stringify({data: "leader"}))

    const fetchData = await getLeaderData();
    expect(fetchData[0].name.text).toEqual("the Entrepreneurial leader");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return null when data is not found", async () => {
    global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve({ data: null }) }));

    const fetchData = await getLeaderData();

    expect(fetchData).toBeNull();
  });
});


afterAll(() => {
  global.fetch = unmockedFetch;
});
