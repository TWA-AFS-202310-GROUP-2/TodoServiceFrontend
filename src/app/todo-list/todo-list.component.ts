import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private todoService: TodoService) {}
  ngOnInit() {}
  items: ToDoItem[] = this.todoService.getAll();
  onMarkAsDone(id: number): void {
    this.todoService.markAsDone(id);
  }
  // onMarkAsUndone(id: number): void {
  //   this.todoService.markAsUndone(id);
  // }
}
