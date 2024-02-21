import assert from "node:assert/strict";
import { describe, it } from "node:test";

describe("testMultiplication", () => {
  it("should multiply the amount with the multiplyer", () => {
    const amount = 5;
    const multiplier = 2;
    const multiplication = multiply(amount, multiplier);
    assert.equal(10, multiplication);
  });
});

export const multiply = (amount: number, multiplier: number) => {
  return amount * multiplier;
};
