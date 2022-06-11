import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('api/v1/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  createTask(@Body() taskDTO: TaskDTO) {
    return this.taskService.create(taskDTO);
  }

  @Get()
  findAllTasks(@Query('isDone') isDone: boolean) {
    return this.taskService.findAll(isDone);
  }

  @Get(':id')
  findTaskById(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() taskDTO: TaskDTO) {
    return this.taskService.update(id, taskDTO);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.delete(id);
  }

  //SIMULATE AN ERROR
  @Post('/error')
  errorException() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('An error ocurred'), 2000);
    });
  }

  //SIMULATE AN TIMEOUT
  @Post('/timeout')
  errorTimeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject('An error ocurred'), 10000);
    });
  }
}
