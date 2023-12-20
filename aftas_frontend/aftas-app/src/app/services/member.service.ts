import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Member} from "../models/interfaces/member";
import {catchError, Observable} from "rxjs";
import {Competition} from "../models/interfaces/competition";

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = environment.apiUrl;
  private url= `${this.apiUrl}/members`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getMembers(): Observable<Member[]> {
    return this.http
      .get<Member[]>(this.url, this.httpOptions)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }

  addmember(memberData: Member): Observable<Member> {
    return this.http.post<Member>(`${this.url}`, memberData,  this.httpOptions)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }

}
