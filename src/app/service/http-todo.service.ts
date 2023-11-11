import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class HttpTodoService {
  constructor(private http: HttpClient) {}

  url = 'https://localhost:44309/ToDoItems';
  getAll() {
    return this.http.get<ToDoItem[]>(this.url);
  }

  markDone(id: number, todoItem :ToDoItem) {
    const urlWithId =`${this.url}/${id}`;
    return this.http.put<ToDoItem>(urlWithId,todoItem);
  }

  create(title: string, description: string) {
    return this.http.post('https://localhost:44309/ToDoItems', {
      title: title,
      description: description,
      isDone: false,
    });
  }

  getItemById(id:number){
    const urlWithId =`${this.url}/${id}`;
    return this.http.get(urlWithId)
  }
}
