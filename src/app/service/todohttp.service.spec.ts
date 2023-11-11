import { TestBed } from '@angular/core/testing';

import { TodohttpService } from './todohttp.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('TodohttpService', () => {
  let service: TodohttpService;
  let HttpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    HttpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'put',
      'post',
      'delete',
    ]);
    service = new TodohttpService(HttpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todos when call getAll', () => {
    HttpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        },
      ])
    );

    service.getAll().subscribe((data) => {
      expect(data.length).toEqual(1);
    });

    expect(HttpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should get item by id when call getItemById', () => {
    const mockItem: ToDoItem = {
      id: 1,
      title: 'Item 1',
      description: 'Description 1',
      isDone: false,
    };
    HttpClientSpy.get.and.returnValue(asyncData(mockItem));
    service.getItemById(1).subscribe((data) => {
      expect(data).toEqual(mockItem);
    });
    expect(HttpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should delete todo by id when call delete', () => {
    HttpClientSpy.delete.and.returnValue(asyncData({}));

    service.delete(0).subscribe();
    expect(HttpClientSpy.delete.calls.count()).toEqual(1);
  });

  it('should update todo by id when call update', () => {
    const todoUpdate: ToDoItem = {
      id: 0,
      title: 'Home work 00',
      description: 'Have to complete home work',
      isDone: false,
    };
    HttpClientSpy.put.and.returnValue(asyncData(todoUpdate));

    service.update(0, todoUpdate).subscribe((data) => {
      expect(data).toEqual(todoUpdate);
    });

    expect(HttpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should create a new todo item', () => {
    const todoPost: ToDoItem = {
      id: 1,
      title: 'buy apple',
      description: 'Have to buy apple',
      isDone: false,
    };
    HttpClientSpy.post.and.returnValue(asyncData(todoPost));
    service.create('buy apple', 'Have to buy apple').subscribe((data) => {
      expect(data).toEqual(todoPost);
    });

    expect(HttpClientSpy.post.calls.count()).toEqual(1);
  });
  it('should mark todo as done when call markDone', () => {
    const todoUpdate: ToDoItem = {
      id: 0,
      title: 'Home work 00',
      description: 'Have to complete home work',
      isDone: true,
    };
    HttpClientSpy.put.and.returnValue(asyncData(todoUpdate));

    todoUpdate.isDone = false;
    service.markDone(todoUpdate).subscribe((data) => {
      expect(data).toEqual(todoUpdate);
    });

    expect(HttpClientSpy.put.calls.count()).toEqual(1);
  });
});
