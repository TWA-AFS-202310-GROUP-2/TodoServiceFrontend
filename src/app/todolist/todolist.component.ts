import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  items: ToDoItem[] =[]

  constructor(private todoHttpService :TodoHttpService,
    private router: Router) {

  }
  onMarkDone(id: number) {
    this.todoHttpService.markDone(id)
  }
  ngOnInit() {
    this.items = this.todoHttpService.getAll()
  }

  onGoToDetail(id: number){
    this.router.navigateByUrl(`/detail/${id}`)
  }
}
