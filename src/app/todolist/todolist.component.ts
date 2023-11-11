import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Route, Router } from '@angular/router';
import { HttpTodoService } from '../service/http-todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css'],
})
export class TodolistComponent {
  items: ToDoItem[] = [];

  constructor(private httpService: HttpTodoService, private router: Router) {}

  ngOnInit() {
    this.onRefresh();
  }
  onRefresh() {
    this.httpService.getAll().subscribe((todoItems) => {
      this.items = todoItems;
    });
  }

  onMarkDone(id: number, item: ToDoItem) {
    this.httpService
      .update(id, item)
      .subscribe((updatedItem) => this.onRefresh());
  }

  OnDelete(id: number) {
    this.httpService
      .deleteItem(id)
      .subscribe((deletedItem) => this.onRefresh());
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`/detail/${id}`);
  }
}
