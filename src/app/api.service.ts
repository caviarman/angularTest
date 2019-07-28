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
    return this.httpClient.get<any>(`${this.apiURL}/articles`);
  }
  getArticle(id): Observable<any> {
    return this.httpClient.get<any>(`${this.apiURL}/article/${id}`);
  }
  updateArticle(id, data): Observable<any> {
    return this.httpClient.put<any>(`${this.apiURL}/article/${id}`, JSON.stringify(data));
  }
  createArticle(data): Observable<any> {
    return this.httpClient.post<any>(`${this.apiURL}/article`, JSON.stringify(data));
  }
  deleteArticle(id): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiURL}/article/${id}`);
  }
  register(user): Observable<any> {
    return this.httpClient.post<any>(`${this.apiURL}/register`, JSON.stringify(user))
  }
  
}
