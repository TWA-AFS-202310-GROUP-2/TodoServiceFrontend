import { Injectable } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'first',
      description: 'eat lunch',
      isDone: false,
    },
    {
      id: 2,
      title: 'second',
      description: 'eat dinner',
      isDone: false,
    },
  ];
  constructor() {}
  getAll() {
    return this.items;
  }
  creatItem(title: string, description: string) {
    this.items.push({
      id: this.items.length + 1,
      title: title,
      description: description,
      isDone: false,
    });
  }
  markDone(id: number) {
    const currentItem = this.items.find((_item) => _item.id === id);
    if (currentItem) {
      currentItem.isDone = true;
    }
  }
  getItemById(id: number) {
    return this.items.find((_item) => _item.id === id);
  }
}
