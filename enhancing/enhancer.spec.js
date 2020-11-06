const enhancer = require("./enhancer.js");
// test away!

describe("enhancer unit tests", () => {
  it("repairs", () => {
    expect(
      enhancer.repair({
        name: "item",
        enhancement: 20,
        durability: 70,
      })
    ).toEqual({
      name: "item",
      enhancement: 20,
      durability: 100,
    });
  });

  it("tests enhancement success", () => {});

  it("tests enhancement failure", () => {});
});
