import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable} from "rxjs";
import {Competition} from "../models/interfaces/competition";
import {environment} from "../../environments/environment";
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {

  private apiUrl = environment.apiUrl;
  private url= `${this.apiUrl}/competitions`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };

  constructor(private http:HttpClient,private configService: ConfigService) { }

  getAllCompetitions(): Observable<Competition[]> {
    return this.http.get<Competition[]>(`${this.url}/all`, this.httpOptions)
    .pipe(catchError((error) => this.configService.handleError(error)));
  }
  addCompetition(competitionData: Competition): Observable<Competition> {
    return this.http.post<Competition>(`${this.url}`, competitionData,  this.httpOptions)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }







}
