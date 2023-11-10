import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  items: ToDoItem[] = [
    {
      id: 1,
      title: 'First Item',
      description: 'This is the first item',
      isDone: false,
    },
    {
      id: 2,
      title: 'Second Item',
      description: 'This is the second item',
      isDone: false,
    },
    {
      id: 3,
      title: 'Third Item',
      description: 'This is the third item',
      isDone: false,
    },
  ];

  getAll(): ToDoItem[] {
    return this.items;
  }
}
