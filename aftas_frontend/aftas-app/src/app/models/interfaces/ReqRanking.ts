import {CompetitionMember} from "./ranking";

export interface ReqRanking {
  id: {
    competitionCode?: string;
    memberNum?: number;
  }
}
