import { Component, OnInit } from '@angular/core';
import { Task } from '../model';
import { TaskService } from '../service';
import { TaskFormComponent } from '../form/form';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [FormsModule, TaskFormComponent, NgClass],
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

  deleteTask(id: number): void {
    if (!id) return;

    this.taskService.deleteTask(id).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.error('Error deleting task', err),
    });
  }

  toggleComplete(task: Task): void {
    const updated = { id: task.id!, complete: !task.complete };

    this.taskService.updateTask(updated).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.error('Error toggling task', err),
    });
  }

  taskFormModel: Task = { title: '', complete: false };

  editTask(task: Task): void {
    this.taskFormModel = { ...task };
  }

  handleFormSubmit(task: Task): void {
    if (task.id) {
      this.taskService
        .updateTask(task as Partial<Task> & { id: number })
        .subscribe({
          next: () => this.getTasks(),
          error: (err) => console.error('Error updating task', err),
        });
    } else {
      this.taskService.createTask(task).subscribe({
        next: () => this.getTasks(),
        error: (err) => console.error('Error creating task', err),
      });
    }
    this.taskFormModel = { title: '', complete: false };
  }

  filter: 'all' | 'active' | 'completed' = 'all';

  get filteredTasks(): Task[] {
    switch (this.filter) {
      case 'active':
        return this.tasks.filter((t) => !t.complete);
      case 'completed':
        return this.tasks.filter((t) => t.complete);
      default:
        return this.tasks;
    }
  }
}
