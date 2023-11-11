import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get<ToDoItem[]>('https://localhost:44309/ToDoItem');
  }

  create(title: string, description: string) {
    return this.httpClient.post('https://localhost:44309/ToDoItem', {
      title: title,
      description: description,
      isDone: false,
    });
  }

  delete(id: number) {
    return this.httpClient.delete('https://localhost:44309/ToDoItem/' + id);
  }

  markDone(id: number, title: string, description: string) {
    return this.httpClient.put('https://localhost:44309/ToDoItem/' + id, {
      title: title,
      description: description,
      isDone: true,
    });
  }

  edit(id: number, title: string, description: string, isDone: boolean) {
    return this.httpClient.put('https://localhost:44309/ToDoItem/' + id, {
      title: title,
      description: description,
      isDone: isDone,
    });
  }
}
