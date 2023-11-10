import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from 'src/app/service/todo.service';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  todoItem: ToDoItem | undefined;
  constructor(
    private todoService: TodoService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.todoItem = this.todoService.getItem(Number(id));
  }
}
