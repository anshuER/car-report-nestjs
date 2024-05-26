import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Point6: creating same thing for reports
@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;
}
