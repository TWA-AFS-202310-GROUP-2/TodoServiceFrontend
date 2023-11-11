import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpTodoService } from '../service/http-todo.service';

@Component({
  selector: 'app-create-todolist',
  templateUrl: './create-todolist.component.html',
  styleUrls: ['./create-todolist.component.css'],
})
export class CreateTodolistComponent {
  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpTodoService
  ) {}

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  @Output() create = new EventEmitter();

  onSubmit() {
    const formValues = this.todoForm.value;
    if (formValues.description && formValues.title) {
      this.httpService
        .create(formValues.title, formValues.description)
        .subscribe(() => {
          this.todoForm.reset();
          this.create.emit();
        });
    }
  }
}
