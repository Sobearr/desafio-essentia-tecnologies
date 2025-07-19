import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../service';
import { Task } from '../model';

@Component({
  selector: 'task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class TaskFormComponent {
  newTaskTitle: string = '';

  @Output()
  taskCreated = new EventEmitter<void>();

  constructor(private taskService: TaskService) {}

  addTask(): void {
    const title = this.newTaskTitle.trim();
    if (!title) return;

    const newTask: Omit<Task, 'id'> = {
      title,
      complete: false,
    };

    this.taskService.createTask(newTask).subscribe({
      next: () => {
        this.newTaskTitle = '';
        this.taskCreated.emit();
      },
      error: (err) => console.error('Error creating task', err),
    });
  }
}
