import { Injectable, NotFoundException } from '@nestjs/common';

import { TaskStatus } from './tasks-status.enum';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetFilterTasksDto } from './dto/get-filter-tasks.dto';
import { TaskRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
// 03349817570|s.qasim@uqoud.com|Test@user1|089980

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskRepository)
    private taskRepository: TaskRepository,
  ) {}
  getTasks(filterDto: GetFilterTasksDto): Promise<Task[]> {
    return this.taskRepository.getTasks(filterDto);
  }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskRepository.createTask(createTaskDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.taskRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with id ${id} not found!`);
    }
    return found;
  }

  async deleteTaskById(id: string): Promise<void> {
    const result = await this.taskRepository.delete(id);
    console.log(result);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with id ${id} not found!`);
    }
  }

  async updateTaskStatus(id: string, status: TaskStatus): Promise<Task> {
    const taskToUpdate = await this.getTaskById(id);
    taskToUpdate.status = status;
    await this.taskRepository.save(taskToUpdate);
    return taskToUpdate;
  }
}
