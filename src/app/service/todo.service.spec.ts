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
        title: 'First Item',
        description: 'This is the first item',
        isDone: false,
      },
      {
        id: 2,
        title: 'Second Item',
        description: 'This is the second item',
        isDone: true,
      },
      {
        id: 3,
        title: 'Third Item',
        description: 'This is the third item',
        isDone: false,
      },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all items when getAll', () => {
    expect(service.getAll().length).toBe(3);
  });

  it('should create a new item when create', () => {
    service.create('New Item', 'This is a new item');
    expect(service.items.length).toBe(4);
  });

  it('should mark an item as done when markAsDone', () => {
    service.markAsDone(1);
    expect(service.items[0].isDone).toBe(true);
  });
});
