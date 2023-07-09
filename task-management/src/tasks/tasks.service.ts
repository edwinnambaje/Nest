import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';


@Injectable()
export class TasksService {
    // private tasks: Task[] = [];

    // getAllTasks() {
    //     return this.tasks;
    // }
    // getTaskById(id: string): Task {
    //     const found = this.tasks.find(tasks => tasks.id === id);
    //     if (!found) {
    //         throw new NotFoundException()
    //     }
    //     return found
    // }
    // createTask(createTaskDto: CreateDto): Task {
    //     const { title, description } = createTaskDto
    //     const task: Task = {
    //         id: uuidv4(),
    //         title,
    //         description,
    //         status: TaskStatus.OPEN
    //     }
    //     this.tasks.push(task);
    //     return task;
    // }
    // getTasksWithFilters(filterDto: GetTaskFilterDto): Task[] {
    //     const { status, search } = filterDto
    //     let tasks = this.getAllTasks()
    //     if (status) {
    //         tasks = tasks.filter(task => task.status === status);
    //     }
    //     if (search) {
    //         tasks = tasks.filter(task => task.title.includes(search) || task.description.includes(search));
    //     }
    //     return tasks;
    // }
    // deleteTaskById(id: string): void {
    //     const found = this.getTaskById(id);
    //     this.tasks = this.tasks.filter(task => task.id !== found.id)
    // }
    // updateStatusId(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id);
    //     task.status = status;
    //     return task;
    // }

}
