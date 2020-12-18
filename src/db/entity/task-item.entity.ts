import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import TaskEntity from './task.entity';

@Entity()
export default class TaskItemEntity extends BaseEntity 
{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    description: string;

    @ManyToOne(() => TaskEntity, task => task.items, {onDelete: 'CASCADE'})
    task: TaskEntity;
}
