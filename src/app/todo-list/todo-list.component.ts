import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
 items:ToDoItem[]=[{
  title:'first',
  id:1,
  description: 'eat lunch',
  isDone: false
 },{
  title:'second',
  id:2,
  description: 'eat dinner',
  isDone: false
 }];
}
