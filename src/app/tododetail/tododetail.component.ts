import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent {
  item: ToDoItem|undefined
  constructor(private activatedRoute: ActivatedRoute,
              private todoService: TodoService){}

  ngOnInit(){
    const id  = this.activatedRoute.snapshot.paramMap.get("detailId")
    //console.log(id)
    this.item = this.todoService.getItemById(Number(id))
  }
}
