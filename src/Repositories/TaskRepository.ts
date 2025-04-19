import { Injectable } from '@nestjs/common';
import { PrismaService } from '../PrismaService';
import { Prisma , Task} from '@prisma/client';

@Injectable()
export default class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.task.findMany();
  }

  async delete(id: number) {
    return this.prisma.task.delete({
      where: {
        id,
      },
    });
  }

  async save(
    data: Prisma.TaskCreateInput | (Prisma.TaskUpdateInput & { id: number }),
  ): Promise<Task> {
    if (hasIdField(data)) {
      return this.prisma.task.update({
        where: { id: data.id },
        data,
      });
    }
  
    return this.prisma.task.create({
      data,
    });
  }
}

function hasIdField(
  data: Prisma.TaskCreateInput | Prisma.TaskUpdateInput,
): data is Prisma.TaskUpdateInput & { id: number } {
  return typeof (data as any).id === 'number';
}
