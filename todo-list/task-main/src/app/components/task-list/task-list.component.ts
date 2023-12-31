import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  OnInit,
  Renderer2
} from '@angular/core';
import { Task } from 'src/models/task.model';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  isVisible = true;

  @Input() tasks: Task[] = [];
  @Output() handleTask = new EventEmitter();

  constructor(private renderer: Renderer2){

  }

  tasksFiltradas: Task[] = [];


  ngOnInit() {
    this.tasksFiltradas = this.tasks;
  }

  mostrarLista() {
    this.isVisible = !this.isVisible;
  }

  selectedTask(task: Task) {
    const currentDate = new Date();
    if (task.date > currentDate) {

    }
    this.handleTask.emit(task);
  }

  handleFiltro(filtro: string) {
    if (filtro === 'all') {
      this.tasksFiltradas = this.tasks;
      return;
    }

    this.tasksFiltradas = this.tasks.filter((item) => {
      if (item.status === filtro) {
        return item;
      }
      return;
    });
  }
}
