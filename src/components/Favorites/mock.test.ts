import { getNextId, savePsychonaut } from "./StorageFarorite";
import { psychonautExample } from "./mock";

test("nextId is equal 0", () => {
  expect(getNextId()).toBe(0);
});

test("save on the local storage", () => {
  expect(savePsychonaut(psychonautExample)).toBe(true);
});
