import { TestBed } from '@angular/core/testing';

import { TodohttpService } from './todohttp.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
describe('TodohttpService', () => {
  let service: TodohttpService;
  let HttpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
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

  it('should delete todo by id when call delete', () => {
    HttpClientSpy.delete.and.returnValue(asyncData({}));

    service.delete(0).subscribe();
    expect(HttpClientSpy.delete.calls.count()).toEqual(1);
  });
});
