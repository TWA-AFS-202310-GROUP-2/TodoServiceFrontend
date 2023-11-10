import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
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
}
