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
}
