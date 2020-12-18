import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import TodoListEntity from './todo-list.entity';

@Entity()
export default class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500, nullable: true})
  password: string;

  @OneToMany(type => TodoListEntity, todo => todo.user)
  todoLists: TodoListEntity[];
}