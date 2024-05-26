import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Point3: creating entity here
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
