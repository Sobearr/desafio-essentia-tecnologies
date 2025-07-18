import { Component, OnInit } from '@angular/core';
import { Task } from '../model';
import { TaskService } from '../service';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe({
      next: (data) => (this.tasks = data),
      error: (err) => console.error('Error loading tasks', err),
    });
  }
}
