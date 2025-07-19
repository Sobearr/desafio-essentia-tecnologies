import { Component, OnInit } from '@angular/core';
import { Task } from '../model';
import { TaskService } from '../service';
import { TaskFormComponent } from '../form/form';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [FormsModule, TaskFormComponent],
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
    this.taskService.deleteTask(id).subscribe({
      next: () => this.getTasks(),
      error: (err) => console.error('Error deleting task', err),
    });
  }

  toggleComplete(task: Task): void {
    this.taskService
      .updateTask(task.id, { complete: !task.complete })
      .subscribe({
        next: () => this.getTasks(),
        error: (err) => console.error('Error toggling task', err),
      });
  }

  editingTaskId: number | null = null;
  editedTitle: string = '';

  startEditing(task: Task): void {
    this.editingTaskId = task.id;
    this.editedTitle = task.title;
  }

  saveEdit(task: Task): void {
    const title = this.editedTitle.trim();
    if (!title) return;

    this.taskService.updateTask(task.id, { title }).subscribe({
      next: () => {
        this.editingTaskId = null;
        this.getTasks();
      },
      error: (err) => console.error('Error updating task', err),
    });
  }

  cancelEdit(): void {
    this.editingTaskId = null;
  }
}
