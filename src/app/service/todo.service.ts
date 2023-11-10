import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 1,
      title:"buy milk",
      description:"buy some milk",
      isDone: false
    },
    {
      id: 1,
      title:"buy apple",
      description:"buy some apple",
      isDone: false
    },
  ]
  constructor() {}

  getAll(){
    return this.items;
  }
}
