import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { HttpTodoService } from '../service/http-todo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css'],
})
export class TododetailComponent {
  item: ToDoItem | undefined;
  todoDetailForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpTodoService
  ) {}

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('detailId');
    //console.log(id)
    this.httpService.getItemById(Number(id)).subscribe((itemById) => {
      this.item = itemById;
      this.initializeForm();
    });
  }

  initializeForm() {
    this.todoDetailForm = this.formBuilder.group({
      id: [this.item?.id, Validators.required],
      title: [this.item?.title, Validators.required],
      description: [this.item?.description, Validators.required],
      isDone: [this.item?.isDone],
    });
  }

  onSubmit() {
    if (this.todoDetailForm.valid && this.item) {
      const updatedItem: ToDoItem = this.todoDetailForm.value;
      this.httpService.update(this.item.id, updatedItem).subscribe((data) => {
        this.item = data;
      });
    }
  }
}
