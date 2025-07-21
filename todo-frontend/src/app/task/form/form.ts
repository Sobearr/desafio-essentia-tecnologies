import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
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
export class TaskFormComponent implements OnChanges {
  @Input() task: Task = { title: '', complete: false };
  @Output() submitted = new EventEmitter<Task>();

  model: Task = { title: '', complete: false };

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['task'] && this.task) {
      this.model = { ...this.task };
    }
  }

  onSubmit(): void {
    if (!this.model.title.trim()) return;
    this.submitted.emit(this.model);
    this.model = { title: '', complete: false };
  }
}
