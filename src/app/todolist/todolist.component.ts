import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo.service';
import { Route, Router } from '@angular/router';
import { HttpTodoService } from '../service/http-todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  items: ToDoItem[] =[]

  constructor(private httpService :HttpTodoService,
    private todoHttpService :TodoHttpService,
    private router: Router) {

  }
  onMarkDone(id: number) {
    this.todoHttpService.markDone(id)
  }
  ngOnInit() {
    this.httpService.getAll().subscribe(todoItems => {
      this.items = todoItems
    })

  }

  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }
}
