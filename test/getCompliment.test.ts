import { getCompliment } from "../main";
import { compliments } from "../compliments";
import { expect, test, describe, it } from "bun:test";

describe("getCompliment", () => {
  it("should return a compliment", () => {
    const compliment = getCompliment();
    expect(compliment).toBeDefined();
    expect(typeof compliment).toBe("string");
  });

  it("should return a random compliment from the list", () => {
   
    const compliment = getCompliment();
    expect(compliments).toContain(compliment);
  });
});