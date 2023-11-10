import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { ActivatedRoute } from '@angular/router';
import { identifierName } from '@angular/compiler';
import { TodoHttpService } from 'src/app/service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  todoItem: ToDoItem | undefined;
  constructor(
    private todoService: TodoHttpService,
    private ActivatedRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.todoService.getItem(Number(id)).subscribe((item) => {
      this.todoItem = item;
    });
  }
}
