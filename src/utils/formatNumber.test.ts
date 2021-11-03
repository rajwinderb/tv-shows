import { formatNumber } from "./formatNumber";

test("format number turns single digit to two digits", () => {
  expect(formatNumber(1)).toBe("01");
  expect(formatNumber(2)).toBe("02");
});

test("format number keeps double digits the same", () => {
  expect(formatNumber(11)).toBe("11");
  expect(formatNumber(21)).toBe("21");
});
