"use strict";

var _leaderDB = require("./leaderDB");

var _mockLeaders = require("../data/mockLeaders");

var _jestFetchMock = _interopRequireDefault(require("jest-fetch-mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalFetch = global.fetch;
var leader = _mockLeaders.mockLeader;
describe("Testing getLeaderData()", function () {
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
  it("Should return null when data is not found", function _callee() {
    var fetchData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            global.fetch = jest.fn(function () {
              return Promise.resolve({
                json: function json() {
                  return Promise.resolve({
                    data: null
                  });
                }
              });
            });
            _context.next = 3;
            return regeneratorRuntime.awrap((0, _leaderDB.getLeaderData)());

          case 3:
            fetchData = _context.sent;
            expect(fetchData).toBeNull();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }); //   it("Should return the correct data from the API", async() => {
  //     fetch.mockResponseOnce(JSON.stringify({ results: { data: "leader" }  }))
  //     const leaderData = await getLeaderData();
  //     expect(leaderData).toEqual({ data: "leader" })
  //   })
});
afterAll(function () {
  global.fetch = globalFetch;
});