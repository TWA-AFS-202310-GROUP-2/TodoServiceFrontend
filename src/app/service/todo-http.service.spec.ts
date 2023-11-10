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

  it('should get all items including new item when create', ()=>{
    const items = service.create("Tuesday","just so so")
    expect(service.items).toEqual([
      {
        id: 1,
        title: "monday",
        description: "bad day",
        isDone: false,
      },
      {
        id: 2,
        title: "Tuesday",
        description: "just so so",
        isDone: false,
      }
    ])
  });

  it('should get markdone items when markdone', ()=>{
    const items = service.markDone(1)
    expect(service.items).toEqual([
      {
        id: 1,
        title: "monday",
        description: "bad day",
        isDone: true,
      }
    ])
  });

});
