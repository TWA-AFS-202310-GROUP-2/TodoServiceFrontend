import { TestBed } from '@angular/core/testing';
import { HttpTodoService } from './http-todo.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

describe('HttpTodoService', () => {
  let service: HttpTodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  const fakeItem: ToDoItem = {
    id: 0,
    title: 'new',
    description: 'test',
    isDone: false,
  };
  const updatedItem: ToDoItem = {
    id: 0,
    title: 'new1',
    description: 'test1',
    isDone: true,
  };

  const createdItem: ToDoItem = {
    id: 1,
    title: 'new2',
    description: 'test creating',
    isDone: false,
  };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    //service = TestBed.inject(TodoHttpService);
    service = new HttpTodoService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all when call getAll', () => {
    httpClientSpy.get.and.returnValue(asyncData([fakeItem]));
    service.getAll().subscribe(data =>
      expect(data.length).toEqual(1));
  });

  it('should return updated item when call update', () => {
    httpClientSpy.put.and.returnValue(asyncData(updatedItem));
    service.update(0, updatedItem).subscribe((data) => {
      expect(data.id).toEqual(0),
        expect(data.isDone).toEqual(updatedItem.isDone),
        expect(data.title).toEqual(updatedItem.title),
        expect(data.description).toEqual(updatedItem.description);
    });

    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should return one item when call getItemById', () => {
    httpClientSpy.get.and.returnValue(asyncData(fakeItem));
    service.getItemById(0).subscribe((data) => {
      expect(data.id).toEqual(0),
        expect(data.isDone).toEqual(fakeItem.isDone),
        expect(data.title).toEqual(fakeItem.title),
        expect(data.description).toEqual(fakeItem.description);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should create one item when call creat ', () => {
    httpClientSpy.post.and.returnValue(asyncData(createdItem));
    service.create('new2', 'test creating').subscribe((data) => {
      expect(data.id).toEqual(createdItem.id),
        expect(data.title).toEqual(createdItem.title),
        expect(data.description).toEqual(createdItem.description),
        expect(data.isDone).toEqual(createdItem.isDone);
    });

    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should delete one item when call delete ', () => {
    httpClientSpy.delete.and.returnValue(asyncData(fakeItem));
    service.deleteItem(0).subscribe();

    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });
});
