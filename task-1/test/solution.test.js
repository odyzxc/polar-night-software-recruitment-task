const solution = require("../solution");
const expect = require("chai").expect;

describe("solution", () => {
  it("should return 1 if empty array", () => {
    expect(solution([])).to.equal(1);
  });

  it("should return correct missing number from example solution", () => {
    expect(solution([2, 3, 1, 5])).to.equal(4);
  });

  it("should return 1 for array with only element 2", () => {
    expect(solution([2])).to.equal(1);
  });

  it("should return 2 for array with only element 1", () => {
    expect(solution([1])).to.equal(2);
  });

});
