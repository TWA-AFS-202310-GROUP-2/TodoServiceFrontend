import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem = {
    id: 0,
    title: '',
    description: '',
    isDone: false,
  };

  todoForm = this.formBuilder.group({
    title: '',
    description: '',
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _service: TodoHttpService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('detailId');
    console.log(id);
    this._service.getItemById(Number(id)).subscribe((item) => {
      this.item = item;
      this.todoForm.setValue({
        description: this.item.description,
        title: this.item.title,
      });
    });
  }

  onUpdateSubmit() {
    const id = this.activatedRoute.snapshot.paramMap.get('detailId');
    // If use set 'value=item.value' in Html input, the right should be below:
    // if (id && (this.todoForm.value.description || this.todoForm.value.title)) {
    //   if (this.todoForm.value.description) {
    //     this.item.description = this.todoForm.value.description;
    //   }
    //   if (this.todoForm.value.title) {
    //     this.item.title = this.todoForm.value.title;
    //   }
    if (id && this.todoForm.value.description && this.todoForm.value.title) {
      this.item.description = this.todoForm.value.description;
      this.item.title = this.todoForm.value.title;
      this._service.update(Number(id), this.item).subscribe();
    }
  }
}
