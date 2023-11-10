import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { combineLatest } from 'rxjs';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all items when call getAll', () => {
    const items = service.getAll();
    expect(items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
    ]);
  });

  it('should create todo when call create', () => {
    service.create('buy apple', 'buy some apple');
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
      {
        id: 2,
        title: 'buy apple',
        description: 'buy some apple',
        isDone: false,
      },
    ]);
  });

  it('should mark isDone as true when call markDone', () => {
    service.markDone(1);
    expect(service.items[0].isDone).toBeTruthy();
  });
});
