import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  
    constructor() { }
  
    ngOnInit(): void {
    }

    getTodoDetail:ToDoItem = {
      id: 1,
      title: 'First Item',
      description: 'This is the first item',
      isDone: false,
    }; 

}
