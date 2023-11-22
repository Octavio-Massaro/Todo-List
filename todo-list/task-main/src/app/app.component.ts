import { Component } from '@angular/core';
import { Task } from 'src/models/task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  listTask: Task[] = [
    {
      date: new Date(),
      description: 'Ler um pouco',
      status: 'trabalhando',
      title: 'Leitura',
      id: 1,
    },
    {
      date: new Date(),
      description: 'Nadar 200 metros',
      status: 'trabalhando',
      title: 'Natação',
      id: 2,
    },
    {
      date: new Date(),
      description: 'Dar aquela estudada em Angular',
      status: 'finalizado',
      title: 'Estudar Angular',
      id: 3,
    },
    {
      date: new Date(),
      description: 'Pegar aquele peixão',
      status: 'finalizado',
      title: 'Pescar',
      id: 4,
    },
    {
      date: new Date(),
      description: 'Que sono bom',
      status: 'toDo',
      title: 'Dormir',
      id: 5,
    },
    {
      date: new Date(),
      description: 'Vou virar um monge',
      status: 'toDo',
      title: 'Meditar',
      id: 6,
    },
  ];

  logListTask: Task[] = [];
  taskedited: Task | null = null;
  selectedTask: Task | null = null;
  id = 6;


  onAddTask(task: Task) {
    this.listTask.push({...task, id: ++this.id});
  }

  handleTask(task: Task) {
    this.selectedTask = task;
    this.logListTask.push(task);
  }

  setEditTask(task: Task | null){
    this.taskedited = task;
  }

  editTask(task: Task) {
    const index = this.listTask.findIndex(item => item.id === task.id);
    if(index === -1) {
      alert(`Tarefa não encontrada!`);
      return;
    }
    this.listTask.splice(index, 1, task);
    this.taskedited = null;
  }

  fecharDetalhes() {
    this.selectedTask = null;
  }
}
