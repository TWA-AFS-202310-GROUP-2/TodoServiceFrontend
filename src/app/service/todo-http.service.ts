import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoHttpService {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'Good Day',
      description: 'ggggg',
      isDone: false,
    },
    {
      id: 2,
      title: 'Good Day',
      description: 'ggggg',
      isDone: false,
    },
  ];
  constructor() {}
  getAll() {
    return this.items;
  }
}
