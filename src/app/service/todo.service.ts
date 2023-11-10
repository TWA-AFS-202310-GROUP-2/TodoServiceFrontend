import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    {
      title: 'first',
      id: 1,
      description: 'eat lunch',
      isDone: false,
    },
    {
      title: 'second',
      id: 2,
      description: 'eat dinner',
      isDone: false,
    },
  ];
  constructor() {}
  getAll() {
    return this.items;
  }
}
