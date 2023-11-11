import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  constructor(
    private _todoService: TodoService,
    private _httpService: TodoHttpService,
    private router: Router
  ) {}

  ngOnInit() {
    this.onRefreshList();
  }

  onRefreshList() {
    this._httpService.getAll().subscribe((it) => {
      this.items = it;
    });
  }
  onMarkDone(id: number) {
    this._todoService.markDone(id);
  }
  onGoToDetail(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
