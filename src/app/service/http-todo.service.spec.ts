import { TestBed } from '@angular/core/testing';

import { HttpTodoService } from './http-todo.service';

describe('HttpTodoService', () => {
  let service: HttpTodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpTodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
