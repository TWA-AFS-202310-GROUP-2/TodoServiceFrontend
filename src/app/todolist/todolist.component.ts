import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {
  items: ToDoItem[] =[
    {
      id : 1,
      title : "Good Day",
      description : "ggggg",
      isDone : false
    },
    {
      id : 2,
      title : "Good Day",
      description : "ggggg",
      isDone : false
    },
]
}
