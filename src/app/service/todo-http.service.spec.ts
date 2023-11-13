import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';
import { ToDoItem } from 'src/model/ToDoItem';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'post',
      'delete',
      'put',
    ]);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should get all items', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([
        {
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        },
      ])
    );

    service.getAll().subscribe((item) => {
      expect(item.length).toEqual(1);
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should create a item', () => {
    httpClientSpy.post.and.returnValue(
      asyncData([
        {
          id: 1,
          title: '1',
          description: '111',
          isDone: false,
        },
      ])
    );

    service.create('new', 'new').subscribe();

    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should delete a item', () => {
    httpClientSpy.delete.and.returnValue(asyncData(['204 Not Content']));

    service.delete(0);

    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });

  it('should put a item', () => {
    const item: ToDoItem = {
      id: 1,
      title: '1',
      description: '1',
      isDone: false,
    };
    httpClientSpy.put.and.returnValue(
      asyncData({
        id: 1,
        title: '1',
        description: 'evening',
        isDone: false,
      })
    );
    item.description = 'evening';

    service.update(1, item).subscribe((ite) => {
      expect(ite).toEqual({
        id: 1,
        title: '1',
        description: 'evening',
        isDone: false,
      });
    });

    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should get an item', () => {
    httpClientSpy.get.and.returnValue(
      asyncData({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service.getItemById(0).subscribe((item) => {
      expect(item).toEqual({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      });
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });
});
