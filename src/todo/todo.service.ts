import GroupEntity from 'src/db/entity/group.entity';
import LabelEntity from 'src/db/entity/label.entity';
import TaskItemEntity from 'src/db/entity/task-item.entity';
import TaskEntity from 'src/db/entity/task.entity';
import TodoListEntity from 'src/db/entity/todo-list.entity';
import UserEntity from 'src/db/entity/user.entity';
import CreateTaskDto from './dto/create-task.dto';
import CreateTodoListDto from './dto/create-todo-list.entity'

export class TodoService {

  async insert(todoListDto: CreateTodoListDto) {
    const {title, userId} = todoListDto;
    const todoList = new TodoListEntity();
    todoList.title = title
    todoList.user = await UserEntity.findOne(userId);
    todoList.tasks = [];
    await todoList.save();
  }

  async getAll(): Promise<TodoListEntity[]> {
    return TodoListEntity.find();
  }

  async delete(todoListId: number) {
    const list = await TodoListEntity.findOne(todoListId);
    return list.remove();
  }

  async addTask(taskDto: CreateTaskDto) {
    const {title, listId, groupId, description, labelIds, items} = taskDto;
    const list = await TodoListEntity.findOne(listId);
    const task = new TaskEntity();
    task.title = title
    task.description = description
    task.group = await GroupEntity.findOne(groupId)
    for ( let i = 0; i < labelIds.length ; i++)
    {
        const label = await LabelEntity.findOne(labelIds[i])
        task.labels.push(label);
    }
    for ( let i = 0; i < items.length ; i++)
    {
        const item = new TaskItemEntity();
        item.task = task;
        item.description = items[i];
    }
    list.tasks.push(task)
    await task.save();
    await list.save();
  }
}

