import {Member} from "./member";
import {Competition} from "./competition";
import {Fish} from "./fish";

export interface Hunting {
  id?: number;
  numberOfFish?: number;
  fish?: Fish;
  competition?: Competition;
  member?: Member;
  member_code?: number;
  competition_code?: string;
  fish_name?: string;
}
