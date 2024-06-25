import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user';

@Entity({
  name: 'phonebook',
})

export class PhoneBook extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text', nullable: true })
  contactname: string;

  @Column({ type: 'text', nullable: true })
  contactnumber: string;

  @ManyToOne(() => User)
  user: User;

  @Column({ type: 'bigint' })
  created_at: number;

  @Column({ type: 'bigint' })
  updated_at: number;
}   