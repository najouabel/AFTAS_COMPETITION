import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Ranking} from "../models/interfaces/ranking";
import {catchError, Observable} from "rxjs";
import {ReqRanking} from "../models/interfaces/ReqRanking";

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  private apiUrl = environment.apiUrl;
  private url= `${this.apiUrl}/rankings`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient, private configService: ConfigService) {}


  addRanking(ranking: ReqRanking): Observable<Ranking> {
    return this.http
      .post<Ranking>(this.url, ranking, this.httpOptions)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }

  generateCompetitionRankings(competitionCode: String): Observable<Ranking[]> {
    return this.http
      .get<Ranking[]>(this.url + "/competition/" + competitionCode+'/generate', this.httpOptions)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }



}
