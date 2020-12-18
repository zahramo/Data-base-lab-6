import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, ManyToMany, OneToMany } from 'typeorm';
import { Optional } from '@nestjs/common';
import LabelEntity from './label.entity';
import GroupEntity from './group.entity'
import TodoListEntity from './todo-list.entity';
import TaskItemEntity from './task-item.entity';

@Entity()
export default class TaskEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @ManyToOne(() => GroupEntity)
    group: GroupEntity;

    @Optional()
    @ManyToMany(() => LabelEntity)
    labels: LabelEntity[];

    @Optional()
    @Column({ length: 500 })
    description: string;

    @ManyToOne(() => TodoListEntity, todoList => todoList.tasks, {onDelete: 'CASCADE'})
    todoList: TodoListEntity;

    @OneToMany(() => TaskItemEntity, items => items.task)
    items: TaskItemEntity[];

}
