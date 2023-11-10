import { TestBed } from '@angular/core/testing';

import { HttpTodoService } from './http-todo.service';
import { HttpBackend, HttpClient, JsonpClientBackend } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data: T){
  return defer(() => Promise.resolve(data))
}

describe('HttpTodoService', () => {
  let service: HttpTodoService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get'])
    service = TestBed.inject(HttpTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it( 'should get all when call getAll', () => {
    httpClientSpy.get.and.returnValue(asyncData([
      {
        "id": 0,
        "title": "Home work",
        "description": "Have to complete home work",
        "isDone": false
      }
    ]))
    service.getAll().subscribe(data =>{
      expect(data.length).toEqual(1)
    })

    expect(httpClientSpy.get.calls.count()).toEqual(1)
  })

});
