import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateDto } from './dto/create-task.dto';
import { GetTaskFilterDto } from './dto/get-task-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation-pipe';
import { Task } from './tasks.entity';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) { }
    // @Get()
    // getTasks(@Query(ValidationPipe) filterDto: GetTaskFilterDto): Task[] {
    //     if (Object.keys(filterDto).length) {
    //         return this.tasksService.getTasksWithFilters(filterDto);
    //     }
    //     else {
    //         return this.tasksService.getAllTasks();
    //     }
    // }
    @Get('/:id')
    getTaskById(@Param('id', ParseIntPipe) id: number): Promise<Task> {
        return this.tasksService.getTaskById(id);
    }
    // @Delete('/:id')
    // deleteTaskById(@Param('id') id: string): void {
    //     return this.tasksService.deleteTaskById(id);
    // }
    // @Patch('/:id/status')
    // updateStatusById(@Param('id') id: string, @Body('status', TaskStatusValidationPipe) status: TaskStatus): Task {
    //     return this.tasksService.updateStatusId(id, status);
    // }
    // @Post()
    // @UsePipes(ValidationPipe)
    // createTask(@Body() createTaskDto: CreateDto): Task {
    //     return this.tasksService.createTask(createTaskDto);
    // }

}