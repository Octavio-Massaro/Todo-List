import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFormDrivenComponent } from './task-form-driven.component';

describe('TaskFormDrivenComponent', () => {
  let component: TaskFormDrivenComponent;
  let fixture: ComponentFixture<TaskFormDrivenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskFormDrivenComponent]
    });
    fixture = TestBed.createComponent(TaskFormDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
