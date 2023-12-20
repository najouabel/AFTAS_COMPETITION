import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Hunting} from "../models/interfaces/hunting";
import {catchError, Observable} from "rxjs";
import {ConfigService} from "../config/config.service";

@Injectable({
  providedIn: 'root'
})
export class HuntingService {

  private apiUrl = environment.apiUrl;
  private url= `${this.apiUrl}/hunting`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient, private configService: ConfigService) {}

  addHunting(hunting: any): Observable<Hunting> {
    return this.http
      .post(`${this.url}`, hunting, this.httpOptions)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }
}
