import {Competition} from "./competition";
import {Member} from "./member";

export interface Ranking {
  id: CompetitionMember;
  rank?: Number;
  score?: Number;
  competition?: Competition;
  member?: Member;
}

export interface CompetitionMember {
  competitionCode: String,
  memberNum?: Number
}
