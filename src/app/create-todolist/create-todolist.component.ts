import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TodoHttpService } from '../service/todo.service';
import { HttpTodoService } from '../service/http-todo.service';

@Component({
  selector: 'app-create-todolist',
  templateUrl: './create-todolist.component.html',
  styleUrls: ['./create-todolist.component.css']
})
export class CreateTodolistComponent {
  constructor(private formBuilder : FormBuilder,
              private todoService : TodoHttpService,
              private httpService :HttpTodoService){}

  todoForm = this.formBuilder.group({
    title:'',
    description:''
  })

  onSubmit(){
    const formValues  = this.todoForm.value
    if (formValues.description && formValues.title){
      this.httpService.create(formValues.title,formValues.description).subscribe(()=>
      {this.todoForm.reset()})
      
    }
  }
}
