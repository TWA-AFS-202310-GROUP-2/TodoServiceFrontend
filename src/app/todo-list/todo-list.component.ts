import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { TodoHttpService } from 'src/app/service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  constructor(private todoService: TodoHttpService) {}
  ngOnInit() {
    this.todoService.getAll().subscribe((items) => {
      this.items = items;
    });
  }
  items: ToDoItem[] = [];
  onMarkAsDone(id: number): void {
    this.todoService.markAsDone(id).subscribe(
      () => this.refresh()
    );
  }

  onDelete(id: number): void {
    this.todoService.deleteItem(id).subscribe(
      () => this.refresh()
    );
  }

  refresh(): void {
    this.todoService.getAll().subscribe((items) => {
      this.items = items;
    });
  }
}
