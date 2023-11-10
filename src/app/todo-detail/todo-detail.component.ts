import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from '../service/todo.service';
import { ToDoItem } from 'src/model/ToDoItem';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  constructor(
    private routes: ActivatedRoute,
    private todoService: TodoService
  ) {}

  item: ToDoItem | undefined;

  ngOnInit() {
    const id = this.routes.snapshot.paramMap.get('todoId');
    this.item = this.todoService.getItemById(Number(id));
  }
}
