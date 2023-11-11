import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  item: ToDoItem | undefined
  constructor(
    private activatedRouter: ActivatedRoute,
    private todoHttpService: TodoHttpService,
    private formBuilder: FormBuilder){}
  
  todoForm = this.formBuilder.group(
  {
    title: '',
    description: ''
  })
  
  ngOnInit()
  {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId')
    this.todoHttpService.getItemById(Number(id)).subscribe((item)=>{
      this.item = item
      this.todoForm.setValue({
        title: item.title,
        description: item.description
      })
    })
  }

  OnSave()
  {
    const formValues = this.todoForm.value
    if (formValues.title && formValues.description && this.item)
    this.todoHttpService.updateItem(
      {
        id: this.item.id,
        title: formValues.title,
        description: formValues.description,
        isDone: this.item.isDone
      }
    ).subscribe()
  }
}
