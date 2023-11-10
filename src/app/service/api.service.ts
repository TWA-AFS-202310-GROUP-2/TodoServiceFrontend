import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://localhost:5001/ToDoItems';  // 更改为你的后端API地址

  constructor(private http: HttpClient) { }

  // 获取所有items
  getItems(): Observable<ToDoItem[]> {
    return this.http.get<ToDoItem[]>(`${this.apiUrl}`);
  }

  // 根据ID获取item
  getItemById(id: string): Observable<ToDoItem> {
    return this.http.get<ToDoItem>(`${this.apiUrl}/${id}`);
  }

  // 添加新item
  addItem(item: ToDoItem): Observable<ToDoItem> {
    return this.http.post<ToDoItem>(`${this.apiUrl}`, item);
  }

  // 更新item
  updateItem(id: string, item: ToDoItem): Observable<ToDoItem> {
    return this.http.put<ToDoItem>(`${this.apiUrl}/${id}`, item);
  }

  // 删除item
  deleteItem(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
