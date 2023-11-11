import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  @Output() Created = new EventEmitter();
  constructor(
    private formBuilder: FormBuilder,
    private _todoService: TodoService,
    private _httpService: TodoHttpService
  ) {}
  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.description && formValues.title) {
      this._httpService
        .create(formValues.title, formValues.description)
        .subscribe(() => {
          this.todoForm.reset();
          this.Created.emit();
        });
    }
  }
}
