"use strict";

require("@testing-library/jest-dom");

var _jestFetchMock = _interopRequireDefault(require("jest-fetch-mock"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
_jestFetchMock["default"].enableMocks();