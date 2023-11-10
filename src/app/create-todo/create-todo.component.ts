import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoService } from '../service/todo.service';
import { TodohttpService } from '../service/todohttp.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(
    private formBuilder: FormBuilder,
    private todoService: TodoService,
    private todoHttp: TodohttpService
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  @Output() created = new EventEmitter();

  onSubmit() {
    const formValues = this.todoForm.value;
    console.log(formValues);
    if (formValues.title && formValues.description) {
      this.todoHttp
        .create(formValues.title, formValues.description)
        .subscribe(() => {
          this.todoForm.reset();
          this.created.emit();
        });
    }
  }
}
