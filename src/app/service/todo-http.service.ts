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
      description: 'What a good day',
      isDone: false,
    },
    {
      id: 2,
      title: 'Good Day',
      description: 'not bad',
      isDone: false,
    },
  ];
  constructor() {}
  getAll() {
    return this.items;
  }
  create(title:string, description: string) {
    this.items.push({
      id: this.items.length+1,
      title: title,
      description: description,
      isDone: false
    })
  }

  markDone(id:number){
    const currentItem = this.items.find(i=>i.id ===id)
    if(currentItem) {
      currentItem.isDone = true
    }
  }
}
