import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { defer } from 'rxjs';

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
      'put',
      'delete',
    ]);
    service = new TodoHttpService(httpClientSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all todo items when call getAll', () => {
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

    service.getAll().subscribe((data) => expect(data.length).toEqual(1));

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });

  it('should markdown one item when call markDown', () => {
    httpClientSpy.put.and.returnValue(
      asyncData({
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: true,
      })
    );

    service
      .markDone(0, 'Home work', 'Have to complete home work')
      .subscribe((data) => {
        expect(data).toEqual({
          id: 0,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: true,
        });
      });

    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should create one item when call create', () => {
    httpClientSpy.post.and.returnValue(
      asyncData({
        id: 1,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service
      .create('Home work', 'Have to complete home work')
      .subscribe((data) => {
        expect(data).toEqual({
          id: 1,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        });
      });

    expect(httpClientSpy.post.calls.count()).toEqual(1);
  });

  it('should delete one item when call delete', () => {
    httpClientSpy.delete.and.returnValue(
      asyncData({
        id: 1,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service.delete(1).subscribe((data) => {
      expect(data).toEqual({
        id: 1,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      });
    });

    expect(httpClientSpy.delete.calls.count()).toEqual(1);
  });

  it('should update one item when call edit', () => {
    httpClientSpy.put.and.returnValue(
      asyncData({
        id: 1,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service
      .edit(1, 'Home work', 'Have to complete home work', false)
      .subscribe((data) => {
        expect(data).toEqual({
          id: 1,
          title: 'Home work',
          description: 'Have to complete home work',
          isDone: false,
        });
      });

    expect(httpClientSpy.put.calls.count()).toEqual(1);
  });

  it('should get one item when call getItemById', () => {
    httpClientSpy.get.and.returnValue(
      asyncData({
        id: 1,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      })
    );

    service.getItemById(1).subscribe((data) => {
      expect(data).toEqual({
        id: 1,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false,
      });
    });

    expect(httpClientSpy.get.calls.count()).toEqual(1);
  });
});
