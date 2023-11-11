import { TestBed } from '@angular/core/testing';

import { TodoHttpService } from './todo-http.service';
import { HttpClient } from '@angular/common/http';
import { defer } from 'rxjs';

function asyncData<T>(data:T){
  return defer(() => Promise.resolve(data))
}

describe('TodoHttpService', () => {
  let service: TodoHttpService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>

  beforeEach(() => {
    
    httpClientSpy = jasmine.createSpyObj('HttpClient',
    ['get', 'post', 'delete', 'put'])
    service = new TodoHttpService(httpClientSpy)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get items when call getAll', () => {
    httpClientSpy.get.and.returnValue(
      asyncData([
      {
        id: 0,
        title: "Home work",
        description: "Have to complete home work",
        isDone: false
      }
      ]))

    service.getAll().subscribe(data => {
      expect(data.length).toEqual(1)
    })
    expect (httpClientSpy.get.calls.count()).toEqual(1)
  });

  it('Should create an item when call create',() => {
    const item = {
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false
      }
    httpClientSpy.post.and.returnValue(asyncData(item))
    service.create(item.title, item.description).subscribe((createdItem)=>{
      expect(createdItem.title).toEqual(item.title)
      expect(createdItem.description).toEqual(item.description)
    })
    expect(httpClientSpy.post.calls.count()).toEqual(1)
  });

  it('Should delete an item when call delete', () => {
    const item = {
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false
      }
    httpClientSpy.delete.and.returnValue(asyncData(item))
    service.delete(item.id).subscribe((deletedItem)=>{
      expect(deletedItem).toEqual(item)
    })
    expect(httpClientSpy.delete.calls.count()).toEqual(1)
  });

  it('Should get a specific item when call getItemById', () => {
    const item = {
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false
      }
    httpClientSpy.get.and.returnValue(asyncData(item))
    service.getItemById(item.id).subscribe((getItem)=>{
      expect(getItem).toEqual(item)
    })
    expect(httpClientSpy.get.calls.count()).toEqual(1)
  });

  it('Should update a specific item when call updateItem', () => {
    const item = {
        id: 0,
        title: 'Home work',
        description: 'Have to complete home work',
        isDone: false
      }
    httpClientSpy.put.and.returnValue(asyncData(item))
    service.updateItem(item).subscribe((updatedItem)=>{
      
      //expect(updatedItem).toEqual()
    })
  });

});
