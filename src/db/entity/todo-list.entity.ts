import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne, OneToMany} from 'typeorm';
import UserEntity from './user.entity';
import TaskEntity from './task.entity';

@Entity()
export default class TodoListEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    title: string;

    @ManyToOne(() => UserEntity, user => user.todoLists, {onDelete: 'CASCADE'})
    user: UserEntity;

    @OneToMany(type => TaskEntity, task => task.todoList)
    tasks: TaskEntity[];
}
