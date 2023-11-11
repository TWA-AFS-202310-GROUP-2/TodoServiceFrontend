import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodohttpService } from '../service/todohttp.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  constructor(
    private routes: ActivatedRoute,
    private todoHttp: TodohttpService,
    private formGroup: FormBuilder,
    private router: Router
  ) {}

  item!: ToDoItem;
  detailForm = this.formGroup.group({
    id: [
      {
        value: '',
        disabled: true,
      },
    ],
    title: '',
    description: '',
    isDone: [
      {
        value: '',
        disabled: true,
      },
    ],
  });

  ngOnInit() {
    const id = this.routes.snapshot.paramMap.get('todoId');
    this.todoHttp.getItemById(Number(id)).subscribe((todo) => {
      this.item = todo;
      this.detailForm.setValue({
        id: `${this.item.id}`,
        title: this.item.title,
        description: this.item.description,
        isDone: `${this.item.isDone}`,
      });
    });
  }

  onSubmit() {
    const todoUpdate: ToDoItem = {
      id: this.item.id,
      title: this.detailForm.value.title!,
      description: this.detailForm.value.description!,
      isDone: this.item.isDone,
    };
    this.todoHttp.update(todoUpdate.id, todoUpdate).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
