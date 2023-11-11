import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { TodoHttpService } from '../service/todo-http.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css'],
})
export class TodoDetailComponent {
  item: ToDoItem | undefined;
  isEditTitle = false;
  isEditDescription = false;
  titleForm = this.formBuilder.group({ title: '' });
  descriptionForm = this.formBuilder.group({ description: '' });

  constructor(
    private activatedRouter: ActivatedRoute,
    private todoService: TodoService,
    private todoHttpService: TodoHttpService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    const id = this.activatedRouter.snapshot.paramMap.get('detailId');
    if (id) {
      this.getItemDetail(Number(id));
    }
  }

  getItemDetail(id: number) {
    this.todoHttpService.getItemById(Number(id)).subscribe((todoItem) => {
      this.item = todoItem;
      this.titleForm.setValue({ title: this.item.title });
      this.descriptionForm.setValue({ description: this.item.description });
    });
  }

  editTitle() {
    this.isEditTitle = !this.isEditTitle;
  }

  editDescription() {
    this.isEditDescription = !this.isEditDescription;
  }

  onSubmitTitle(id: number, description: string, isDone: boolean) {
    const formValues = this.titleForm.value;

    if (formValues.title) {
      this.todoHttpService
        .edit(id, formValues.title, description, isDone)
        .subscribe(() => {
          this.getItemDetail(id);
          this.isEditTitle = !this.isEditTitle;
        });
    }
  }

  onSubmitDescription(id: number, title: string, isDone: boolean) {
    const formValues = this.descriptionForm.value;

    if (formValues.description) {
      this.todoHttpService
        .edit(id, title, formValues.description, isDone)
        .subscribe(() => {
          this.getItemDetail(id);
          this.isEditDescription = !this.isEditDescription;
        });
    }
  }
}
