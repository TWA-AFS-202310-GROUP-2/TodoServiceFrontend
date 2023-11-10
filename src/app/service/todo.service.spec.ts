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
      }
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return all items when getAll', () => {
    const items = service.getAll();
    expect(items).toEqual(
      [
        {
          id: 1,
          title: 'First Item',
          description: 'This is the first item',
          isDone: false,
        }
      ]
    )
  });

  it('should create a new item when create', () => {
    service.create('Second Item', 'This is the second item');
    expect(service.items).toEqual([
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
        isDone: false,
      }]);
  });

  it('should mark an item as done when markAsDone', () => {
    service.markAsDone(1);
    expect(service.items).toEqual([
      {
        id: 1,
        title: 'First Item',
        description: 'This is the first item',
        isDone: true,
      }]);
  });

  it('should return an item when getItem', () => {
    const item = service.getItem(1);
    expect(item).toEqual(
      {
        id: 1,
        title: 'First Item',
        description: 'This is the first item',
        isDone: false,
      }
    )
  });
});
