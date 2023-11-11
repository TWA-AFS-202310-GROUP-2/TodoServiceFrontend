import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem = {
    id: 0,
    title: '',
    description: '',
    isDone: false,
  };
  constructor(
    private activatedRoute: ActivatedRoute,
    private _service: TodoHttpService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('detailId');
    console.log(id);
    this._service
      .getItemById(Number(id))
      .subscribe((item) => (this.item = item));
  }
}
