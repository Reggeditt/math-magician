import operate from "../src/logic/operate.js";

describe("Operations should be as below", () => {
  it("should add two numbers", () => {
    const result = operate("5", "5", "+");
    expect(result).toBe("10");
  });
  
it("should subtract two numbers", () => {
  const result = operate("10", "8", "-");
  expect(result).toBe("2");
});

it("should multiply two numbers", () => {
  const result = operate("4", "8", "x");
  expect(result).toBe("32");
});

it("should divide two numbers", () => {
  const result = operate("100", "10", "÷");
  expect(result).toBe("10");
});

it("should return a message if the second number is 0", () => {
  const result = operate("5", "0", "÷");
  expect(result).toBe("Can't divide by 0.");
});

it("should return a message if the second number is 0", () => {
  const result = operate("5", "0", "%");
  expect(result).toBe("Can't find modulo as can't divide by 0.");
});

});
