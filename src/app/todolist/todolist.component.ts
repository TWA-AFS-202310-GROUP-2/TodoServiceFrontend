import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Route, Router } from '@angular/router';
import { HttpTodoService } from '../service/http-todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  items: ToDoItem[] = [];

  constructor(
    private httpService: HttpTodoService,
    private todoService: TodoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.httpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onMarkDone(id: number,item:ToDoItem) {
    this.httpService.markDone(id,item).subscribe((updatedItem) =>this.onRefresh())
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
