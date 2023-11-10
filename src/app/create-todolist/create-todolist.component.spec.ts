import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTodolistComponent } from './create-todolist.component';

describe('CreateTodolistComponent', () => {
  let component: CreateTodolistComponent;
  let fixture: ComponentFixture<CreateTodolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateTodolistComponent]
    });
    fixture = TestBed.createComponent(CreateTodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
