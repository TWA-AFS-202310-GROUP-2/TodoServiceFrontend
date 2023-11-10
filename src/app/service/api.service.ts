import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:44309/ToDoItems';

  constructor(private http: HttpClient) { }

  getItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(`${this.apiUrl}`);
  }

  getItemById(id: string): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.apiUrl}/${id}`);
  }

  addItem(item: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(`${this.apiUrl}`, item);
  }

  updateItem(id: string, item: ToDoItem): Observable<ToDoItem> {
    return this.http.put<ToDoItem>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
