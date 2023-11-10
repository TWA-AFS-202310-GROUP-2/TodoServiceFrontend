import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http"
import { ToDoItem } from 'src/model/ToDoItem';

@Injectable({
  providedIn: 'root'
})
export class HttpTodoService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ToDoItem[]>("https://localhost:44309/ToDoItems")
  }

  create(title:string,description:string)
  {
  return this.http.post("https://localhost:44309/ToDoItems",{
    title:title,
    description: description,
    isDone: false
  })
}}
