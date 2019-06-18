import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }
  getArticles(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/getArticles`);
  }
  getArticle(id): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/article/${id}`);
  }
  createArticle(data): Observable<any> {
    return this.httpClient.post<any>(`${this.apiURL}/article/create`, JSON.stringify(data));
  }
  
}
