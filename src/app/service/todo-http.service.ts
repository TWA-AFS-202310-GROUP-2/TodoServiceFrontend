import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  ip = 'https://localhost:44309/ToDoItems/';
  constructor(private _httpClient: HttpClient) {}
  getAll() {
    return this._httpClient.get<ToDoItem[]>(this.ip);
  }

  create(title: string, description: string) {
    return this._httpClient.post(this.ip, {
      title: title,
      description: description,
      isDone: false,
    });
  }

  delete(id: number) {
    return this._httpClient.delete<ToDoItem>(this.ip + id);
  }

  update(id: number, todoItem: ToDoItem) {
    return this._httpClient.put<ToDoItem>(this.ip + id, todoItem);
  }

  getItemById(id: number) {
    return this._httpClient.get<ToDoItem>(this.ip + id);
  }
}
