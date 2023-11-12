import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { TodoHttpService } from './todo-http.service';
import { ApiService } from './api.service';
import { ToDoItem } from 'src/model/ToDoItem';

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // HttpClientTestingModule is not needed because we are not using HttpTestingController
      providers: [
        TodoHttpService,
        {
          provide: ApiService,
          useValue: jasmine.createSpyObj('ApiService', ['getItems', 'getItemById', 'addItem', 'updateItem', 'deleteItem'])
        }
      ]
    });
    service = TestBed.inject(TodoHttpService);
    apiService = TestBed.inject(ApiService);
  });

  it('should retrieve all items', () => {
    const testItems: ToDoItem[] = [
      { id: 1, title: 'Test Item 1', description: 'Description 1', isDone: false },
      { id: 2, title: 'Test Item 2', description: 'Description 2', isDone: true }
    ];
    (apiService.getItems as jasmine.Spy).and.returnValue(of(testItems));

    service.getAll().subscribe(items => {
      expect(items).toEqual(testItems);
      expect(apiService.getItems).toHaveBeenCalled();
    });
  });

  it('should create a new item', () => {
    const newItem: ToDoItem = { id: 3, title: 'New Item', description: 'New Description', isDone: false };
    (apiService.addItem as jasmine.Spy).and.returnValue(of(newItem));

    service.create(newItem.title, newItem.description).subscribe(item => {
      expect(item).toEqual(newItem);
      expect(apiService.addItem).toHaveBeenCalledWith(jasmine.any(Object));
    });
  });

  it('should mark an item as done', () => {
    const updatedItem: ToDoItem = { id: 1, title: 'Updated Item', description: 'Updated Description', isDone: true };
    (apiService.updateItem as jasmine.Spy).and.returnValue(of(updatedItem));

    service.markAsDone(updatedItem.id).subscribe(item => {
      expect(item).toEqual(updatedItem);
      expect(apiService.updateItem).toHaveBeenCalledWith(updatedItem.id.toString(), jasmine.any(Object));
    });
  });

  it('should retrieve a single item', () => {
    const testItem: ToDoItem = { id: 1, title: 'Test Item', description: 'Test Description', isDone: false };
    (apiService.getItemById as jasmine.Spy).and.returnValue(of(testItem));

    service.getItem(testItem.id).subscribe(item => {
      expect(item).toEqual(testItem);
      expect(apiService.getItemById).toHaveBeenCalledWith(testItem.id.toString());
    });
  });
});
