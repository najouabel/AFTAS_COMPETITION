import {IdentityDocumentType} from "../enums/identity-document-type";
import {Ranking} from "./ranking";

export interface Member {
  num: number;
  name: String;
  familyName?: String;
  accessionDate?: Date;
  nationality?: String;
  identityDocument?: IdentityDocumentType;
  identityNumber?: String;
  rankings?: Ranking[];
}

