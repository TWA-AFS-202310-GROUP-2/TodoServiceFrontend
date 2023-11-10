import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: ToDoItem[] = [
    {
      id: 1,
      title: 'First Item',
      description: 'This is the first item',
      isDone: false
    },
    {
      id: 2,
      title: 'Second Item',
      description: 'This is the second item',
      isDone: false
    },
    {
      id: 3,
      title: 'Third Item',
      description: 'This is the third item',
      isDone: false
    }
  ];
}
