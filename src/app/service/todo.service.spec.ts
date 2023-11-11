import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { ReactiveFormsModule } from '@angular/forms';

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

  it('should create one item when call create', () => {
    service.create('buy bread', 'buy some bread');
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: false,
      },
      {
        id: 2,
        title: 'buy bread',
        description: 'buy some bread',
        isDone: false,
      },
    ]);
  });

  it('should markdown one item when call markdown', () => {
    service.markDone(1);
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'buy milk',
        description: 'buy some milk',
        isDone: true,
      },
    ]);
  });
});
