import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = "http://localhost:5029/api/list"

  constructor(private http: HttpClient) { }

  getTodos(): Observable<string[]> {
    return this.http.get<string[]>(this.apiUrl)
  }

  addTodo(item: string): Observable<string>{
    return this.http.post<string>(this.apiUrl, {item})
  }
}
