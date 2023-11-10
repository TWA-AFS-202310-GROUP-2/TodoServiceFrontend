import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'buy milk',
      description: 'buy milk today',
      isDone: false
    },
    {
      id: 2,
      title: 'buy fruit',
      description: 'buy some fruits',
      isDone: false
    }
  ]
  constructor() { }

  getAll()
  {
    return this.items
  }
}
