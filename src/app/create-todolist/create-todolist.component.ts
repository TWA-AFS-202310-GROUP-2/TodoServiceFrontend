import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-todolist',
  templateUrl: './create-todolist.component.html',
  styleUrls: ['./create-todolist.component.css']
})
export class CreateTodolistComponent {
  constructor(private formBuilder : FormBuilder){}

  todoForm = this.formBuilder.group({
    title:'',
    description:''
  })

  onSubmit(){
    const formValues  = this.todoForm.value

    console.log(formValues)
  }
}
