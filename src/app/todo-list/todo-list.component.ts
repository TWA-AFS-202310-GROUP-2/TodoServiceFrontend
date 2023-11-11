import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from '../service/todo.service';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  items: ToDoItem[]=[]

  constructor(
    private todoHttpService: TodoHttpService,
    private router: Router
  ){}
  
  ngOnInit()
  {
    //this.items = this.todoService.getAll()
    this.refreshList()
  }

  refreshList()
  {
      this.todoHttpService.getAll().subscribe(todoItems => {
      this.items = todoItems
    })
  }

  onMarkDone(id: number)
  {
    let item = this.items.find(_ => _.id === id)
    if (item)
    {
      item.isDone = true
    }
  }

  onGoToDetail(id: number)
  {
    this.router.navigateByUrl(`/detail/${id}`)
  }

  onDelete(id: number)
  {
    this.todoHttpService.delete(id).subscribe(()=>{
      this.refreshList()
    })
  }
}
