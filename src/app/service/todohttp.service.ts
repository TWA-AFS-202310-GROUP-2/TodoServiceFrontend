import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodohttpService {
  constructor(private httpClient: HttpClient) {}
  items: ToDoItem[] = [];
  url = 'https://localhost:5001/ToDoItem/';
  getAll() {
    return this.httpClient.get<ToDoItem[]>(this.url);
  }

  getItemById(id: number) {
    return this.httpClient.get<ToDoItem>(`${this.url}+${id}`);
  }

  create(title: string, description: string) {
    return this.httpClient.post(this.url, {
      title: title,
      description: description,
      isDone: false,
    });
  }

  delete(id: number) {
    return this.httpClient.delete(`${this.url}+${id}`);
  }

  update(id: number, todoItem: ToDoItem) {
    return this.httpClient.put(`${this.url}+${id}`, todoItem);
  }

  markDone(todoItem: ToDoItem) {
    todoItem.isDone = true;
    return this.httpClient.put(`${this.url}+${todoItem.id}`, todoItem);
  }
}
