import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from '../service/todo.service';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent {
  item: ToDoItem|undefined
  constructor(private activatedRoute: ActivatedRoute,
              private todoHttpService: TodoHttpService){}

  ngOnInit(){
    const id  = this.activatedRoute.snapshot.paramMap.get("detailId")
    //console.log(id)
    this.item = this.todoHttpService.getItemById(Number(id))
  }
}
