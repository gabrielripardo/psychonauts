import { PsyPowers } from "./psyPowers.model";

export interface Psychonaut {
  gender: string;
  img: string;
  _id: string;
  name: string;
  psiPowers: Array<PsyPowers>;
}
