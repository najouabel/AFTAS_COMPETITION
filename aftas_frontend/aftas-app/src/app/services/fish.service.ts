import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigService} from "../config/config.service";
import {Fish} from "../models/interfaces/fish";
import {catchError, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FishService {


  private apiUrl = environment.apiUrl;
  private url= `${this.apiUrl}/fishes`;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
  };
  constructor(private http: HttpClient, private configService: ConfigService) {}

  getFishes(): Observable<Fish[]> {
    return this.http
      .get<Fish[]>(`${this.url}`)
      .pipe(catchError((error) => this.configService.handleError(error)));
  }
}
