import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
    service.items = [
      {
        title: 'second',
        id: 1,
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
        title: 'second',
        id: 1,
        description: 'eat dinner',
        isDone: false,
      },
      {
        title: 'new title',
        id: 2,
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
        title: 'second',
        id: 1,
        description: 'eat dinner',
        isDone: true,
      },
    ]);
  });
});
