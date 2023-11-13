import { Component } from '@angular/core';
import { ToDoItem } from 'src/model/ToDoItem';
import { Router } from '@angular/router';
import { TodoHttpService } from '../service/todo-http.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  items: ToDoItem[] = [];
  constructor(private _httpService: TodoHttpService, private router: Router) {}

  ngOnInit() {
    this.onRefreshList();
  }

  onRefreshList() {
    this._httpService.getAll().subscribe((it) => {
      this.items = it;
    });
  }

  onMarkDone(id: number) {
    //let item: ToDoItem = this.items[id];
    let item = this.items.find((item) => item.id == id);
    if (item) {
      item.isDone = true;
      this._httpService.update(id, item).subscribe();
    }
  }

  onRemove(id: number) {
    this._httpService.delete(id).subscribe(() => this.onRefreshList());
  }

  onGoToDetail(id: number) {
    this.router.navigateByUrl(`detail/${id}`);
  }
}
