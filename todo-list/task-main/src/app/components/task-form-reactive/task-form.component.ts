import { Component, EventEmitter,Input, Output } from '@angular/core';
import { Task } from 'src/models/task.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent {

  @Input() taskedited: Task | null = null;
  @Output() addTask = new EventEmitter();
  @Output() editTask = new EventEmitter();

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder){}

  ngOnChanges() {
    if(this.taskedited) {
      this.formulario.reset({
        ...this.taskedited,
        date: new Date(this.taskedited.date).toISOString().split('T')[0]
      });
    }
  }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      date: ['', [Validators.required]],
      status: ['', [Validators.required]]
    });
  }

  get title() { return this.formulario.get("title"); }
  get description() { return this.formulario.get("description"); }
  get date() { return this.formulario.get("date"); }
  get status() { return this.formulario.get("status"); }

  public newTask = new Task();

  submitTask() {
    if (this.formulario.invalid) {
      this.markFormGroupTouched(this.formulario);
    } else {
      if (this.taskedited) {
        this.editTask.emit({...this.formulario.value, id: this.taskedited.id})

      } else {
        this.addTask.emit(this.formulario.value);
      }
      this.formulario.reset()
      this.newTask = new Task();
  }
}

markFormGroupTouched(formGroup: FormGroup) {
  Object.values(formGroup.controls).forEach(control => {
    if (control instanceof FormGroup) {
      this.markFormGroupTouched(control);
    } else {
      control.markAsTouched();
    }
  });
}
}
