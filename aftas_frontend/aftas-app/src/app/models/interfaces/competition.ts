import {Ranking} from "./ranking";
import {Hunting} from "./hunting";

export interface Competition {
  code?: String;
  date?: Date;
  startTime?: String;
  endTime?: String;
  numberOfParticipants?: Number;
  location?: String;
  amount?: Number;
  rankings?:Ranking[];
  huntings?:Hunting[];

}
