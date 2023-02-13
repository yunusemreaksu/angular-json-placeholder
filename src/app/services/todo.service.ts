import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todosUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<Todo[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const options = {
      headers,
    };

    return this.http.get<Todo[]>(this.todosUrl, options);
  }
}
