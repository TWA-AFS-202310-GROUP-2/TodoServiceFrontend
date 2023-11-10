import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private _todoService: TodoService
  ) {}
  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.description && formValues.title) {
      this._todoService.creatItem(formValues.title, formValues.description);
    }
    this.todoForm.reset();
  }
}
