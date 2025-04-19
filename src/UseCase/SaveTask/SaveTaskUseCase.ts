  import { Injectable, BadRequestException } from '@nestjs/common';
  import { Task } from '@prisma/client';
  import { UseCase } from '../../index';
  import SaveTaskDto from './SaveTaskDto';
import TaskRepository from 'src/Repositories/TaskRepository';

  @Injectable()
  export default class SaveTaskUseCase implements UseCase<Promise<Task>, [dto: SaveTaskDto]> {
    constructor(private readonly taskRepository: TaskRepository) {}
    async handle(dto: SaveTaskDto): Promise<Task> {
      if (!dto.name || dto.name.trim() === '') {
        throw new BadRequestException('Le nom de la tâche est requis.');
      }
  
      return this.taskRepository.save({
        id: dto.id ?? undefined,
        name: dto.name,
      });
    }
  }
