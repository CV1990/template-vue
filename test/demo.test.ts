import { describe, expect, test } from "vitest";

describe("DEMO TEST", () => {
  test("name", () => {
    const demoTxt = "Hello Vitest!";
    expect(demoTxt).toBe("Hello Vitest!");
  });
});
