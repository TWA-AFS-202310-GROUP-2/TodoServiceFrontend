import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

    items: ToDoItem[] = [];
      
    constructor(private httpClient: HttpClient) { }
}
