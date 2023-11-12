import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { ToDoItem } from 'src/model/ToDoItem';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
  let apiUrl: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
    apiUrl = 'https://localhost:44309/ToDoItems';
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should get items', () => {
    const testItems: ToDoItem[] = [{ id: 1, title: 'Test Title', description: 'Test Description', isDone: false }];

    service.getItems().subscribe(items => {
      expect(items).toEqual(testItems);
    });

    const req = httpTestingController.expectOne(`${apiUrl}`);
    expect(req.request.method).toEqual('GET');
    req.flush(testItems);
  });

  it('should get item by id', () => {
    const testItem: ToDoItem = { id: 1, title: 'Test Title', description: 'Test Description', isDone: false };

    service.getItemById('1').subscribe(item => {
      expect(item).toEqual(testItem);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toEqual('GET');
    req.flush(testItem);
  });

  it('should add an item', () => {
    const newItem: ToDoItem = { id: 2, title: 'New Item', description: 'New Description', isDone: false };

    service.addItem(newItem).subscribe(item => {
      expect(item).toEqual(newItem);
    });

    const req = httpTestingController.expectOne(`${apiUrl}`);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newItem);
    req.flush(newItem);
  });

  it('should update an item', () => {
    const updatedItem: ToDoItem = { id: 1, title: 'Updated Title', description: 'Updated Description', isDone: true };

    service.updateItem('1', updatedItem).subscribe(item => {
      expect(item).toEqual(updatedItem);
    });

    const req = httpTestingController.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(updatedItem);
    req.flush(updatedItem);
  });

  it('should delete an item', () => {
    service.deleteItem('1').subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpTestingController.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
  });
});
