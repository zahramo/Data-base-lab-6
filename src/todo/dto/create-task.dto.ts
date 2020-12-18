export default class CreateTaskDto {
    readonly title: string;
    readonly listId: number;
    readonly groupId: number;
    readonly description: string;
    readonly labelIds: number[];
    readonly items: string[];
  }