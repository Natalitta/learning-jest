const {} = require("jest");
const addition = require("../calc");

describe("Calculator", () => {
    describe("Addition function", () => {

    });

    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 20 for 10 + 10", () => {
            expect(addition(10, 10)).toBe(20);
        });
        test("should return error for " " + 10", () => {
            expect(addition(" ", 10)).toBe(Error);
        });
        test("should return error for "a" + 10", () => {
            expect(addition("a", 10)).toBe(error);
        });
    });

    describe("Subtraction function", () => {

    });

    describe("Multiply function", () => {

    });

    describe("Division function", () => {

    });
})