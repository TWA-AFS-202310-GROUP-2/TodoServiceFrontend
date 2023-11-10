import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo.service';

@Component({
  selector: 'app-create-todolist',
  templateUrl: './create-todolist.component.html',
  styleUrls: ['./create-todolist.component.css']
})
export class CreateTodolistComponent {
  constructor(private formBuilder : FormBuilder,
              private todoService : TodoHttpService){}

  todoForm = this.formBuilder.group({
    title:'',
    description:''
  })

  onSubmit(){
    const formValues  = this.todoForm.value
    if (formValues.description && formValues.title){
      this.todoService.create(formValues.title,formValues.description)
      this.todoForm.reset()
    }
  }
}
