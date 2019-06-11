import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }
  getSome(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/getSome`);
  }
  createArticle(data): Observable<any> {
    console.log('qqqqqqqqqq', JSON.stringify(data));
    return this.httpClient.post<any>(`${this.apiURL}/article/create`, JSON.stringify(data));
  }
  
}
