import { Body, Controller, Get, Post } from '@nestjs/common';
import { Task } from './task.model';
import { TaskRequest } from './taskRequest';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAll(): Task[] {
    return this.tasksService.getAll();
  }

  @Post()
  create(@Body() request: TaskRequest): Task {
    return this.tasksService.create(request);
  }
}
