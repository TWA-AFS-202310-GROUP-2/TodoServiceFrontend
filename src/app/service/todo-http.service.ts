import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  constructor(private apiService: ApiService) {}

  getAll(): Observable<ToDoItem[]> {
    return this.apiService.getItems();
  }

  create(title: string, description: string): Observable<ToDoItem> {
    const item = { id: 0, title, description, isDone: false };
    return this.apiService.addItem(item);
  }

  markAsDone(id: number): Observable<ToDoItem> {
    const item = { id, isDone: true } as ToDoItem;
    console.log(item);
    return this.apiService.updateItem(id.toString(), item);
  }

  getItem(id: number): Observable<ToDoItem> {
    return this.apiService.getItemById(id.toString());
  }
}
