import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';

describe('TodoHttpService', () => {
  let service: TodoHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoHttpService);
    service.items = [
      {
        id: 1,
        title: "monday",
        description: "bad day",
        isDone: false,
      }
    ]
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when getAll', ()=>{
    const items = service.getAll()
    expect(items).toEqual([
      {
        id: 1,
        title: "monday",
        description: "bad day",
        isDone: false,
      }
    ])
  });
});
