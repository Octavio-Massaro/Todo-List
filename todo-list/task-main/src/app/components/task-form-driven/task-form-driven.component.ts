import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-task-form-driven',
  templateUrl: './task-form-driven.component.html',
  styleUrls: ['./task-form-driven.component.scss']
})
export class TaskFormDrivenComponent {
  @Output() addTask = new EventEmitter();

  public newTask = new Task();

  submitTask(form: NgForm) {
    if(!form.valid) return;

    this.addTask.emit(this.newTask);
    this.newTask = new Task();
  }
}
