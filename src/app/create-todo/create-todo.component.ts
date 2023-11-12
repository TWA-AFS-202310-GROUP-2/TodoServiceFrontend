import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from 'src/app/service/todo-http.service';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css'],
})
export class CreateTodoComponent {
  constructor(private formBuilder: FormBuilder, private todoService: TodoHttpService) {}
  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });
  
  @Output() created = new EventEmitter<void>();

  onSubmit(): void {
    const formValues = this.todoForm.value;
    if (formValues.title && formValues.description) {
      this.todoService.create(formValues.title, formValues.description).subscribe(
        () => {
          this.created.emit();
          this.todoForm.reset();
        }
      );
    }
  }
}
