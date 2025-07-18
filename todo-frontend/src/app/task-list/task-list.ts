import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css',
})
export class TaskList {
  tasks = [
    { id: 1, title: 'Criar dados mock', complete: true },
    { id: 2, title: 'Conectar com o back', complete: false },
    { id: 3, title: 'Deixar o front bonito', complete: false },
  ];
}
