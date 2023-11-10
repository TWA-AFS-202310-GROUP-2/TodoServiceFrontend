import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TodohttpService } from '../service/todohttp.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  constructor(
    private todoService: TodoService,
    private router: Router,
    private todoHttp: TodohttpService
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.todoHttp.getAll().subscribe((data) => {
      this.items = data;
    });
  }

  onDone(id: number) {
    this.todoService.markDone(id);
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
