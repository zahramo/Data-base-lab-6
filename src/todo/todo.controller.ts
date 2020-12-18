import { Body, Controller, Delete, Get, Post, Put, Param} from '@nestjs/common';
import CreateTaskDto from './dto/create-task.dto';
import CreateTodoListDto from './dto/create-todo-list.entity'
import { TodoService } from './todo.service'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';
import {ApiBearerAuth} from '@nestjs/swagger';

@Controller('todo')
export default class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('post')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  insertTodoList(@Body() todoListDto: CreateTodoListDto) {
    return this.todoService.insert(todoListDto);
  }

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getAllTodoLists() {
    return this.todoService.getAll();
  }

  @Delete()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  deletetask(@Param('todoListId') todoListId: number){
    return this.todoService.delete(todoListId);
  }

  @Put()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  insertTask(@Body() taskDto: CreateTaskDto) {
    return this.todoService.addTask(taskDto);
  }
}
