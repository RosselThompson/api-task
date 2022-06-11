import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';

@Injectable()
export class TaskService {
  private tasks: ITask[] = [];

  create(taskDTO: TaskDTO): ITask {
    const task = { id: uuidv4(), ...taskDTO };
    this.tasks.push(task);
    return task;
  }

  findAll(isDone: boolean): ITask[] {
    return isDone ? this.tasks.filter((e) => e.isDone === true) : this.tasks;
  }

  findOne(id: string): ITask {
    return this.tasks.find((e) => e.id === id);
  }

  update(id: string, taskDTO: TaskDTO): ITask {
    const newTask = { id, ...taskDTO };
    this.tasks = this.tasks.map((e) => (e.id === id ? newTask : e));
    return newTask;
  }

  delete(id: string): string {
    this.tasks = this.tasks.filter((e) => e.id !== id);
    return `Task ${id} removed`;
  }
}
