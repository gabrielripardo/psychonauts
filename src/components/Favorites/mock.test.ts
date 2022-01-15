import { savePsychonaut } from "./StorageFarorite";
import { psychonautExample } from "./mock";

test("save on the local storage", () => {
  expect(savePsychonaut(psychonautExample)).toBe(true);
});
