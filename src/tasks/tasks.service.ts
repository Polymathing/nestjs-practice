import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Task, TaskStatus } from './task.model';
import { TaskRequest } from './taskRequest';
@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAll(): Task[] {
    return this.tasks;
  }

  create(request: TaskRequest): Task {
    const task: Task = {
      id: uuid(),
      title: request.title,
      description: request.description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }
}
