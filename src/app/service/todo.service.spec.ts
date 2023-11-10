import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        id: 1,
        title: 'second',
        description: 'eat dinner',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get all', () => {
    const result = service.getAll();

    expect(service.items).toEqual(result);
  });

  it('should be created', () => {
    service.creatItem('new title', 'new');

    expect(service.items).toEqual([
      {
        id: 1,
        title: 'second',
        description: 'eat dinner',
        isDone: false,
      },
      {
        id: 2,
        title: 'new title',
        description: 'new',
        isDone: false,
      },
    ]);
  });

  it('should be markdone', () => {
    const item = service.getAll()[0];

    service.markDone(item.id);
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'second',
        description: 'eat dinner',
        isDone: true,
      },
    ]);
  });
});
