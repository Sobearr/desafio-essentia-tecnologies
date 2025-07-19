import { Component, OnInit } from '@angular/core';
import { Task } from '../model';
import { TaskService } from '../service';
import { TaskFormComponent } from '../form/form';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [TaskFormComponent],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => (this.tasks = data),
      error: (err) => console.error('Error loading tasks', err),
    });
  }
}
