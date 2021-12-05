"use strict";

var _leaderDB = require("./leaderDB");

var _mockLeaders = require("../data/mockLeaders");

var unmockedFetch = global.fetch;
var leader = _mockLeaders.mockLeader;
global.fetch = jest.fn(function () {
  Promise.resolve({
    json: function json() {
      return Promise.resolve(leader);
    }
  });
});
describe("Testing getLeaderData()", function () {
  it("Should return the correct data from API", function _callee() {
    var fetchData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap((0, _leaderDB.getLeaderData)());

          case 2:
            fetchData = _context.sent;
            expect(fetchData[0].name.text).toEqual("the Entrepreneurial leader");
            expect(fetch).toHaveBeenCalledTimes(1);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  });
  it("Should return null when data is not found", function _callee2() {
    var fetchData;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
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
            _context2.next = 3;
            return regeneratorRuntime.awrap((0, _leaderDB.getLeaderData)());

          case 3:
            fetchData = _context2.sent;
            expect(fetchData).toBeNull();

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    });
  });
});
afterAll(function () {
  global.fetch = unmockedFetch;
});