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
      isDone: true,
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

  create(title: string, description: string): void {
    const id = this.items.length + 1;
    const item = { id, title, description, isDone: false };
    this.items.push(item);
  }

  markAsDone(id: number): void {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.isDone = true;
    }
  }

  getItem(id: number): ToDoItem | undefined {
    return this.items.find((item) => item.id === id);
  }

  // markAsUndone(id: number): void {
  //   const item = this.items.find((item) => item.id === id);
  //   if (item) {
  //     item.isDone = false;
  //   }
  // }
}

